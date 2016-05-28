var user = {
    insert:'INSERT INTO user(name,email,password) VALUES(?,?,?)',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user',
};

module.exports = user;
