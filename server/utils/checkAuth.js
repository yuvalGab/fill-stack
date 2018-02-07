const path = require('path');

const checkAuth = (req, res, next) => {
  if (req.url.split('/')[1] !== 'api') {
    return res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  }

  if (
    req.url !== '/api/user/create' &&
    req.url !== '/api/user/login' &&
    req.url !== '/api/user/isLogedIn' &&
    !req.session.authenticated
  ) {
    return res.sendStatus(403);
  }

  next();
};

module.exports = {
  checkAuth
};
