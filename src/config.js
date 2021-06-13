const path = require('path');

const dbFolder = path.resolve(__dirname, '../../data/');
const dbDumpFile = path.resolve(dbFolder, 'dump.json');

module.exports = {
  PORT: 3000,

  dbFolder,
  dbDumpFile
};
