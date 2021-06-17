const { EventEmitter } = require('events');
const { existsSync } = require('fs');
const { dbDumpFile } = require('../config');
const { writeFile } = require('../utils/fs');
const { prettifyJsonToString } = require('../utils/prettifyJsonToString');
const Settings = require('./Settings');
const Builds = require('./Builds');
class Database extends EventEmitter {
  constructor() {
    super();

    this.settings = {};
    this.builds = [];
  }

  async initFromDump() {
    if (!existsSync(dbDumpFile)) {
      return;
    }

    const dump = require(dbDumpFile);

    if (typeof dump.settings === 'object') {
      this.settings = new Settings(dump.settings);
    }

    if (Array.isArray(dump.builds)) {
      dump.builds.forEach(build => {
        this.builds.push(new Builds(build));
      })
    }
  }

  async insertSettings(settings, config) {
    await settings.saveSettings(config);
    this.settings = settings;
    this.emit('changed');
  }

  async insertBuild(build, config) {
    await build.saveBuild(config);
    this.builds.push(build);
    this.emit('changed');
  }

  toJSON() {
    return {
      settings: this.settings,
      builds: this.builds,
    };
  }
}

const db = new Database();

db.initFromDump();

db.on('changed', () => {
  writeFile(dbDumpFile, prettifyJsonToString(db.toJSON()));
});

module.exports = db;
