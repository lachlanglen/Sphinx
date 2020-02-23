const Sequelize = require('sequelize');
const db = require('./../db.js');

const { UUID, UUIDV4, STRING } = Sequelize;

const User = db.define('users', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  firstName: {
    type: STRING,
  },
  lastName: {
    type: STRING,
  },
  email: {
    type: STRING,
    allowNull: true,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  // you can remove this if you think username is excessive but its somewhat like a privacy layer to prevent people form knowing your email / name if we are going to display info on the user
  username: {
    type: STRING,
    allowNull: true,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  userType: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    values: ['admin', 'regUser'],
  },
  password: {
    type: STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = User;
