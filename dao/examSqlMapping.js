var exam = {
    insert:'INSERT INTO exam(name,place,start_time,end_time,user_id) VALUES(?,?,?,?,?)',
    queryById: 'select * from exam where id=?',
    queryByUserId: 'select * from exam where user_id=?',
    queryAll: 'select * from exam',
}

module.exports = exam;