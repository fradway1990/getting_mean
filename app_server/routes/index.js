var express = require('express');
var ctrlMain = require('../controllers/index');
var router = express.Router();

/* GET home page. */
router.get('/', ctrlMain.homePageController);

module.exports = router;
