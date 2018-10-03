// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// promisified fs module
const cucumber = require('cypress-cucumber-preprocessor').default;

// file managment requires
const fs = require('fs-extra');
const path = require('path');

// PageObjectMap
const pageObjectMap = require('../support/util/PageObjectMap');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

function replacer(key, value) {
  // if we get a function, give us the code for that function
  if (typeof value === 'function') {
    return value.toString();
  }
  return value;
}

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  on('task', {
    getPageObject(pageObjectName){
      if (this.pageObjectMap[pageObjectName] == null) {
        console.log(this.pageObjectMap);
        throw new Error(`Could not find page with name '${pageObjectName}'`);
      }

      const pageObj = new pageObjectMap[pageObjectName]();
      const serialized = JSON.stringify(pageObj, replacer, 2);

      return serialized;
    },
  });

  // accept a configFile value or use local by default
  const file = config.env.configFile || 'local';

  return getConfigurationByFile(file);
};
