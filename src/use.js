'use strict';

const process = require('process');

/**
 * Use the binding to import file and module by namespace.
 *
 */
class Use {
  /**
   * Initialize a `Use` instance with the provide `namespace`.
   *
   * @param {String} namespace the file/module namespace
   * @param {Boolean} hasAppName boolean to indicateif namespace contains appname includes.
   * @constructor
   */
  constructor(namespace, isNodeModule) {
    if (!namespace) console.error('useError: namespace not provide. The value is `null` or `undefined`.');
    this.root = getRoot();
    this.paths = getPaths();
    this.filename = module.parent.parent.filename;
    this.namespace = namespace.replace(/^([^/]+\/){1}/, '');
    this.modulePath = isNodeModule ? this.nodeModulePath(namespace) : `${this.root}/${this.namespace}`;
  }

  /**
   * Retrieve the file or module by namespace.
   * @public
   */
  lookup() {
    try {
      console.log(require(this.modulePath));
      return require(this.modulePath);
    } catch (error) {
      console.error(`useError: Module '${this.namespace}' not found\n`);
      console.trace(error.requireStack);
      return;
    }
  }

  /**
   * Check if namespace is a node module.
   * @public
   */
  isNodeModule(namespace) {
    try {
      require.resolve(namespace);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Retrieve a node module path to resolve..
   * @public
   */
  nodeModulePath(namespace) {
    return require.resolve(namespace);
  }
}

/**
 * Retrieve node application root path.
 * @private
 */
function getRoot() {
  return process.mainModule.paths
    .filter((p) => p.includes('node_modules'))
    .shift()
    .replace('/node_modules', '');
}

/**
 * Retrieves node application paths.
 * @private
 */
function getPaths() {
  return process.mainModule.paths;
}

/**
 * Module exports.
 * @public
 */
module.exports = Use;
