/* Map of the places where talks and posters were presented.
   Used by _includes/talk-map.html, which loads Leaflet, defines
   window.talkMapData (built from the lat/lon fields in _talks/*.md)
   and then loads this script. */
(function () {
  "use strict";
  var talks = window.talkMapData || [];
  var container = document.getElementById("talk-map");
  if (!container) { return; }
  if (!talks.length || typeof L === "undefined") { container.style.display = "none"; return; }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c];
    });
  }

  var map = L.map("talk-map", { scrollWheelZoom: false, worldCopyJump: true });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  /* Group talks given at (essentially) the same place into one marker. */
  var places = {};
  talks.forEach(function (t) {
    var key = t.lat.toFixed(3) + "," + t.lon.toFixed(3);
    if (!places[key]) { places[key] = { lat: t.lat, lon: t.lon, talks: [] }; }
    places[key].talks.push(t);
  });

  /* Marker colour follows the theme's link colour (light/dark mode). */
  var color = "#1a6fb0";
  if (window.getComputedStyle) {
    var themeColor = getComputedStyle(document.documentElement).getPropertyValue("--global-link-color");
    if (themeColor && themeColor.trim()) { color = themeColor.trim(); }
  }

  var markers = [];
  Object.keys(places).forEach(function (key) {
    var place = places[key];
    place.talks.sort(function (a, b) { return a.iso < b.iso ? 1 : (a.iso > b.iso ? -1 : 0); });
    var html = '<p class="talk-map__place">' + esc(place.talks[0].location) + "</p>" +
      place.talks.map(function (t) {
        return "<p><a href=\"" + esc(t.url) + "\">" + esc(t.title) + "</a><br>" +
          '<span class="talk-map__meta">' + esc(t.type) + ", " + esc(t.venue) + ", " + esc(t.date) + "</span></p>";
      }).join("");
    var marker = L.circleMarker([place.lat, place.lon], {
      radius: 6 + 2 * (place.talks.length - 1),
      color: color, weight: 2, fillColor: color, fillOpacity: 0.45
    }).bindPopup(html, { maxWidth: 320 });
    marker.addTo(map);
    markers.push(marker);
  });

  map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [30, 30], maxZoom: 6 });
})();
