const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

// collecting the packaged group of API endpoints and prefixing them with the path /api
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
