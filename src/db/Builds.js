
const path = require('path');
const { buildsFolder } = require('../config');
const { writeFile } = require('../utils/fs');

module.exports = class Build {
  constructor(build) {
    const { buildNumber, commitHash, commitMessage, authorName, dateTime, durationTime } = build;

    this.buildNumber = buildNumber || null;
    this.commitHash = commitHash || "";
    this.commitMessage = commitMessage || "";
    this.authorName = authorName || "";
    this.dateTime = dateTime || Date.now();
    this.durationTime = durationTime || Date.now() - this.dateTime;
  }

  async saveBuild(content) {
    await writeFile(path.resolve(buildsFolder, `${JSON.parse(content).id}.json`), content);
  }
};