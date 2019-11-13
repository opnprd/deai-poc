const { readFile } = require('fs');
const { promisify } = require('util');
const path = require('path');
const { reducePrecision, transformCrs } = require('@opnprd/geojson-cleaner'); 

const [ , , input ] = process.argv;

const pReadFile = promisify(readFile);

const filename = path.resolve(input);

pReadFile(filename, 'utf-8')
  .then(JSON.parse)
  .then(transformCrs)
  .then(reducePrecision)
  .then(JSON.stringify)
  .then(console.log);