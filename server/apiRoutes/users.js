// apiRoutes/users.js
const router = require('express').Router();

// matches GET requests to /api/users/
router.get('/', function (req, res, next) {});

// matches POST requests to /api/users/
router.post('/', function (req, res, next) {});

// matches PUT requests to /api/tasks/:taskId
router.put('/:userId', function (req, res, next) {});

// matches DELETE requests to /api/tasks/:taskId
router.delete('/:userId', function (req, res, next) {});

module.exports = router;
