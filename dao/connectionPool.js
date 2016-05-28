var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');

var pool = mysql.createPool($util.extend({},$conf.mysql));

var jsonWrite = function(res,ret){
    /*if(typeof ret === 'undefined'){
        res.json({
            code:'1',
            msg:'操作失败',
        });
    }else{
        res.json(ret);
    }*/
    res.json(ret);
};

module.exports = {
    pool,
    jsonWrite,
};