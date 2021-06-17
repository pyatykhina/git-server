const { EventEmitter } = require('events');
const { existsSync } = require('fs');
const { dbDumpFile } = require('./config');
const { writeFile } = require('../utils/fs');
const { prettifyJsonToString } = require('../utils/prettifyJsonToString');

class Database extends EventEmitter {
  constructor() {
    super();
  }

  async initFromDump() {
    if (!existsSync(dbDumpFile)) {
      return;
    }
  }
}

const db = new Database();

db.initFromDump();

db.on('changed', () => {
  writeFile(dbDumpFile, prettifyJsonToString(db.toJSON()));
});

module.exports = db;
