#!/usr/bin/env node

global.use = (namespace) => {
  let isNodeModule = namespace.includes('/') ? false : true;
  new (require('./src/use'))(namespace, isNodeModule).lookup();
};
module.exports = global.use;
module.use = global.use;