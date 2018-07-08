/*=============================================
=            import of npm modules            =
=============================================*/
const router = require("express").Router();


/*=====  End of import of npm modules  ======*/

router.get("/", (req, res)=>{
	res.status(200).json({});
});

router.post("/", (req, res)=>{
	res.status(200).json({});
});

router.put("/", (req, res)=>{
	res.status(200).json({});
});

router.delete("/", (req, res)=>{
	res.status(200).json({});
});


module.exports = router;