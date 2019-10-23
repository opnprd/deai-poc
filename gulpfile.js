const { src, dest, parallel } = require('gulp');

function leaflet() {
  return src([
      'node_modules/leaflet/dist/leaflet.js',
      'node_modules/leaflet/dist/leaflet.css',
      'node_modules/leaflet/dist/**/*.png',
    ])
    .pipe(dest('docs/vendor/leaflet'));
}

function bundleVue() {
  return src([
    'node_modules/vue/dist/vue.js',
    'node_modules/vue/dist/vue.min.js',
    'node_modules/vue/dist/vue.runtime.js',
    'node_modules/vue/dist/vue.runtime.min.js',
  ])
  .pipe(dest('docs/vendor/vue'));
}

const bundleModules = parallel(leaflet, bundleVue);

module.exports = exports = {
  default: bundleModules,
};
