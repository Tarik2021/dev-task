const express = require("express");

const { auth } = require("../middlewares/auth");
const { login, rate } = require("../controllers/user.controllers");

const router = express.Router();

router.post("/login", login);
router.post("/rate/:category", auth, rate);

module.exports = router;
