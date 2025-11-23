const { createRequestHandler } = require('@react-router/node');
const path = require('path');

const build = require(path.join(__dirname, '../build/server/index.js'));

module.exports = createRequestHandler({
  build,
  getLoadContext() {
    return {};
  },
});
