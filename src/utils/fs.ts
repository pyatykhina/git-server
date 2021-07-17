import fs from 'fs';
import util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);
const unlinkFileAsync = util.promisify(fs.unlink);
const existsFileAsync = util.promisify(fs.exists);

export async function writeFile(path: string, content: string) {
  await writeFileAsync(path, content, { encoding: 'utf-8' });
};

export async function removeFile(path: string) {
  try {
    await unlinkFileAsync(path);
  } catch (err) {
    console.log(`removeFile error: file ${path} doesn't exist...`);
  }
};

export async function exists(path: string) {
  return await existsFileAsync(path);
};
