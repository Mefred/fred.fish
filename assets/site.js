(() => {
  const body = document.body;
  const menuButton = document.querySelector(".mobile-menu");
  const backdrop = document.querySelector(".sidebar-backdrop");
  const collapseButton = document.querySelector(".sidebar-collapse");

  const closeMobileMenu = () => {
    body.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (backdrop) backdrop.hidden = true;
  };

  menuButton?.addEventListener("click", () => {
    const open = body.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(open));
    if (backdrop) backdrop.hidden = !open;
  });
  backdrop?.addEventListener("click", closeMobileMenu);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMobileMenu();
  });
  document.querySelectorAll(".sidebar a").forEach(link => link.addEventListener("click", closeMobileMenu));

  document.querySelectorAll(".folder-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      const children = document.getElementById(button.getAttribute("aria-controls"));
      if (children) children.hidden = expanded;
    });
  });

  try {
    if (localStorage.getItem("fred-sidebar-collapsed") === "true" && window.innerWidth > 760) {
      body.classList.add("sidebar-collapsed");
      collapseButton?.setAttribute("aria-expanded", "false");
      const label = collapseButton?.querySelector(".collapse-label");
      if (label) label.textContent = "Expand sidebar";
      const icon = collapseButton?.querySelector(".collapse-icon");
      if (icon) icon.textContent = "⇥";
    }
  } catch (_) {}

  collapseButton?.addEventListener("click", () => {
    const collapsed = body.classList.toggle("sidebar-collapsed");
    collapseButton.setAttribute("aria-expanded", String(!collapsed));
    collapseButton.querySelector(".collapse-label").textContent = collapsed ? "Expand sidebar" : "Collapse sidebar";
    collapseButton.querySelector(".collapse-icon").textContent = collapsed ? "⇥" : "⇤";
    try { localStorage.setItem("fred-sidebar-collapsed", String(collapsed)); } catch (_) {}
  });

  document.querySelectorAll("[data-year]").forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });
})();
