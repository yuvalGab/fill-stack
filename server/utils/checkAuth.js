const path = require('path');

const checkAuth = (req, res, next) => {
  const { url, session: { authenticated }} = req;
  const isApiReq = url.split('/')[1] === 'api';
  if (!isApiReq) {
    const clientHtml = path.resolve('../client/dist/index.html');
    return res.sendFile(clientHtml);
  }

  if (
    url !== '/api/user/create' &&
    url !== '/api/user/login' &&
    url !== '/api/user/isLogedIn' &&
    !authenticated
  ) {
    return res.sendStatus(403);
  }

  next();
};

module.exports = {
  checkAuth
};
