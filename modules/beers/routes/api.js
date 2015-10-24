var express = require('express');
var router = express.Router();

var Controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  Controller.retrieve(req, res);
});

//Inserir
router.post('/', function(req, res, next) {
  Controller.create(req, res);
});

//Inserir
router.put('/:id', function(req, res, next) {
  Controller.update(req, res);
});

module.exports = router;
