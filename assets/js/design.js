(() => {
  "use strict";
  const menu = document.getElementById("menu-toggle");
  const nav = document.getElementById("navigation");
  if (!menu || !nav) return;
  const close = () => { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); };
  menu.addEventListener("click", () => { menu.setAttribute("aria-expanded", String(nav.classList.toggle("open"))); });
  nav.addEventListener("click", event => { if (event.target.closest("a")) close(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && nav.classList.contains("open")) { close(); menu.focus(); } });
})();
