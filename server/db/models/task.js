const Sequelize = require('sequelize');

const db = require('../database');

const Task = db.define('task', {
  taskName: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  priority: {
    allowNull: false,
    defaultValue: '5',
    type: Sequelize.ENUM,
    validate: {
      notEmpty: true,
    },
    values: ['0', '1', '2', '3', '4', '5'],
  },
  categoryType: {
    allowNull: false,
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: { notEmpty: true },
  },
  startTime: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  finishTime: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  completionStatus: {
    allowNull: false,
    defaultValue: false,
    type: Sequelize.BOOLEAN,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Task;
