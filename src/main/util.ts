/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';
import { exec } from 'child_process';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

export function
openBrowser(userDataDir: string) {
  const command = `"${chromePath}" ${`
    --flag-switches-begin --flag-switches-end
  `.trim()} ${`
    --user-data-dir="${userDataDir}"
  `.trim()}`;
  exec(command);
}
