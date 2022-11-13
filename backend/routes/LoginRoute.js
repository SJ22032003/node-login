const express = require("express");
const router = express.Router();
const { post_login } = require("../controllers/LoginControllers");

//Routes
router.route("/login").post(post_login);

module.exports = router;
