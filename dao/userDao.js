var $sql = require('./userSqlMapping');
var connectionPool = require('./connectionPool');
var util = require('../util/util');

var pool = connectionPool.pool;
var jsonWrite = connectionPool.jsonWrite;

module.exports={
    add:function(req,res,next){
        pool.getConnection(function(err,connection){
            var param = req.body;

            connection.query($sql.insert,
                                   [param.name,
                                    param.email,
                                    param.password],function(err,result){
                /*if(result){
                    result = {
                        code:0,
                        msg:'增加成功'
                    };
                }*/
                if(err){
                    jsonWrite(res,{code:1,result:err});
                }
                
                jsonWrite(res,{code:0,result:result});
                
                connection.release();    
            });
        });
    },

    queryLogin:function(req,res,next){
        pool.getConnection(function(err,connection){
            var param = req.params;

            var queryString = $sql.loginIn;
            queryParam = [param.email,param.password];

            
            connection.query(queryString,queryParam,function(err,result){
                if(err){
                    jsonWrite(res,{code:1,result:err});
                    connection.release();
                    return;
                }
                if(util.isType(result,'Array') && result.length==0){
                    jsonWrite(res,{code:1,result:result});
                }else{
                    jsonWrite(res,{code:0,result:result});
                }
                connection.release();    
            });
        });
    },
    queryBy:function(req,res,next){
        pool.getConnection(function(err,connection){
            var param = req.params;
            if(param.email){
                var queryString = $sql.queryByEmail;
                queryParam = [param.email];
            }else if(param.id){
                var queryString = $sql.queryById;
                queryParam = [param.id];
            }
            
            connection.query(queryString,queryParam,function(err,result){
                if(err){
                    jsonWrite(res,{code:1,result:err});
                    connection.release();
                    return;
                }
                if(util.isType(result,'Array') && result.length==0){
                    jsonWrite(res,{code:1,result:result});
                }else{
                    jsonWrite(res,{code:0,result:result});
                }

                connection.release();    
            });
        });
    },
    queryAll:function(req,res,next){
        pool.getConnection(function(err,connection){
            
            connection.query($sql.queryAll,function(err,result){
                if(err){
                    jsonWrite(res,err);
                }
                jsonWrite(res,result);
                connection.release();    
            });
        });
    },
}