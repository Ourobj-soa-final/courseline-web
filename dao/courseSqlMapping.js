var course = {
    insert:'INSERT INTO course(course_name,week,start_number,end_number,class_room,teacher_name,user_id) VALUES(?,?,?,?,?,?,?)',
    queryById: 'select * from course where id=?',
    queryByUserId: 'select * from course where user_id=?',
    queryAll: 'select * from course',
    deleteById: 'DELETE from course where id=?',
    deleteByUserId: 'DELETE from course where user_id=?',
};

module.exports = course;
