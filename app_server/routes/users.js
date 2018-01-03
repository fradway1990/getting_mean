var express = require('express');
var userCtrl = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', userCtrl.userController);

module.exports = router;
