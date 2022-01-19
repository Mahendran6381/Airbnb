const e = require('express')
const express = require('express')
const mysql = require('mysql')
const app = express()

app.get('/rooms',(req,res)=>{
    
})

app.listen(5000,(err)=>{
    if (err) console.log(err)
    else console.log("Server connected to the Port 5000")
})