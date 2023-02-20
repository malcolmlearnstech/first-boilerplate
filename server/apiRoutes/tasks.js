// apiRoutes/tasks.js
const router = require('express').Router();

// matches GET requests to /api/tasks/
router.get('/', function (req, res, next) {
  /**
   *
   * write out route for GET request HERE
   *
   */
});

// matches POST requests to /api/tasks/
router.post('/', function (req, res, next) {
  /**
   *
   * write out route for POST request HERE
   *
   */
});

// matches PUT requests to /api/tasks/:taskId
router.put('/:taskId', function (req, res, next) {
  /**
   *
   * write out route for PUT request HERE
   *
   */
});

// matches DELETE requests to /api/tasks/:taskId
router.delete('/:taskId', function (req, res, next) {
  /**
   *
   * write out route for DELETE request HERE
   *
   */
});

module.exports = router;
