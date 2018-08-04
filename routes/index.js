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
router.use("/authentication", require('../helpers/oauth2/oauth2ExpressRoutes'));
router.use("/template", require('./template'));
router.use("/automation", require('./automation'));
router.use("/page", require('./page'));
router.use("/membership", require('./membership'));
router.use("/broadcast", require('./broadcast'));
router.use("/payment", require('./payment'));
router.use("/product", require('./product'));
router.use("/service", require('./service'));
router.use("/invoice", require('./invoice'));
router.use("/order", require('./order'));
router.use("/my-business", require('./myBusiness'));
router.use("/webhook/4D8B7061-CCDC-4568-B61A-24CCF9AFB6E9/facebook", require('./fbWebhook'));
router.use("/webhook/768C6EE0-8AB9-497D-B584-038296E2926A/instagram", require('./instagramWebhook'));
router.use("/webhook/9A62BCAC-3CA9-4B3E-A13E-A0264610BC16/youtube", require('./youtubeWebhook'));
router.use("/webhook/CB10E2F4-83A4-4F26-9095-19DD90AC3DBC/payment", require('./paymentWebhook'));
/*=====  End of Declaration of Routes  ======*/


module.exports = router;
