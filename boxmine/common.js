var framework = require('total.js');
var cuid = require('cuid');

var db = require('./database.js');

var defaultLimit = framework.config["default-item-limit"];

var $ = module.exports = require('../elastic-core/common.js');


$.EBGetByURI = function(self, uri, index, type, callback)
{
	db.client.get({
		index: index,
		type: type,
		size: 1,
		id: uri
	}, function (error, response) {

		if(error == null && response != null && response._source !=  null) {

			callback({success: true, message: response._source}); 

		} else {

			callback({success: false, message: "An error has occurred."});
		}
	});
}

$.EBGetMany = function(self, last, index, type, limit, callback)
{
	var body = {
		"query" : {
			"bool" : {
				"must" : []
			}
		}
	};

	if(self.user == null) {

		body.query.bool.must.push({"match" : { "live" : true }});
	}

	if(last != null && last != "") {

		body.query.bool.must.push({"range" : { "key" : { "lt" : last }}});
	}

	if(limit == null || limit == "") {
		limit = 0;
	}

	 //Check if submitted limit is within specified bounds
        if(limit < 1 || limit > defaultLimit) {

                limit = defaultLimit;
        } 

	db.client.search({
		index: index,
		type: type,
		sort: "key:desc",
		size: limit,
		body: body
	}, function (error, response) {

		if(error == null) {

			var items = [];

			for(var i = 0; i < response.hits.hits.length; i++) {

				items.push(response.hits.hits[i]._source);
			}

			callback({success: true, message: items}); 

		} else {

			callback({success: false, message: "An error has occurred."});
		}
	});
}

$.EBDelete = function(self, uri, index, type, callback)
{
	db.client.delete({
		index: index,
		type: type,
		id: uri,
		refresh: true
	}, function (err, response) {

		if(err == null) {

			callback({success: true, message: "Deleted."});

		} else {

			callback({success: false, message: "Failed to delete."});
		}
	});
}
