const router = require('express').Router();
const search = require('./search.routes');

router.get("/test", (req, res) => {
    res.send("test")
})
router.use('/api/search', search)

module.exports = router; 