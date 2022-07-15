const express = require('express')
const app = express()
const ejs = require('ejs');
const path = require('path');
app.set('view engine', 'ejs');
const port = 3000
app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(port,()=>{
    console.log("Server Started at port= "+port)
})