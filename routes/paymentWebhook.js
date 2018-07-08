/*=============================================
=            import of npm modules            =
=============================================*/
const router = require("express").Router();


/*=====  End of import of npm modules  ======*/

router.get("/",(req, res)=>{
	console.log("Payment get webhook");
	res.status(200).json({});
});

router.post("/", (req, res)=>{
	console.log("Payment post request");
	res.status(200).json({});
});

router.put("/", (req, res)=>{
	console.log("Payment put request");
	res.status(200).json({});
});

router.delete("/", (req, res)=>{
	console.log("Payment delete request");
	res.status(200).json({});
});



module.exports = router;