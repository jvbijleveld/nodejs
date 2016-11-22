var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var PageModel = require('../models/page');

var Page = mongoose.model('Page');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var home = new Page();
	
	home.getPage("Page1", function(page){
		
		console.log("fetched page " + page);
		if(page){
			res.render('index', {title: page.title, body: ""});
		}else{
			res.render('error');
		}
	});
	/*
	Page.findOne({title:"Page3"}, function(err, page){
		if(err){
			console.log(err);
			throw err;
		}
		console.log("fetched page " + page);
		res.render('index', {title: page.title, body: ""});
	});*/
});

module.exports = router;
