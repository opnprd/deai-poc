const { src, dest, parallel } = require('gulp');

function leaflet() {
  return src([
      'node_modules/leaflet/dist/leaflet.js',
      'node_modules/leaflet/dist/leaflet.css',
      'node_modules/leaflet/dist/**/*.png',
    ])
    .pipe(dest('docs/vendor/leaflet'));
}

module.exports = exports = {
  default: leaflet,
};
