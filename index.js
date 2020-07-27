const Use = require('./use');

global.use = function (path) {
  let isNodeModule = path.includes('/') ? false : true;
  path = path ? path : undefined;

  return new Use(path, isNodeModule).getModule();
};

module.exports = global;
