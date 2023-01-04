const express = require('express')
const fs=require('fs')
const app=express()
const {getDB,saveDB}=require('./db')
//数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost', //数据库地址
    port: '3306',//端口号
    user: 'mmx',//用户名
    password: 'LsFCE43sfDnyT3cd',//密码
    database: 'mmx'//数据库名称
});
connection.connect();//建立连接

//表单请求体
app.use(express.json())
app.use(express.urlencoded())

//查
app.get('/todos',async (req,res)=>{
    try{
        const data=await getDB();
        res.status(200).json(data.todos)
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

app.get('/todos/:id',async (req,res)=>{
    try{
        const db=await getDB();
        const todo=db.todos.find(todo=>todo.id==req.params.id)
        if(!todo){
            return res.status(404).end()
        }else{
            return res.status(200).json(todo)
        }
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

//增
app.post('/todos',async (req,res)=>{
    const todo=req.body
    if(!todo.title){
        return res.status(422).json({
            error:'need title'
        })
    }else{
        const db=await getDB();
        const lastTodo = db.todos[db.todos.length-1]
        db.todos.push({
            id:lastTodo?lastTodo.id+1:1,
            title:todo.title
        })
        await saveDB(db)
        res.status(200).send("success")
    }
})

//改
app.patch('/todos/:id',async (req,res)=>{
    try{
    const todo=req.body
    const db=await getDB();
    const ret=db.todos.find(todo=>todo.id===Number.parseInt(req.params.id))
    if(!ret) return res.status(404).end()
    Object.assign(ret,todo)
    await saveDB(db)
    res.status(201).json(ret)
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

//删
app.delete('/todos/:id',async (req,res)=>{
    try{
        const db=await getDB()
        const index=db.todos.findIndex(todo=>todo.id===Number.parseInt(req.params.id))
        if(index===-1) return res.status(404).end()
        db.todos.splice(index,1)
        await saveDB(db);
        res.status(204).end()
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})

var sql = 'SELECT * FROM test1';
var str = '';
connection.query(sql, function(err, result) {
   if (err) {
       console.log('[SELECT ERROR]：', err.message);
   }
   str = JSON.stringify(result);
   console.log(result);
})
app.get('/sql', function(req, res) {
    res.send(str)
})
connection.end();

app.listen(8000,()=>{
    console.log('Server running at prot 8000');
})