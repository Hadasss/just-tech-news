const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");

// give prefix to all api urls in userRoutes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;

// FYI this file manages and assigns the correct url to each route.
