module.exports = {
    extend: function(target,source,flag){
        for(var key in source){
            if(source.hasOwnProperty(key)){
                flag ?
                      (target[key] = source[key]) :
                      (target[key] === void 0 && (target[key] = source[key]));
            }
        }
        return target;
    },
    isType: function(obj,type){
        return Object.prototype.toString.call(obj) === '[object '+type+']';
    }
}