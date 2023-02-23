// apiRoutes/users.js
const router = require('express').Router();
const { models: User } = require('../db/index');

// matches GET requests to /api/users/ for RETRIEVING ALL USERS
router.get('/', async (req, res, next) => {
  /**
   *
   * write out route for GET request
   *
   */
});

// matches GET requests to /api/users/ for RETRIEVING a SINGLE USER
router.get('/:userId', async (req, res, next) => {});

// matches POST requests to /api/users/ for CREATING A  USER
router.post('/', async (req, res, next) => {
  /**
   *
   * write out route for POST request
   *
   */
});

// matches PUT requests to /api/users/:UserId for UPDATING A USER
router.put('/:userId', async (req, res, next) => {
  /**
   *
   * write out route for PUT request
   *
   */
});

// matches DELETE requests to /api/users/:UserId for DELETING A USER
router.delete('/:userId', async (req, res, next) => {
  /**
   *
   * write out route for DELETE request
   *
   */
});

module.exports = router;
