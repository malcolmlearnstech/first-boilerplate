// apiRoutes/users.js
const router = require('express').Router();
const { models: User } = require('../db/index');

// matches GET requests to /api/users/ for RETRIEVING ALL USERS
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

// matches GET requests to /api/users/ for RETRIEVING a SINGLE USER
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {});
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// matches POST requests to /api/users/ for CREATING A  USER
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

// matches PUT requests to /api/users/:UserId for UPDATING A USER
router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: User,
    });
    await user.update();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// matches DELETE requests to /api/users/:UserId for DELETING A USER
router.delete('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {});
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
