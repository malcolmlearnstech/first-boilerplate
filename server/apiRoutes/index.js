const router = require('express').Router();

//router.use('/login', require('../authentication/auth'))//middleware for authenticating login HERE
//router.use('/signup', require('../authentication/auth'))//middleware for authenticating signup HERE

router.use('/users', require('./users')); //matches all user related requests to /api/users/
router.use('/tasks', require('./tasks')); //matches all task related requests to /api/tasks/

//error handling for an API route that does not exist
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
