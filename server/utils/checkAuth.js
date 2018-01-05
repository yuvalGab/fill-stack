const checkAuth = (req, res, next) => {
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
