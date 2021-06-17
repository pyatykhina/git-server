const path = require('path');

const { settingsFolder } = require('../config');
const { writeFile } = require('../utils/fs');

module.exports = class Svg {
  constructor(id, repoName, buildCommand, mainBranch, period) {
    this.id = id || null;
    this.repoName = repoName || "";
    this.buildCommand = buildCommand || "";
    this.mainBranch = mainBranch || "";
    this.period = period || null;
  }

  async saveSettings(content) {
    await writeFile(path.resolve(settingsFolder, 'settings.json'), content);
  }
};