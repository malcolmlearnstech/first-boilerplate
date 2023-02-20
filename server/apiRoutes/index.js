const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/tasks', require('./tasks')); // matches all requests to  /api/tasks/
router.use('/login', require('../authentication/auth')); // matches request to /login
router.use('/signup', require('../authentication/auth')); //matches requests to /signup

//error handling for an API route that does not exist
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
