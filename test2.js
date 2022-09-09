var Jimp = require('jimp');

//if you are following along, create the following 2 images relative to this script:
let imgRaw = 'public/static/images/tn1.png'; //a 1024px x 1024px backgroound image
//let imgLogo = 'raw/logo.png'; //a 155px x 72px logo
//---

let imgActive = 'public/static/images/tn1.jpg';
let imgExported = 'public/exports/tn1new.jpg';

let textData = {
  text: 'Hello World', //the text to be rendered on the image
  maxWidth: 128, //image width - 10px margin left - 10px margin right
  maxHeight: 72+20, //logo height + margin
  placementX: 100, // 10px in on the x axis
  placementY: 42-(72+20)-10 //bottom of the image: height - maxHeight - margin 
};

//read template & clone raw image 
Jimp.read(imgRaw)
  .then(tpl => (tpl.clone().write(imgActive)))

  //read cloned (active) image
  .then(() => (Jimp.read(imgActive)))

  //load font	
  .then(tpl => (
    Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(font => ([tpl, font]))
  ))
	
  //add footer text
  .then(data => {

    tpl = data[0];
    font = data[1];
  
    return tpl.print(font, textData.placementX, textData.placementY, {
      text: textData.text,
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, textData.maxWidth, textData.maxHeight);
  })

  //export image
  .then(tpl => (tpl.quality(100).write(imgExported)))

  //log exported filename
  .then(tpl => { 
    console.log('exported file: ' + imgExported);
  })

  //catch errors
  .catch(err => {
    console.error(err);
  });