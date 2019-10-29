import L from 'leaflet';

export default function initMap({ id, centre, zoom, layers } = {}) {
  const map = L.map(id).setView(centre, zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  layers.forEach(l => {
    const { data, options } = l;
    L.geoJSON(data, options).addTo(map);
  });

  return map;
}
