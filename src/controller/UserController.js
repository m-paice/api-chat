const User = require('../models/User');

const BaseController = require('./BaseController');

class UserController extends BaseController {
  constructor() {
    super(User, '/users');
  }

  routes() {
    const route = super.routes();

    return route;
  }
}

module.exports = UserController;
