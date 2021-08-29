const express = require("express");
const userController = require("./controller");

const router = express.Router();

router.post("/coming-soon", userController.saveUserEmail)

module.exports = router;