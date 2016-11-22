var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var PageModel = require('../models/page');

var Page = mongoose.model('Page');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {title: "My homePage"});
});

router.get('/:pageName', function(req, res, next) {
	
	var home = new Page();
	
	home.getPage(req.params.pageName, function(page){
		
		console.log("fetched page " + page);
		if(page){
			res.render('page', page);
		}else{
			res.render('notfound');
		}
	});
});

module.exports = router;
