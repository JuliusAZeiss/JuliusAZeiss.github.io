(() => {
  "use strict";

  const graph = document.getElementById("coloring-graph");
  if (!graph) return;

  const vertices = Array.from(graph.querySelectorAll(".graph-vertex"));
  const colors = vertices.map(vertex => vertex.getAttribute("fill"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
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
    if (!reducedMotion.matches && !document.hidden && inView) {
      timer = window.setInterval(recolor, 1000);
    }
  };

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
