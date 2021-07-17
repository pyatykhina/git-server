import { EventEmitter } from 'events';
import { existsSync } from 'fs';
import { dbDumpFile } from '../config';
import { writeFile } from '../utils/fs';
import { prettifyJsonToString } from '../utils/prettifyJsonToString';
import Settings from './Settings';
import Builds from './Builds';

class Database extends EventEmitter {
  settings: ISettings | null;
  builds: Array<IBuilds>;

  constructor() {
    super();

    this.settings = null;
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
      dump.builds.forEach((build: IBuilds) => {
        this.builds.push(new Builds(build));
      })
    }
  }

  async insertSettings(settings: ISettings, config: string) {
    await settings.saveSettings(config);
    this.settings = settings;
    this.emit('changed');
  }

  async insertBuild(build: IBuilds, config: string) {
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

export default db;

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

interface ISettings {
  id: string,
  repoName: string,
  buildCommand: string,
  mainBranch: string,
  period: number,
  saveSettings(config: string): void
}
