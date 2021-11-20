const {createServer} = require('the-fake-backend');

const globalOverrides = require('../global/overrides');
const test = require('./test');

const posApiServer = createServer({
  docsRoute: '/docs/pos-api',
  proxies: [
    {
      name: 'production',
      host: 'url_production_here',
    },
    {
      name: 'development',
      host: 'url_development_here',
    },
  ],
  throttlings: [
    {name: 'Fast', values: [0, 500]},
    {name: 'Medium', values: [500, 1500]},
    {name: 'Slow', values: [1500, 3000]},
    {name: 'Slowest', values: [30000, 60000]},
  ],
  overrides: globalOverrides,
});

posApiServer.routes([
  ...test,
]);

module.exports = posApiServer;
