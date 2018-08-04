const router = require('express').Router();


/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*==================================================
=            Router to get a membership            =
==================================================*/

router.get('/:id', authenticate(), (req, res)=>{

});


/*=====  End of Router to get a membership  ======*/


/*=====================================================
=            Router to get membership list            =
=====================================================*/

router.get('/', authenticate(), (req, res)=>{

});


/*=====  End of Router to get membership list  ======*/

/*===================================================
=            Router to create membership            =
===================================================*/


router.post('/create', authenticate(), (req, res)=>{

});

/*=====  End of Router to create membership  ======*/



/*========================================================
=            Router to update membership info            =
========================================================*/

router.put('/update/:id', authenticate(), (req, res)=>{

});


/*=====  End of Router to update membership info  ======*/

/*=====================================================
=            Router to delete a membership            =
=====================================================*/

router.delete('/delete/:id', authenticate(), (req, res)=>{

});


/*=====  End of Router to delete a membership  ======*/


module.exports = router;