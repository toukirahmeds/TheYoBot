/*========================================
=            Import of config            =
========================================*/
const config = require("./config.json");
/*=====  End of Import of config  ======*/


/*=========================================
=            Import of helpers            =
=========================================*/
const mongooseAssist = require("mongoose-assist");
/*=====  End of Import of helpers  ======*/



/*=====================================================
=            Connect to the mongodb server            =
=====================================================*/
mongooseAssist.connect(config.db.url);
/*=====  End of Connect to the mongodb server  ======*/
