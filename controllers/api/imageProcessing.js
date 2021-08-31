const router = require('express').Router();
const { addTextToGIF } = require('./addTextToGif');

/* /api/image Endpoint */

// New Gif temp page
router.get('/', (req, res) => {
    try {
        res.status(200).render('gif');
    } catch (error) {
        res.status(500).error(error);
    }
});

// CREATE new Gif
router.post('/makeGif', async (req, res) => {
try {
    const sourceGif = req.body.sourceGif;
    const sourceText = req.body.sourceText;
    const sourceName = req.body.sourceName;

    await addTextToGIF(sourceText, sourceName);

    res.status(200).send(`output/${sourceName}.gif`);

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

module.exports = router;