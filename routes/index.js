var express = require('express');
var router = express.Router();

let controler = require("../controllers/controler")

// /* GET home page. */
router.get("/", controler.lista);

module.exports = router;
