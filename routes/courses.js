var express = require('express');
var courseDao = require('../dao/courseDao');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  courseDao.queryAll(req,res,next);
});

router.get('/id/:id',function(req,res,next){
  courseDao.queryBy(req,res,next);
});

router.get('/userid/:userid',function(req,res,next){
  courseDao.queryBy(req,res,next);
});

router.post('/', function(req, res, next) {
  courseDao.add(req,res,next);
});

router.put('/', function(req, res, next) {
  res.send('Put method');
});

router.delete('/id/:id', function(req, res, next) {
  courseDao.deleteBy(req,res,next);
});

router.delete('/userid/:userid', function(req, res, next) {
  courseDao.deleteBy(req,res,next);
});




module.exports = router;
