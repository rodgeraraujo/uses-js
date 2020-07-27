'use strict';

const process = require('process');

class Use {
  constructor(moduleName, isNodeModule) {
    this.root = getRoot();
    this.paths = getPaths();
    this.filename = module.parent.parent.filename;
    this.moduleName = moduleName;
    this.path = moduleName;

    if (isNodeModule) {
      this.path = 'node_modules/' + this.path;
    } else {
      this.path = moduleName.replace(/^([^/]+\/){1}/, '');
    }

    this.modulePath = this.path ? `${this.root}/${this.path}` : this.root;
  }

  getModule() {
    try {
      return require(this.modulePath);
    } catch (error) {
      console.error(`useError: Module '${this.moduleName}' not found\n`);
      console.trace(error.requireStack);
      return;
    }
  }
}

function getRoot() {
  return process.mainModule.paths
    .filter((p) => p.includes('node_modules'))
    .shift()
    .replace('/node_modules', '');
}

function getPaths() {
  return process.mainModule.paths;
}

module.exports = Use;
