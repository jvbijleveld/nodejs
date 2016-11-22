var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageSchema = new Schema({
	  title: { type: String, required: true, unique: true },
	  body: String,
	  created_at: Date,
	  updated_at: Date
})


pageSchema.methods.getPage = function(pageName, callBack){
	console.log("getting Page: " + pageName);
	
	Page.findOne({ title: pageName }, function(err, page) {
		if (err){
			console.log(err);
			throw err;
		}
		callBack(page);
	});
}

var Page = mongoose.model('Page', pageSchema);
module.exports = Page;