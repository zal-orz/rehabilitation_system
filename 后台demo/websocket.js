const express = require("express")
const expressWs = require("express-ws")
const router = express.Router();
expressWs(router);

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

//用户的websocket访问路径：43.128.63.185:8000/ws/
const wss = ws(app).getWss('/')
//客户端向服务端发送数据处理
router.ws('/send',ws=>{
    ws.on("message",(msg)=>{
        wss.clients.forEach((e) => {
            e.send(msg)
        })
    })
})
/*
//客户端获取服务器发送过来的数据处理
router.ws('/get',ws=>{
    setInterval(()=>{
        if(MessageArray.length>0){
            let temp=MessageArray[0]
            MessageArray.shift();
            ws.send(JSON.stringify(temp));
        }
    },1000)
})*/


module.exports = router;