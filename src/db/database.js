const { EventEmitter } = require('events');
const { existsSync } = require('fs');
const { dbDumpFile } = require('../config');
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

  async insertSettings(settings, config) {
    await settings.saveSettings(config);
    this.emit('saved');
  }

  async insertBuild(build, config) {
    await build.saveBuild(config);
    this.emit('saved');
  }
}

const db = new Database();

db.initFromDump();

db.on('changed', () => {
  writeFile(dbDumpFile, prettifyJsonToString(db.toJSON()));
});

module.exports = db;
