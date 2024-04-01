const Jimp = require('jimp');

let textData = {
  text: 'Hello World', //the text to be rendered on the image
  maxWidth: 1920, //image width - 10px margin left - 10px margin right
  maxHeight: 1080, //image height
  placementX: 800, // 0,0 is top left corner, 
  placementY: 850 //w.r.t. that text is placed on image
};

function getRandomInteger(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
const textOverlay = async (id) => {
  const image = await Jimp.read('public/static/images/tn1.png');
  const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);

  image.print(font, textData.placementX, textData.placementY, {
    text: id,
    alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
    alignmentY: Jimp.VERTICAL_ALIGN_TOP
  }, textData.maxWidth, textData.maxHeight);

  await image.writeAsync(`public/exports/${getRandomInteger(1, 10000)}.png`);
  console.log("Image is processed succesfully");
}
module.exports = textOverlay;


