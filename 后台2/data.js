const express = require('express')
const formidable = require('express-fileupload')  
const ws = require('express-ws')
//const websocket = require('./websocket.js')

//获取app并包裹
const app=express()
ws(app)

const router = express.Router();
const fs=require('fs')
const http=require("http")

const {getDB,saveDB}=require('./fs.js')

//表单请求体
app.use(formidable());  // formdata
app.use(express.json())
app.use(express.urlencoded())

//跨域拦截
app.use((req, res, next) => {
//判断路径
  if(req.path !== '/' && !req.path.includes('.')){
    res.set({
      'Access-Control-Allow-Credentials': true, //允许后端发送cookie
      'Access-Control-Allow-Origin': req.headers.origin || '*', //任意域名都可以访,或者基于我请求头里面的域
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//允许支持的请求方式
      'Content-Type': 'application/json; charset=utf-8'//默认与允许的文本格式json和编码格式
    })
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next()
})

//数据库
var mysql = require('mysql');
//创建连接池
var pool = mysql.createPool({
    host: 'localhost', //数据库地址
    port: '3306',//端口号
    user: 'mmx',//用户名
    password: 'LsFCE43sfDnyT3cd',//密码
    database: 'mmx'//数据库名称
});

//响应JSON数据
const responseJSON = function (res, ret) {
  if (typeof ret == 'undefined') {
    res.json({
      code: "500",
      msg: "操作失败"
    });
  } else {
    res.json(ret);
  }
}


//为了获取到所以的客户端
const wss = ws(app).getWss('/')
// 建立webSocket服务
app.ws('/*', (ws, req) => {
    console.log("连接成功！");
    // send给客户端发消息
    // on是监听事件
    // message表示服务端传来的数据
    /*
    INSERT INTO 
    chatroom(id,name,content)
                SELECT MAX(id)+1,'1ww','hi我是1ww'  FROM chatroom
    */
    ws.on("message", (msg) => {
    var data = JSON.parse(msg)
    //console.log(data)
    const sql = 'INSERT INTO chatroom(id,name,content) SELECT MAX(id)+1,"'+data.name+'","'+data.content+'" FROM chatroom';
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, result) {
        connection.release();//释放链接
        })
    })
        // 给所有的客户端广播消息
        wss.clients.forEach((e) => {
            e.send(msg)
        })
    })
    // close 事件表示客户端断开连接时执行的回调函数
  ws.on('close', function (e) {
    console.log('close connection')
  })
})


//轮播图数据
app.get('/home/swiper',async (req,res)=>{
    try{
        const data=await getDB('./data/swiper.json');
        
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

//根据name获取图片
app.get('/getimg/:name', function (req, res) {
   res.setHeader("Content-Type", "image/png");//Content-Type设置为png格式
   res.sendFile( __dirname + "/images/"+req.params.name);

   console.log("Request for " + req.url + " received.");
})

//获取资讯浏览页面全局数据
app.get('/getnewslist',async (req,res)=>{
        try{
        const data=await getDB('./data/newslist.json');
        
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

//获取资讯浏览页面资讯数据
app.get('/getnewslist/:page', function (req, res, next) {
    const page=parseInt(req.params.page)
    const min=((page-1)*5+1)+""
    const max=page*5+""
    const sql = 'SELECT * FROM news_list where id>='+min+' and id<='+max;
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//根据id获取资讯正文
app.get('/getcontent/:name', function (req, res, next) {
    const id=req.params.name.split('_')[1]//根据/getcontent/news_1获取最后的id
    const sql = 'SELECT * FROM news where id='+id;
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//根据name获取视频
app.get('/getvideo/:name', function (req, res) {
   res.setHeader("Content-Type", "video/mp4");//Content-Type设置为png格式
   res.sendFile( __dirname + "/videos/"+req.params.name);
   console.log("Request for " + req.url + " received.");
})

//获取视频浏览页面全局数据
app.get('/getvideoslist',async (req,res)=>{
        try{
        const data=await getDB('./data/videoslist.json');
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

//获取资讯浏览页面资讯数据
app.get('/getvideoslist/:page', function (req, res, next) {
    const page=parseInt(req.params.page)
    const min=((page-1)*5+1)+""
    const max=page*5+""
    const sql = 'SELECT * FROM videos_list where id>='+min+' and id<='+max;
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//根据id获取视频正文
app.get('/getVideoContent/:id', function (req, res, next) {
    const id=req.params.id//获取最后的id
    const sql = 'SELECT * FROM video where id='+id;
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//获取下载列表信息
app.get('/download',function (req,res,next){
    //console.log('download');
    const sql = 'SELECT * FROM download';
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//获取下载的文件
app.get('/download/:name',function(req,res,next){
    const path='./download/'+req.params.name;
    res.download(path);
})

//验证登录信息
app.post('/login',function(req,res,next){
    //req.body=req.fields
    console.log(req.body)
    const sql = 'SELECT * FROM user where name="'+req.body.name+'"and password="'+req.body.password+'"';
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//获取当前id的最大值
app.post('/register_getid',function(req,res,next){
    const sql = 'SELECT MAX(id) as max_id FROM user;';
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      const id=result[0].max_id;
      res.status(200).json({"id":id}); 
      //释放链接
      connection.release();
    })
  })
})

//注册
app.post('/register',function(req,res,next){
    console.log(req.body);
    const sql = 'INSERT INTO `mmx`.`user` (id, name, password) VALUES ("'+req.body.id+'","'+req.body.name+'", "'+req.body.password+'")';
    console.log(sql);
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//检验名称是否已经注册
app.post('/register_name',function(req,res,next){
    console.log(req.body)
    const sql = 'SELECT * FROM user where name="'+req.body.name+'"';
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//修改用户名
app.post('/change_name',function(req,res,next){
    console.log(req.body)
    const sql = 'UPDATE `mmx`.`user` SET name = "'+req.body.name+'" WHERE `user`.`id` = '+req.body.id;
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//修改密码
app.post('/change_password',function(req,res,next){
    console.log(req.body)
    const sql = 'UPDATE `mmx`.`user` SET password = "'+req.body.password+'" WHERE `user`.`id` = '+req.body.id;
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//改变头像
app.post('/change_avatar',function(req,res,next){
    //console.log(req.body, req.fields, req.files)
    const avatar = req.files.file.data;
    const sql = 'UPDATE `mmx`.`user` SET avatar = ? WHERE `user`.`id` = '+req.body.id;
    pool.getConnection(function (err, connection) {
    connection.query(sql,[avatar], function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//获取头像
/*app.get('/get_avatar',function(req,res,next){
    console.log(req.body)
    const sql = 'SELECT avatar FROM `user` WHERE id='+req.body.id;
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})*/

//获取头像
app.post('/get_avatar_byname',function(req,res,next){
    //console.log(req.body)
    const sql = 'SELECT avatar FROM `user` WHERE name="'+req.body.name+'"';
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//获取聊天记录
app.get('/chatroom_msg',function(req,res,next){
    //console.log(req.body)
    const sql = 'SELECT * FROM `chatroom` ORDER BY id DESC LIMIT 10';
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//获取资讯浏览页面资讯数据
app.get('/gethomelist', function (req, res, next) {
    const sql = 'SELECT * FROM `news_list` WHERE id=2 OR id=3 OR id=6';
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

//获取测试信息
app.get('/gettest', function (req, res, next) {
    const sql = 'SELECT * FROM `test`';
    pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

app.listen(8000,()=>{
    console.log('Server running at prot 8000');
})
