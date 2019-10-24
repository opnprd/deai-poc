const { readFile } = require('fs');
const { promisify } = require('util');

const PRECISION = 100000;

const path = require('path');

const pReadFile = promisify(readFile);

const filename = path.resolve('./docs/data/redline.geojson');
console.log(filename);

function inflate(data) {
  return JSON.parse(data);
}

function deflate(data) {
  return JSON.stringify(data);
}

function reducePrecision(data) {
  const { features, geometry } = data;
  if (features) data.features = features.map(reducePrecision);
  const shorten = (input) => {
    if (Array.isArray(input)) return input.map(shorten);
    return Math.round(input * PRECISION) / PRECISION;
  };
  if (geometry && Array.isArray(geometry.coordinates)) data.geometry.coordinates = geometry.coordinates.map(shorten);
  return data;
}

pReadFile(filename, 'utf-8')
  .then(inflate)
  .then(reducePrecision)
  .then(deflate)
  .then(console.log);