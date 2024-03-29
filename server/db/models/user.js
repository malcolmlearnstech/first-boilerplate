const Sequelize = require('sequelize');
const db = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const axios = require('axios');

const SALT_ROUNDS = 5;

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

/**
 *
 *
 * instanceMethods
 *
 *
 */
User.prototype.correctPassword = function (candidatePwd) {
  // should return true or false for if the entered password matches
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

/**
 *
 *
 * classMethods
 *
 *
 */
User.authenticate = async function ({ email, password }) {
  // this should find a user with the given username and determine if the password is valid for them
  const user = await this.findOne({ where: { email } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error('Incorrect username/password');
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw 'nooooooo!';
    }
    return user;
  } catch (ex) {
    const error = Error('bad token');
    error.status = 401;
    throw error;
  }
};

/**
 *
 *
 * hooks
 *
 *
 */
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};
