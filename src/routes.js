const { UserController, MessageController } = require('./controller');

module.exports = [new UserController(), new MessageController()];
