var express = require('express');
var courseDao = require('../dao/courseDao');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  courseDao.queryAll(req,res,next);
});

router.post('/', function(req, res, next) {
  courseDao.add(req,res,next);
});

router.put('/', function(req, res, next) {
  res.send('Put method');
});

router.delete('/', function(req, res, next) {
  res.send('Delete method');
});



module.exports = router;
