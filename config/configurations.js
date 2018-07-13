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


/*=============================================
=            Seeding of auth2 data            =
=============================================*/
require("../helpers/oauth2/seed");


/*=====  End of Seeding of auth2 data  ======*/


/*=======================================
=            Seeding of data            =
=======================================*/
//Default fb templates


/*=====  End of Seeding of data  ======*/

