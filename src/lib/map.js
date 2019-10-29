import L from 'leaflet';

import { Wikimedia } from './mapping/base-maps.js';

export default function initMap({ id, centre, zoom, layers } = {}) {
  const map = L.map(id).setView(centre, zoom);
  const baseLayer = L.tileLayer(Wikimedia.template, Wikimedia.options);
  baseLayer.addTo(map);
  const overlays = {};
  layers.forEach(l => {
    const { name, data, options } = l;
    const layer = L.geoJSON(data, options).addTo(map);
    overlays[name] = layer;
  });
  L.control.layers({}, overlays).addTo(map);
  L.control.scale().addTo(map);

  L.easyButton('fa-crosshairs fa-lg', function(btn, map){
    map.flyTo(centre, zoom);
  }).addTo(map);

  return map;
}
