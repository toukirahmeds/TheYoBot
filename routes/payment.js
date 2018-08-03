const router = require("express").Router();

/*====================================================
=            Router to get a payment info            =
====================================================*/
router.get("/details/:id", ()=>{

});


/*=====  End of Router to get a payment info  ======*/

/*==================================================
=            Router to get payment list            =
==================================================*/
router.get("/list/:pageId", ()=>{

});


/*=====  End of Router to get payment list  ======*/

/*==================================================
=            Router to create a payment            =
==================================================*/

router.post("/create", ()=>{

});

/*=====  End of Router to create a payment  ======*/

/*==================================================
=            Router to update a payment            =
==================================================*/
router.put("/update/:id", ()=>{

});


/*=====  End of Router to update a payment  ======*/


/*==================================================
=            Router to delete a payment            =
==================================================*/
router.delete("/delete/:id", ()=>{
	
});


/*=====  End of Router to delete a payment  ======*/


module.exports = router;