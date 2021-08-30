// CREATE new Gif
router.post('/', async (req, res) => {
try {
    const newGIF = await Gif.create({
      sourceGif: req.body.sourceGif,
      sourceText: req.body.sourceText,
    });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});