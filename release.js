const { exec } = require('child-process-promise');
const chalk = require('chalk');
const { argv } = require('yargs');
const R = require('ramda');
const simpleGit = require('simple-git/promise')(process.cwd());

const checkIsDevelop = simpleGit
  .revparse(['--abbrev-ref', 'HEAD'])
  .then((branch) => {
    if (branch.trim() === 'develop') {
      return true;
    }

    throw new Error('You must be on the develop branch to auto release');
  });

const checkNothingIsUnmerged = simpleGit.diffSummary().then(({ files }) => {
  if (R.isEmpty(files)) {
    return true;
  }

  throw new Error('There is something unstaged, cannot perform release');
});

const checkReleaseSupplied = () =>
  new Promise((resolve, reject) => {
    if (argv._[0].match(/^\d+.\d+.+\d+$/g)) {
      resolve(true);
    }

    reject(new Error('You need to supply a verison number'));
  });

const perform = async () => {
  const checks = await checkIsDevelop
    .then(checkNothingIsUnmerged)
    .then(checkReleaseSupplied);

  if (checks) {
    const versionNumber = argv._[0];

    try {
      await exec(`git flow release start ${versionNumber}`);

      await exec(`npm --no-git-tag-version version ${versionNumber}`);

      await simpleGit.add(['package.json', 'package-lock.json']);

      await simpleGit.commit(`Version bump to ${versionNumber}`);

      await exec(
        `GIT_MERGE_AUTOEDIT=no git flow release finish -m "${versionNumber}" ${versionNumber}`
      );

      await exec('git push origin master develop --tags --atomic');

      console.log(chalk.green(`Released version ${versionNumber}`));
    } catch (err) {
      console.log(err);
    }
  }
};

perform();
