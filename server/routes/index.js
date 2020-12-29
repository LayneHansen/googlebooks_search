const router = require('express').Router();
const search = require('./search.routes');
const db = require('../models');
const mongoose = require('mongoose');

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://"
// )

router.use('/api/search', search)

router.get('/api/books', (req, res) => {
    res.json(db);
})

router.post('/api/books', (req, res) => {
    db.push(req.body)
    res.json(req.body);
})


module.exports = router; 