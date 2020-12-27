const router = require("express").Router();
const bookSearch = require("./search");

// Book routes
router.use("/search", bookSearch);

module.exports = router;