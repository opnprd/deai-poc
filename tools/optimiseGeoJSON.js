const { readFile } = require('fs');
const { promisify } = require('util');

const PRECISION = 100000;

const path = require('path');

const getConversion = require('./crs/convert');

const pReadFile = promisify(readFile);

const input = './docs/data/defra-flood/Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_3.json';
const filename = path.resolve(input);

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

function convertGrid(data) {
  const { crs } = data;
  if ( crs ) {
    const { properties: { name } } = crs;
    const converter = getConversion(name);
    const descendOrMap = (thing) => {
      if (!Array.isArray(thing)) throw new Error('Not an array');
      if (Array.isArray(thing[0])) {
        return thing.map(descendOrMap);
      } 
      return converter(thing);
    };
    const convertFeature = (feature) => {
      const { geometry: { coordinates }} = feature;
      feature.geometry.coordinates = coordinates.map(descendOrMap);
      return feature;
    };
    data.features = data.features.map(convertFeature);
    delete data.crs;
  }
  return data;
}

pReadFile(filename, 'utf-8')
  .then(inflate)
  .then(convertGrid)
  .then(reducePrecision)
  .then(deflate)
  .then(console.log);