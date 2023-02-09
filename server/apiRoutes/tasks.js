// apiRoutes/tasks.js
const router = require('express').Router();

// matches GET requests to /api/tasks/
router.get('/', function (req, res, next) {});

// matches POST requests to /api/tasks/
router.post('/', function (req, res, next) {});

// matches PUT requests to /api/tasks/:taskId
router.put('/:taskId', function (req, res, next) {});

// matches DELETE requests to /api/tasks/:taskId
router.delete('/:taskId', function (req, res, next) {});

module.exports = router;
