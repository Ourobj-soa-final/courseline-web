var user = {
    insert:'INSERT INTO user(name,email,password) VALUES(?,?,?)',
    queryById: 'select * from user where id=?',
    queryByEmail:'select * from user where email=?',
    queryAll: 'select * from user',
};

module.exports = user;
