var $sql = require('./courseSqlMapping');
var connectionPool = require('./connectionPool');

var pool = connectionPool.pool;
var jsonWrite = connectionPool.jsonWrite;

module.exports={
    add:function(req,res,next){
        pool.getConnection(function(err,connection){
            var param = req.query || req.params;
            
            connection.query($sql.insert,
                                   [param.coursename,
                                    param.coursetime,
                                    param.courseroom,
                                    param.teachername,
                                    param.userid],function(err,result){
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