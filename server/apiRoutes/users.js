// apiRoutes/users.js
const router = require('express').Router();

// matches GET requests to /api/users/
router.get('/', function (req, res, next) {
  /**
   *
   * write out route for GET request
   *
   */
});

// matches POST requests to /api/users/
router.post('/', function (req, res, next) {
  /**
   *
   * write out route for POST request
   *
   */
});

// matches PUT requests to /api/users/:UserId
router.put('/:userId', function (req, res, next) {
  /**
   *
   * write out route for PUT request
   *
   */
});

// matches DELETE requests to /api/users/:UserId
router.delete('/:userId', function (req, res, next) {
  /**
   *
   * write out route for DELETE request
   *
   */
});

module.exports = router;
