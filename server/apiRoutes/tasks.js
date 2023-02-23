// apiRoutes/tasks.js
const router = require('express').Router();
const { models: Task } = require('../db/index');

// matches GET requests to /api/tasks/ for ALL TASKS
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (err) {
    next(err);
  }
});

// matches GET requests to /api/tasks/ for a SINGLE TASK
router.get('/:taskId', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    res.send(task);
  } catch (err) {
    next(err);
  }
});

// matches POST requests to /api/tasks/ to CREATE A TASK
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Task.create(req.body));
  } catch (error) {
    next(error);
  }
});

// matches PUT requests to /api/tasks/:taskId to UPDATE A TASK
router.put('/:taskId', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId, {
      include: Task,
    });
    await task.update();
    res.send(task);
  } catch (error) {
    next(error);
  }
});

// matches DELETE requests to /api/tasks/:taskId to DELETE A SPECIFIC TASK
router.delete('/:taskId', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId, {});
    await task.destroy();
    res.send(task);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
