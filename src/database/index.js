const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Messages = require('../models/Messages');

const connection = new Sequelize(dbConfig);

User.init(connection);
Messages.init(connection);

Messages.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
