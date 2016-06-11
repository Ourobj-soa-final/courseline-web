# courseline-web

A RESTful service provider using express.js, for our Web Service & SOA final assignment

# API

地址[http://smallpath.net](http://smallpath.net)

约定:

1. 返回值:全部返回JSON格式的数据 
2. 所有POST的Content-type属性必须为x-www-form-urlencoded,禁止使用form-data 
3. api中有冒号的字段,需要此字段替换为指定格式的数据 

## 用户表

>/users

### 获得所有用户
> GET http://smallpath.net/users

返回每一条的字段如下:
```
id       [数字]   用户的id
name     [字符串] 用户的昵称
email    [字符串] 用户的邮箱
password [字符串] 用户的密码
```

### 使用邮箱与密码进行登陆

>GET http://smallpath.net/users/email/:email/password/:password

字段email为用户的邮箱,passwrod为用户的密码,均为字符串

如查询到,则返回
```
{
    code:0,
    result:[...],
}
```

如不存在,则返回
```
{
    code:1,
    result:[],
}
```

### 查找一个用户
提供id或email两种查询方式

> GET http://smallpath.net/users/id/:id

字段id,数字,为指定用户的id

或者

> GET http://smallpath.net/users/email/:email

字段email,字符串,为指定用户的邮箱

### 添加一个用户
> POST http://smallpath.net/users

POST要求的字段如下:
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
week            [数字]   课程所在的星期(1-7)
start_number    [数字]   课程时间的开始节数(1-11)
end_number      [数字]   课程时间的结束节数(1-11)
course_room     [字符串] 课程的上课地点
teacher_name    [字符串] 课程的教室姓名
user_id         [数字]   课程归属的用户的id
```

### 查询一个课程

提供id或userid两种查询方式

> GET http://smallpath.net/courses/id/:id

字段id,数字,为指定课程的id

或者

> GET http://smallpath.net/courses/userid/:userid

字段userid,id,为指定用户的id

### 添加一个课程

> POST http://smallpath.net/courses

POST的字段如下:
```
coursename     [字符串] 课程的名称
week           [数字]   课程所在的星期(1-7)
startnumber    [数字]   课程时间的开始节数(1-11)
endnumber      [数字]   课程时间的结束节数(1-11)
courseroom     [字符串] 课程的上课地点
teachername    [字符串] 课程的教室姓名
userid         [数字]   课程归属的用户的id
```

## 考试的表

>/exams

### 获得所有的考试

> GET http://smallpath.net/exams

返回每一条的字段如下:
```
id              [数字]   考试的id
name            [字符串] 考试的名称
place           [字符串] 考试的地点
start_time      [时间]   考试的开始时间
end_time        [时间]   考试的结束时间
user_id         [数字]   考试归属的用户的id
```

### 查询一个考试

提供id或userid两种查询方式

> GET http://smallpath.net/exams/id/:id

字段id,数字,为指定考试的id

或者

> GET http://smallpath.net/exams/userid/:userid

字段userid,id,为指定用户的id

### 添加一个考试

> POST http://smallpath.net/exams

POST的字段如下:
```
name           [字符串] 考试的名称
place          [字符串] 考试的地点
starttime      [时间]   考试的开始时间
endtime        [时间]   考试的结束时间
userid         [数字]   考试归属的用户的id
```


## TODO
- [x] 数据库建表
- [x] 设计RESTful风格的api
- [x] 提供初步api
- [x] 完善course表
- [ ] 提供PUT与DELETE的api
- [x] 建立其他表
