const router = require('express').Router();
const search = require('./search.routes');

router.use('/api/search', search)

module.exports = router; 