// Authors: Ayush Chakraborty, Samadrita Saha, Shuvam Sen
// Year of Contribution: 2024
// Organization : Megatronix
// Project Title: Certificate Generator


//Constants
var participants = ["Samrat Podder","Aman Raj","Shreya Samadrita","Ayush Chakraborty"]
//

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static('public'))
const ejs = require('ejs');
const textOverlay = require('./CertificateGenerator');
const fs = require('fs');
app.set('view engine', 'ejs');

const port = 3000
app.get('/',(req,res)=>{
    res.render('home')
})
app.post('/text.ejs',async (req,res)=>{
    const json=req.body.Name
    const j=JSON.stringify(json)
    res.render('text') // Send the response
    textOverlay(JSON.parse(j)) // Do additional processing
})

app.get('/text.ejs', async (req, res) => {
    try {
        let files = fs.readdirSync('./public/exports');
        console.log(files);
        res.json(files);
    } catch (err) {
        console.error('Error reading directory:', err);
        res.status(500).send(err);
    }
});

app.listen(port,()=>{
    console.log("Server Started at port= "+port)
})