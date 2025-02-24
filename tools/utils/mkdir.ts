import fs from 'fs';
import chalk from 'chalk';

interface mkdirArgs {
  callback: () => unknown;
  successMessage?: string | null;
  errorMessage?: string | null;
}

export function mkdir(folderPath: string, {callback, successMessage, errorMessage}: mkdirArgs) {
  fs.mkdir(folderPath, {recursive: true}, (error) => {
    if (error) {
      if (errorMessage != null) {
        // eslint-disable-next-line no-console
        console.log(chalk.red(errorMessage));
      }
      // eslint-disable-next-line no-console
      console.log(error);
      return false;
    }
    if (successMessage != null) {
      // eslint-disable-next-line no-console
      console.log(chalk.green(successMessage));
    }
    callback && callback();
  });
}
