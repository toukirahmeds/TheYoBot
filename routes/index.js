var express = require('express');
var path = require('path');
var router = express.Router();
const responseHelper = require("response-utilities");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   return responseHelper.successResponse(res, "Welcome to express");
// });


/*=============================================
=            Declaration of Routes            =
=============================================*/
// router.use(express.static(path.join('../assets','dist')));
router.use("/user", require('./user'));
router.use("/template", require('./template'));
router.use("/automation", require('./automation'));
router.use("/page", require('./page'));
router.use("/webhook", require('./webhook'));
/*=====  End of Declaration of Routes  ======*/


module.exports = router;