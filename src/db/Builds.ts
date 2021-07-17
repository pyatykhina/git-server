
import path from 'path';
import { buildsFolder } from '../config';
import { writeFile } from '../utils/fs';

export default class Builds {
  buildNumber: number;
  commitHash: string;
  commitMessage: string;
  authorName: string;
  start: string;
  duration: number;

  constructor(build: IBuilds) {
    const { buildNumber, commitHash, commitMessage, authorName, start, duration } = build;

    this.buildNumber = buildNumber;
    this.commitHash = commitHash;
    this.commitMessage = commitMessage;
    this.authorName = authorName;
    this.start = start || new Date().toISOString();
    this.duration = duration || Date.now() - (+this.start);
  }

  async saveBuild(content: string) {
    await writeFile(path.resolve(buildsFolder, `${JSON.parse(content).id}.json`), content);
  }
};

interface IBuilds {
  id?: string,
  configurationId?: string,
  buildNumber: number,
  commitMessage: string,
  commitHash: string,
  branchName?: string,
  authorName: string,
  status?: string,
  start: string,
  duration: number,
  saveBuild(content: string): void
}
