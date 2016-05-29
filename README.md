# courseline-web

A RESTful service provider using express.js, for our Web Service & SOA final assignment

# API

地址[http://smallpath.net](http://smallpath.net)

全部返回JSON格式的数据

## 用户表

>/users

### 获得所有用户
> GET http://smallpath.net/users

字段如下:
```
id       [数字]   用户的id
name     [字符串] 用户的昵称
email    [字符串] 用户的邮箱
password [字符串] 用户的密码
```

### 添加一个用户
> POST http://smallpath.net/users?name=test&email=test&password=test

字段如下:
```
name     [字符串] 用户的昵称
email    [字符串] 用户的邮箱
password [字符串] 用户的密码
```

约定email为用户的标识,不能重复

## 课程的表

>/courses

### 获得所有的课程

> GET http://smallpath.net/courses

返回每一条的字段如下:
```
id              [数字]   课程的id
course_name     [字符串] 课程的名称
course_time     [字符串] 课程的上课时间
course_room     [字符串] 课程的上课地点
teacher_name    [字符串] 课程的教室姓名
user_id         [数字]   课程归属的用户的id
```

### 添加一个课程

> POST http://smallpath.net/courses?coursename=test&coursetime=test&courseroom=test&teachername=test&userid=1

字段如下:
```
course_name     [字符串] 课程的名称
course_time     [字符串] 课程的上课时间
course_room     [字符串] 课程的上课地点
teacher_name    [字符串] 课程的教室姓名
user_id         [数字]   课程归属的用户的id
```

## TODO
- [x] 数据库建表
- [x] 设计RESTful风格的api
- [x] 提供初步api
- [ ] 提供PUT与DELETE的api
- [ ] 建立其他表
