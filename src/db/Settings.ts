import path from 'path';

import { settingsFolder } from '../config';
import { writeFile } from '../utils/fs';

export default class Settings {
  id: string;
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: number;

  constructor(settings: ISettings) {
    const { id, repoName, buildCommand, mainBranch, period } = settings;
    
    this.id = id;
    this.repoName = repoName;
    this.buildCommand = buildCommand;
    this.mainBranch = mainBranch;
    this.period = period || 0;
  }

  async saveSettings(content: string) {
    await writeFile(path.resolve(settingsFolder, 'settings.json'), content);
  }
};

interface ISettings {
  id: string,
  repoName: string,
  buildCommand: string,
  mainBranch: string,
  period: number,
  saveSettings(content: string): void
}
