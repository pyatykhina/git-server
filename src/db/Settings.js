const path = require('path');

const { settingsFolder } = require('../config');
const { writeFile } = require('../utils/fs');

module.exports = class Settings {
  constructor(settings) {
    const { id, repoName, buildCommand, mainBranch, period } = settings;
    
    this.id = id || null;
    this.repoName = repoName || "";
    this.buildCommand = buildCommand || "";
    this.mainBranch = mainBranch || "";
    this.period = period || 0;
  }

  async saveSettings(content) {
    await writeFile(path.resolve(settingsFolder, 'settings.json'), content);
  }
};