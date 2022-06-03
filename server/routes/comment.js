const express = require('express'),
  Router = express.Router();

  const commentController = require('../controllers/comment')

  Router.post('/addComment',commentController.addComment);
  Router.post('/getAllComment',commentController.getAllComment);

  module.exports = Router;