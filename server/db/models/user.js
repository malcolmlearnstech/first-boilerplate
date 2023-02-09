const Sequelize = require('sequelize');

const db = require('../database');

const User = db.define('user', {
  firstName: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
  phoneNumber: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  isAdmin: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = User;
