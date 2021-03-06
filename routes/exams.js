var express = require('express');
var examDao = require('../dao/examDao');

var router = express.Router();

router.get('/',function(req,res,next){
  examDao.queryAll(req,res,next);
})

router.get('/id/:id',function(req,res,next){
  examDao.queryBy(req,res,next);
});

router.get('/userid/:userid',function(req,res,next){
  examDao.queryBy(req,res,next);
});

router.post('/', function(req, res, next) {
  examDao.add(req,res,next);
});

router.put('/', function(req, res, next) {
  examDao.update(req, res, next);
});

router.delete('/id/:id', function(req, res, next) {
  examDao.deleteBy(req,res,next);
});

router.delete('/userid/:userid', function(req, res, next) {
  examDao.deleteBy(req,res,next);
});


module.exports = router;