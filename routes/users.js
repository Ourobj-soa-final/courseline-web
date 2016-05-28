var express = require('express');
var userDao = require('../dao/userDao');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Get method');
  userDao.queryAll(req,res,next);
});

router.post('/', function(req, res, next) {
  res.send('Post method');
});

router.put('/', function(req, res, next) {
  res.send('Put method');
});

router.delete('/', function(req, res, next) {
  res.send('Delete method');
});



module.exports = router;
