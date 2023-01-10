const fs=require('fs')
const {promisify} = require('util')
const path=require('path')

const readFile=promisify(fs.readFile)
const writeFile=promisify(fs.writeFile)

exports.getDB = async(filePath)=>{
    const dbPath=path.join(__dirname,filePath)
    const data=await readFile(dbPath,'utf8')
    return JSON.parse(data)
}

exports.saveDB = async(filePath,db)=>{
    const dbPath=path.join(__dirname,filePath)
    const data=JSON.stringify(db)
    await writeFile(dbPath,data)
}