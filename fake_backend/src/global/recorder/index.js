// WIP: the idea here is to record proxy data somehow, to automate creating fixtures with development data
module.exports = {
  // https://github.com/rhberro/the-fake-backend#proxies
  onProxyRes(proxyRes, req, res) {
    // https://github.com/rhberro/the-fake-backend/blob/master/source/routes.ts#L222
    console.log({ res });
  },
};
