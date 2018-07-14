/*=============================================
=            Import of controllers            =
=============================================*/
const TemplateController = require("../controllers/template.controller");
const VocabularyController = require("../controllers/vocabulary.controller");


/*=====  End of Import of controllers  ======*/
/*==========================================
=            Import of seedData            =
==========================================*/
const DefaultFbMessageTemplates = require("../seedData/fbMessageDefaultTemplates");
const DefaultVocabularies = require("../seedData/vocabulary");


/*=====  End of Import of seedData  ======*/




TemplateController.createManyTemplates(DefaultFbMessageTemplates, (error, templateListDoc)=>{
	if(error){
		console.log(error);
	}else{
		console.log("Template seeding successfull");
	}
});


VocabularyController.createManyVocabularies(DefaultVocabularies, (error)=>{
	if(error){
		console.log(error);
	}else{
		console.log("Vocabulary seeding successfull.");
	}
});