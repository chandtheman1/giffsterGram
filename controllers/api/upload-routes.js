const fs = require('fs');
const router = require('express').Router();
const multer = require('multer');
const { Gif } = require('../../models');
const upload = multer();
const path = require('path');
const Jimp = require('jimp');
const { GifUtil, GifCodec, BitmapImage, GifFrame } = require('gifwrap');


// ROUTE ./api/upload

// New Upload temp page
router.get('/', (req, res) => {
  try {
    res.status(200).render('uploadgif-test' , { 
       loggedIn : true
      }); // <---- to be updated
  } catch (error) {
    res.status(500).error(error);
  }
});

// uploads the Gif file and creates it into the database
router.post('/uploadGif', upload.any(), async function (req, res) {
 
    console.log('POST');
    console.log(req.files[0], req.body.name);


    const newGif = await Gif.create({
      name: req.body.name,
      imageData: req.files[0].buffer,
      // TO BE ADDED author: req.session.user_id 
     
    });
    
  res.json( { newGif });
  
});

//create Gif temp page
router.get('/createGif', (req, res) => {
  res.render('creategif-test',{
    loggedIn : true
  });  // <-------- to be updated
});


// adds text to Gif File
router.post('/creatingGifText', upload.any(), async (req, res) => {
  console.log('Post');
  console.log(req.files[0]);

  const textName = req.body.textName;

  const inputGif = await GifUtil.read(req.files[0].buffer);
  const frames = inputGif.frames.map((item) => item);
  const jimpFrames = frames.map((item) => {
    const frame = GifUtil.copyAsJimp(Jimp, item);
    return frame
  });
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const jimpTextFrames = jimpFrames.map((item) => {
    const textFrame = item.print(font, 10, 10, textName);
    return textFrame
  });

  const gifWrapTextFrames = jimpTextFrames.map((item) => {
    const fCopied = new GifFrame(new BitmapImage(item.bitmap))
    return fCopied
  });
  GifUtil.write('./public/output/output.gif', gifWrapTextFrames)

});

//Downloads file
router.get('/download', async (req, res) => {
  res.download('./public/output/output.gif');
});


module.exports = router;