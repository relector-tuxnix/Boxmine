var common = require('../../boxmine/common.js');
var pages = require('../../boxmine/pages.js');

exports.install = function(framework) {
	framework.route(pages.apiGetByURI.uri, getByURI, pages.apiGetByURI.options);
	framework.route(pages.apiGetMany.uri, getMany, pages.apiGetMany.options);
	framework.route(pages.apiDeleteByURI.uri, deleteByURI, pages.apiDeleteByURI.options);
};

function getByURI()
{
	var self = this;

	var uri = self.post.uri;
       	var index = self.post.index;
        var type = self.post.type;

	common.EBGetByURI(self, uri, index, type, function(results) {

		if(results.success == false) {
			
			self.view500(results.message);
			
		} else {

			self.json(results.message);
		}
	});
}

function getMany()
{
	var self = this;

	var last = self.post.last;
       	var index = self.post.index;
        var type = self.post.type;
	var limit = self.post.limit;
	
	common.EBGetMany(self, last, index, type, limit, function(results) {

		if(results.success == false) {
			
			self.view500(results.message);
			
		} else {

			self.json(results);
		}
	});
}

function deleteByURI()
{
	var self = this;

	var uri = self.post.uri;
	var index = self.post.index;
	var type = self.post.type;

	common.EBDelete(self, uri, index, type, function(results) {

		if(results.success == false) {
	
			self.view500(results.message);

		} else {

			self.json(results);
		}
	});
}
