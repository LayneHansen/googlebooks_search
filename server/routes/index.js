const router = require('express').Router();
const search = require('./search.routes');

// router.get("/test", (req, res) => {
//     res.send("test")
// })

router.use('/api/search', search)

const db= [];

router.get('/api/books', (req, res) => {
    res.json(db);
})

router.post('/api/books', (req, res) => {
    db.push(req.body)
    res.json(req.body);
})


module.exports = router; 