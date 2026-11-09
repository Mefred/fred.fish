import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { createRequire } from "node:module";
import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { chromium } from "playwright";

const require = createRequire(import.meta.url);
const baseUrl = process.env.BROWSER_TEST_URL || "http://127.0.0.1:4321";
const corePages = [
  "/",
  "/cisco/",
  "/cisco/learning/",
  "/cisco/learning/semester-1/",
  "/cisco/practice/",
  "/cisco/progress/",
  "/cisco/reference/",
];
const collectHtml = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) return collectHtml(path);
  if (!entry.isFile() || !entry.name.endsWith(".html")) return [];
  const rel = relative("dist", path).split(sep).join("/");
  return [rel.endsWith("/index.html") ? `/${rel.slice(0, -10)}` : rel === "index.html" ? "/" : `/${rel}`];
});
const pages = [...new Set([...corePages, ...collectHtml("dist")])].sort();
const server = process.env.BROWSER_TEST_URL ? null : spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4321"], {
  stdio: "ignore",
  env: process.env,
});
let browser;
const failures = [];
const axeViolations = [];

try {
  if (server) {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
      if (server.exitCode !== null) throw new Error(`Astro preview exited with ${server.exitCode}`);
      try {
        const response = await fetch(baseUrl);
        if (response.ok) { ready = true; break; }
      } catch {}
      await delay(500);
    }
    assert.ok(ready, "Astro preview server did not become ready");
  }

  browser = await chromium.launch({ headless: true });
  for (const viewport of [
    { name: "desktop", width: 1440, height: 900 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: viewport.name === "mobile" ? 2 : 1, isMobile: viewport.name === "mobile", hasTouch: viewport.name === "mobile" });
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    for (const route of pages) {
      const response = await page.goto(new URL(route, baseUrl).href, { waitUntil: "networkidle" });
      assert.ok(response?.ok(), `${viewport.name}: ${route} returned ${response?.status()}`);
      assert.equal(pageErrors.length, 0, `${viewport.name}: ${route} raised page errors: ${pageErrors.join("; ")}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      assert.equal(overflow, false, `${viewport.name}: ${route} has horizontal overflow`);

      await page.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
      const audit = await page.evaluate(async () => window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"] },
      }));
      for (const violation of audit.violations) {
        axeViolations.push({
          viewport: viewport.name,
          route,
          id: violation.id,
          impact: violation.impact,
          description: violation.help,
          nodes: violation.nodes.length,
          examples: violation.nodes.slice(0, 3).map((node) => node.target.join(" ")),
        });
      }
    }

    {
      await page.goto(new URL("/cisco/practice/", baseUrl).href, { waitUntil: "networkidle" });
      await page.evaluate(() => localStorage.removeItem("fredfish.learning.progress.v1"));
      await page.reload({ waitUntil: "networkidle" });
      const initialAnswers = await page.evaluate(() => JSON.parse(localStorage.getItem("fredfish.learning.progress.v1") || "{}").totalAnswers || 0);
      assert.equal(initialAnswers, 0, "browser practice should start with a clean learner profile");
      await page.getByRole("button", { name: /Start 10-question practice/i }).click();
      assert.equal(await page.locator(".quiz-prompt").count(), 1, "starting practice should render a question");
      const seenFormats = new Set();
      for (let questionIndex = 0; questionIndex < 10; questionIndex++) {
        assert.equal(await page.locator(".quiz-prompt").count(), 1, `question ${questionIndex + 1} should render`);
        if (await page.locator("[data-choice]").count()) {
          seenFormats.add("choice / multiple-select / true-false / scenario");
          if (viewport.name === "mobile") await page.locator("[data-choice]").first().tap();
          else {
            await page.locator("[data-choice]").first().focus();
            await page.keyboard.press("Enter");
          }
        } else if (await page.locator("#fill-answer").count()) {
          seenFormats.add("fill-in");
          await page.locator("#fill-answer").fill("test response");
        } else if (await page.locator("[data-pair]").count()) {
          seenFormats.add("matching");
          const selects = page.locator("[data-pair]");
          for (let i = 0; i < await selects.count(); i++) await selects.nth(i).selectOption({ index: i + 1 });
        } else if (await page.locator("#ordering-list").count()) {
          seenFormats.add("ordering");
        } else {
          throw new Error(`Question ${questionIndex + 1} has no recognized response control`);
        }
        await page.locator("#submit-answer").click();
        assert.equal(await page.locator("#answer-feedback[hidden]").count(), 0, "submitting an answer should show feedback");
        assert.ok(await page.locator("#answer-feedback").innerText(), "answer feedback should include an explanation");
        if (questionIndex < 9) await page.locator("#submit-answer").click();
      }
      await page.locator("#submit-answer").click();
      assert.equal(await page.locator(".session-complete").count(), 1, "finishing ten answers should complete the session");
      const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("fredfish.learning.progress.v1") || "null"));
      assert.ok(saved, "answering should persist learning progress in local storage");
      assert.equal(saved.totalAnswers, 10, "a complete session should record ten answers");
      assert.equal(saved.totalSessions, 1, "a complete session should increment the session count");
      await page.goto(new URL("/cisco/progress/", baseUrl).href, { waitUntil: "networkidle" });
      assert.match(await page.locator("#learning-dashboard").innerText(), /10/);
      assert.match(await page.locator("#learning-dashboard").innerText(), /Sessions/);

    }

    assert.equal(pageErrors.length, 0, `${viewport.name} browser errors: ${pageErrors.join("; ")}`);
    await context.close();
  }

  const serious = axeViolations.filter((item) => item.impact === "serious" || item.impact === "critical");
  console.log(JSON.stringify({
    browser: "Chromium",
    viewports: ["1440x900 desktop", "390x844 mobile"],
    routesTested: pages.length,
    routes: pages,
    practiceInteraction: "complete ten-question session at both desktop and mobile viewports, keyboard answer selection, per-answer feedback, local persistence, and dashboard update",
    axeViolations,
  }, null, 2));
  assert.equal(serious.length, 0, `Serious or critical accessibility violations: ${JSON.stringify(serious)}`);
} finally {
  await browser?.close();
  if (server) {
    server.kill("SIGTERM");
    await delay(250);
    if (server.exitCode === null) server.kill("SIGKILL");
  }
}
