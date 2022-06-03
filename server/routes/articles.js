const express = require('express'),
  Router = express.Router();


  const articleController = require('../controllers/articles');

  Router.post('/addNewArticle',articleController.addNewArticle);
  Router.get(`/detail?:id`,articleController.getArticle);
  Router.post('/getAll',articleController.getAllArticle);
  Router.post('/like',articleController.articleLikes);
  Router.post('/dislike',articleController.articleDisikes);
  Router.get('/person-list',articleController.getPersonList);

  

  module.exports = Router;