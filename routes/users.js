var express = require('express');
var userDao = require('../dao/userDao');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  userDao.queryAll(req,res,next);
});

router.get('/id/:id',function(req,res,next){
  userDao.queryBy(req,res,next);
})

router.get('/email/:email',function(req,res,next){
  userDao.queryBy(req,res,next);
})

router.post('/', function(req, res, next) {
  userDao.add(req,res,next);
});

router.put('/', function(req, res, next) {
  res.send('Put method');
});

router.delete('/', function(req, res, next) {
  res.send('Delete method');
});



module.exports = router;
