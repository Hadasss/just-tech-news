const router = require("express").Router();
const userRoutes = require("./user-routes");

// give prefix to all api urls in userRoutes
router.use("/users", userRoutes);

module.exports = router;
