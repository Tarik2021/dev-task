const express = require("express");

const { getData, searchData } = require("../controllers/imdb.controllers");

const router = express.Router();

router.get("/get-data/:category/", getData);
router.get("/get-data/:category/:term", searchData);

module.exports = router;
