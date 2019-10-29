const proj4 = require('proj4');

const { 'EPSG:27700': OSGB } = require('./projections.js');

const convertFromOSGB = (c) => proj4(OSGB).inverse(c);

module.exports = function getConverter(crs) {
  return {
    'EPSG:27700': convertFromOSGB,
  }[crs];
};
