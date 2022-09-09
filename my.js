// Authors: Ayush Chakraborty, Samadrita Saha
// Year of Contribution: 2022
// Organization : Megatronix
// Project Title: Certificate Generator


//Constants
var participants = ["Samrat Podder","Aman Raj","Shreya Samadrita","Ayush Chakraborty"]
//

//Modules
const Jimp = require('jimp')
//const path = require('path')

const express = require('express')
const app = express()
const ejs = require('ejs');
const path = require('path');
app.set('view engine', 'ejs');

// Write Your Code Below

// Write Your Code Above

// Sample Code for Jimp Documentation

(async ()=>{
const font = Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
const image =await Jimp.read(1000, 1000, 0x0000ffff);//Jimp.read("public/static/images/tn1.png");//resolution - 1000x1000 of colour 0x0000ffff;

async function readImage(urlOrPathtoImage) {
    var image = await Jimp.read(urlOrPathtoImage);
    return image;
}
async function getFont(urlOrPathtoFont) {
    var font = await Jimp.loadFont(urlOrPathtoFont);
    return font;
}


// Jimp Supports the following image formats
// jpeg
// png
// bmp
// tiff
// gif

//Scale the image to the given width and height keeping the aspect ratio. 
// Some parts of the image may be letter boxed.
image.contain(150, 100);
//Scale the image so the given width and height keeping the aspect ratio. 
// Some parts of the image may be clipped.
image.cover(150, 100);
// Resize the image to width 150 and auto height.
image.resize(150, Jimp.AUTO);
// resize the height to 250 and scale the width accordingly
image.resize(Jimp.AUTO, 250);
// The default resizing algorithm uses a bilinear method.
// Optionally, the following constants can be passed to choose a particular resizing algorithm:
Jimp.RESIZE_NEAREST_NEIGHBOR;
Jimp.RESIZE_BILINEAR;
Jimp.RESIZE_BICUBIC;
Jimp.RESIZE_HERMITE;
Jimp.RESIZE_BEZIER;
image.resize(250, 250, Jimp.RESIZE_BEZIER);
let x=10;
let y=10;
// prints 'Hello world!' using FONT on an image, at the POSITION (x,y) middle and center-aligned
image.print(
    font,x,y,
    {
      text: 'Hello world!',
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    },
    //maxWidth,
    //maxHeight
  );
//   although maxWidth and maxHeight parameters are optional to print(), 
// they are needed to correctly align the text using the requested alignment mode.

// Jimp Documentation Ends

// Sample Code to get a express server started with Node.JS
})();
const port = 3000
app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(port,()=>{
    console.log("Server Started at port= "+port)
})

// Sample Code ends