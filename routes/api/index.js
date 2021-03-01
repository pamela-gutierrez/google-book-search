const router = require("express").Router();
const bookRoutes = require("./booksAPI.js");

// Post routes
router.use("/book", bookRoutes);

module.exports = router;
