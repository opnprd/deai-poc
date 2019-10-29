import L from 'leaflet';

export default function initMap({ id, centre, zoom, layers } = {}) {
  const map = L.map(id).setView(centre, zoom);
  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });
  osm.addTo(map);
  const overlays = {};
  layers.forEach(l => {
    const { name, data, options } = l;
    const layer = L.geoJSON(data, options).addTo(map);
    overlays[name] = layer;
  });
  L.control.layers({}, overlays).addTo(map);
  L.control.scale().addTo(map);
  return map;
}
