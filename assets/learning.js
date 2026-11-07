(() => {
  const storageGet = key => {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  };
  const storageSet = (key, value) => {
    try { localStorage.setItem(key, value); } catch (_) {}
  };

  const updateLessonProgress = (control, saved) => {
    const complete = control.checked;
    const label = control.closest(".lesson-complete")?.querySelector("[data-completion-label]");
    if (label) {
      label.textContent = complete
        ? saved
          ? "Lesson marked complete. Progress is saved in this browser."
          : "Lesson marked complete, but browser storage is unavailable. Progress may not persist."
        : "Mark this lesson complete when you are ready.";
    }
    const bar = document.querySelector(".lesson-aside .progress-track span");
    if (bar) bar.style.width = complete ? "100%" : "0%";
  };

  const updateCourseProgress = () => {
    const panel = document.querySelector("[data-course-progress]");
    if (!panel) return;
    let complete = 0;
    for (let n = 1; n <= 30; n++) {
      if (storageGet("fred-cisco-complete-" + String(n).padStart(2, "0")) === "true") complete++;
    }
    const count = panel.querySelector("[data-progress-count]");
    const bar = panel.querySelector(".progress-track span");
    const percent = Math.round(complete / 30 * 100);
    if (count) count.textContent = complete + " / 30 modules completed";
    if (bar) bar.style.width = percent + "%";
    panel.setAttribute("aria-label", percent + "% of the course completed");
  };

  document.querySelectorAll("[data-lesson-quiz]").forEach(quiz => {
    const questions = [...quiz.querySelectorAll(".quiz-question")];
    const result = quiz.querySelector(".quiz-result");
    const submit = quiz.querySelector("[data-quiz-submit]");
    const reset = quiz.querySelector("[data-quiz-reset]");
    if (!submit || !result || !questions.length) return;

    submit.addEventListener("click", () => {
      let score = 0;
      let answered = 0;
      questions.forEach(question => {
        const correct = (question.dataset.correct || "").split(",").filter(Boolean);
        const selected = [...question.querySelectorAll("input:checked")].map(input => input.value);
        if (selected.length) answered++;
        const isCorrect = selected.length === correct.length && correct.every(value => selected.includes(value));
        if (isCorrect) score++;
        question.classList.add("graded");
        question.querySelectorAll(".quiz-option").forEach(option => {
          const input = option.querySelector("input");
          const feedback = option.querySelector(".option-feedback");
          const isRight = correct.includes(input.value);
          const chosen = input.checked;
          option.classList.toggle("correct", isRight);
          option.classList.toggle("incorrect", chosen && !isRight);
          input.disabled = true;
          if (feedback) {
            const status = isRight ? "Correct choice: " : chosen ? "Your selection: " : "Not selected: ";
            feedback.textContent = status + feedback.dataset.explanation;
          }
        });
      });
      const percent = Math.round(score / questions.length * 100);
      result.classList.add("visible");
      result.textContent = "Result: " + score + " / " + questions.length + " (" + percent + "%). " +
        (answered === questions.length ? "All questions answered. " : answered + " of " + questions.length + " questions answered. ") +
        (score === questions.length ? "Excellent work. You have a strong grasp of this lesson." : "Read each explanation, then retry the quiz to reinforce the concepts.");
      storageSet("fred-cisco-quiz-" + document.title, JSON.stringify({ score, total: questions.length, percent }));
      submit.disabled = true;
      if (reset) reset.hidden = false;
    });

    reset?.addEventListener("click", () => {
      questions.forEach(question => {
        question.classList.remove("graded");
        question.querySelectorAll("input").forEach(input => { input.checked = false; input.disabled = false; });
        question.querySelectorAll(".quiz-option").forEach(option => option.classList.remove("correct", "incorrect"));
        question.querySelectorAll(".option-feedback").forEach(feedback => { feedback.textContent = feedback.dataset.explanation; });
      });
      result.classList.remove("visible");
      result.textContent = "";
      submit.disabled = false;
      reset.hidden = true;
    });
  });

  document.querySelectorAll("[data-completion]").forEach(control => {
    const key = "fred-cisco-complete-" + control.dataset.completion;
    control.checked = storageGet(key) === "true";
    updateLessonProgress(control, !control.checked || storageGet(key) === "true");
    control.addEventListener("change", () => {
      storageSet(key, String(control.checked));
      updateLessonProgress(control, storageGet(key) === String(control.checked));
      updateCourseProgress();
    });
  });

  updateCourseProgress();
})();