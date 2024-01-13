const express = require("express");
const router = express.Router();

router.get("/health", (req, res, next) => {
  res.send("OK");
});

router.use("/recipes", require("./recipes"));
router.use("/users", require("./users"));

module.exports = router;
