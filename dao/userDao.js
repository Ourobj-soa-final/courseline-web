var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./userSqlMapping');

var pool = mysql.createPool($util.extend({},$conf.mysql));

var jsonWrite = function(res,ret){
    if(typeof ret === 'undefined'){
        res.json({
            code:'1',
            msg:'操作失败',
        });
    }else{
        res.json(ret);
    }
    res.json(ret);
};

module.exports={
    add:function(req,res,next){
        pool.getConnection(function(err,connection){
            var param = req.query || req.params;
            
            connection.query($sql.insert,[param.name,param.age],function(err,result){
                if(result){
                    result = {
                        code:200,
                        msg:'增加成功'
                    };
                }
                
                jsonWrite(res,result);
                
                connection.release();    
            });
        });
    },
    queryAll:function(req,res,next){
        pool.getConnection(function(err,connection){
            
            connection.query($sql.queryAll,function(err,result){
                jsonWrite(res,result);
                connection.release();    
            });
        });
    },
}