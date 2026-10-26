(() => {
  "use strict";

  const graph = document.getElementById("coloring-graph");
  const toggle = document.getElementById("graph-toggle");
  if (!graph || !toggle) return;

  const vertices = Array.from(graph.querySelectorAll(".graph-vertex"));
  const colors = vertices.map(vertex => vertex.getAttribute("fill"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = false;
  let inView = !("IntersectionObserver" in window);
  let timer = null;

  // Rotate the palette together: each settled coloring uses all five colors.
  // A cyclic rotation also avoids directly swapping a pair of vertex colors.
  const recolor = () => {
    colors.push(colors.shift());
    vertices.forEach((vertex, index) => vertex.setAttribute("fill", colors[index]));
  };

  const sync = () => {
    window.clearInterval(timer);
    timer = null;
    toggle.hidden = reducedMotion.matches;
    toggle.textContent = paused ? "Play animation" : "Pause animation";
    toggle.setAttribute("aria-label", paused ? "Play graph coloring animation" : "Pause graph coloring animation");
    graph.classList.toggle("is-paused", paused || reducedMotion.matches);

    if (!paused && !reducedMotion.matches && !document.hidden && inView) {
      timer = window.setInterval(recolor, 3600);
    }
  };

  toggle.addEventListener("click", () => {
    paused = !paused;
    sync();
  });
  reducedMotion.addEventListener("change", sync);
  document.addEventListener("visibilitychange", sync);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      sync();
    });
    observer.observe(graph);
  }

  sync();
})();
