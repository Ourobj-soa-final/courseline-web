var user = {
    insert:'INSERT INTO user(name,email,password) VALUES(?,?,?)',
    queryById: 'select * from user where id=?',
    queryByEmail:'select * from user where email=?',
    queryAll: 'select * from user',
    loginIn: 'select * from user where email=? and password=?',
};

module.exports = user;
