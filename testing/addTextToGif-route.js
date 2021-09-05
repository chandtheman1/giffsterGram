const path = require('path');
const Jimp = require('jimp');
const { GifUtil, GifCodec, BitmapImage, GifFrame } = require('gifwrap');

// Async processing function for adding text to GIFs
async function addTextToGIF(sourceText, sourceName) { 

    const sourceGif = "input-img/what-is-love.gif"; // hardcoded

    // Read the file at the path and create a [GIFWRAP] Bitmap array
    const inputGif = await GifUtil.read(sourceGif);
    // Create an array of the frames subobject
    const frames = inputGif.frames.map((item) => item);
    // Convert the array of [GIFWRAP] frames to [JIMP] frames
    const jimpFrames = frames.map((item) => {
        const frame = GifUtil.copyAsJimp(Jimp, item);
        return frame 
    });
    // Load the [.fnt] font file for adding the text overlay 
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    // Overlay the user input text to each frame of the gif in the [JIMP] array
    const jimpTextFrames = jimpFrames.map((item) => {
        const textFrame = item.print(font, 10, 10, sourceText);
        return textFrame 
    });
    // Convert the array of [JIMP] frames to [GIFWRAP] frames
    const gifWrapTextFrames = jimpTextFrames.map((item) => {
        const fCopied = new GifFrame(new BitmapImage(item.bitmap))
        return fCopied 
    });
    // Write the amended GIF to the destination path
    GifUtil.write(`./public/output/${sourceName}.gif`, gifWrapTextFrames);
};

module.exports = { addTextToGIF };