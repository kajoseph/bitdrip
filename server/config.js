const configFile = require('./.config');


function config() {
  let env = process.env.NODE_ENV;
  env = env.toLowerCase();

  if (process.env.MOCHA === 'true') {
    env = 'mocha';
  }

  let retVal = {};
  let overrideNode;
  for (let [key, val] of Object.entries(configFile)) {
    if (key.indexOf('env_') > -1) {
      if (key === `env_${env}`) {
        overrideNode = val;
      }
      continue;
    }

    retVal[key] = val;
  }

  return _deepMerge(retVal, overrideNode);
}


function _deepMerge(mainObj, override) {
  if (!override) {
    return mainObj;
  }

  for (let [key, val] of Object.entries(override)) {
    if (typeof val === 'object' && !Array.isArray(val)) {
      mainObj[key] = _deepMerge(mainObj[key], override[key]);
    } else {
      mainObj[key] = val;
    }
  }
  return mainObj;
}


module.exports = config();
