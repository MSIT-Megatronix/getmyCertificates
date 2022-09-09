const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const ejs = require('ejs');
const textOverlay = require('./CertificateGenerator');
app.set('view engine', 'ejs');

const port = 3000
app.get('/',(req,res)=>{
    res.render('home')
})
app.post('/text',(req,res)=>{
    //const name=req.body
    const json=req.body.Name
    //console.log(req.body.Name)
    res.end()
    //console.log(req.body.name)
    const j=JSON.stringify(json)
    textOverlay(JSON.parse(j))

})


app.listen(port,()=>{
    console.log("Server Started at port= "+port)
})