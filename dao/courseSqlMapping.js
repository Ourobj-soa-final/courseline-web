var course = {
    insert:'INSERT INTO course(course_name,course_time,class_room,teacher_name,user_id) VALUES(?,?,?,?,?)',
    queryById: 'select * from course where id=?',
    queryAll: 'select * from course',
};

module.exports = course;
