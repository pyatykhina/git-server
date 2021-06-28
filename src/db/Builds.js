
const path = require('path');
const { buildsFolder } = require('../config');
const { writeFile } = require('../utils/fs');

module.exports = class Builds {
  constructor(build) {
    const { buildNumber, commitHash, commitMessage, authorName, start, duration } = build;

    this.buildNumber = buildNumber || null;
    this.commitHash = commitHash || "";
    this.commitMessage = commitMessage || "";
    this.authorName = authorName || "";
    this.start = start || Date.now();
    this.duration = duration || Date.now() - this.start;
  }

  async saveBuild(content) {
    await writeFile(path.resolve(buildsFolder, `${JSON.parse(content).id}.json`), content);
  }
};