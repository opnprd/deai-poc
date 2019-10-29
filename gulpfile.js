const { src, dest, parallel } = require('gulp');

function fontawesome() {
  return src([
      'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
    ])
    .pipe(dest('docs/vendor/fontawesome'));
}

function leaflet() {
  return src([
      'node_modules/leaflet/dist/leaflet.js',
      'node_modules/leaflet/dist/leaflet.css',
      'node_modules/leaflet/dist/**/*.png',
      'node_modules/leaflet-easybutton/src/easy-button.js',
      'node_modules/leaflet-easybutton/src/easy-button.css',
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

const bundleModules = parallel(fontawesome, leaflet, bundleVue);

module.exports = exports = {
  default: bundleModules,
};
