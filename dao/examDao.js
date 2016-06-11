var $sql = require('./examSqlMapping');
var connectionPool = require('./connectionPool');

var pool = connectionPool.pool;
var jsonWrite = connectionPool.jsonWrite;

module.exports={
    add:function(req,res,next){
        pool.getConnection(function(err,connection){
            var param = req.body;
            
            connection.query($sql.insert,
                                   [param.name,
                                    param.place,
                                    param.starttime,
                                    param.endtime,
                                    param.userid],function(err,result){
                if(err){
                    jsonWrite(res,err);
                }
                
                jsonWrite(res,result);
                
                connection.release();    
            });
        });
    },
    queryBy:function(req,res,next){
        pool.getConnection(function(err,connection){
            var param = req.params;
            if(param.id){
                var queryString = $sql.queryById;
                queryParam = [param.id];
            }else if(param.userid){
                var queryString = $sql.queryByUserId;
                queryParam = [param.userid];
            }
            
            connection.query(queryString,queryParam,function(err,result){
                if(err){
                    jsonWrite(res,err);
                }
                jsonWrite(res,result);
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