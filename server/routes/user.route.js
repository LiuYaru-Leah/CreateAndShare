const express = require('express'),
  Router = express.Router();

const UserController = require('../controllers/user.controller');

Router.post('/login', UserController.login);
Router.post('/register', UserController.register);

module.exports = Router;
