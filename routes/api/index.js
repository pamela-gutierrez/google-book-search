const router = require("express").Router();
const bookRoutes = require("./booksAPI");

// Post routes
router.use("/books", bookRoutes);

module.exports = router;
