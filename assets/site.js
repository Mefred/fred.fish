(() => {
  const menuButton = document.querySelector(".mobile-menu");
  const backdrop = document.querySelector(".sidebar-backdrop");

  const closeMenu = () => {
    document.body.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (backdrop) backdrop.hidden = true;
  };

  menuButton?.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(open));
    if (backdrop) backdrop.hidden = !open;
  });
  backdrop?.addEventListener("click", closeMenu);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.querySelectorAll(".folder-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      const children = document.getElementById(button.getAttribute("aria-controls"));
      if (children) children.hidden = expanded;
    });
  });

  document.querySelectorAll("[data-year]").forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });
})();