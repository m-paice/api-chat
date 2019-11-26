const Message = require('../models/Messages');

const BaseController = require('./BaseController');

class MessageController extends BaseController {
  constructor() {
    super(Message, '/messages');
  }

  routes() {
    const route = super.routes();

    return route;
  }
}

module.exports = MessageController;
