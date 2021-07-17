import path from 'path';

export const dbFolder = path.resolve(__dirname, '../data/');
export const dbDumpFile = path.resolve(dbFolder, 'dump.json');
export const settingsFolder = path.resolve(dbFolder, 'settings');
export const buildsFolder = path.resolve(dbFolder, 'builds');

export const PORT = 3000;
