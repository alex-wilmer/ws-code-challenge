let { exec } = require('child_process');
let { promisify } = require('util');
let ora = require('ora');

exec = promisify(exec);

let clean = folder => () => exec(`rm -rf ${folder}`);
let cpyToSrc = folder => () => exec(`cp -r ${folder} src`);
let runBuildScript = () => exec('npm run build-section');
let cacheBuild = () => exec('mv build tmp_build');
let swapBuild = () => exec('mv tmp_build build');
let moveBackgroundBuild = () =>
  exec('mv build/static/js/main.*.js tmp_build/background.js');

let spinner = ora('Building popup..').start();

// remove src folder in case it got left over in a bad build
Promise.resolve(clean('src'))
  // use popup folder for "src" as react-scripts build target
  .then(cpyToSrc('popup'))
  // build'r
  .then(runBuildScript)
  // store the build folder
  .then(() => {
    spinner.succeed();
    spinner.start('Building background script..');
    return cacheBuild();
  })
  // clear src folder for background script
  .then(clean('src'))
  // build background folder
  .then(cpyToSrc('background'))
  .then(runBuildScript)
  // move background build output js to background.js
  .then(moveBackgroundBuild)
  // 🔥 background build folder
  .then(clean('build'))
  // put popup build folder back
  .then(swapBuild)
  .then(clean('src'))
  .then(() => {
    spinner.succeed();
  })
  .catch(() => {
    spinner.fail();
  });
