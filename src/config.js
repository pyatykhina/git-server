const path = require('path');

const dbFolder = path.resolve(__dirname, '../data/');
const dbDumpFile = path.resolve(dbFolder, 'dump.json');
const settingsFolder = path.resolve(dbFolder, 'settings');
const buildsFolder = path.resolve(dbFolder, 'builds');

module.exports = {
  PORT: 3000,

  dbFolder,
  dbDumpFile,
  settingsFolder,
  buildsFolder
};
