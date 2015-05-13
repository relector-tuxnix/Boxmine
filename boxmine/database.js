var db = require('../elastic-core/database.js');

exports.client = db.client;

db.client.indices.create({

	index: 'diagrams',

	body : {
		"mappings" : {
			"diagram" : {
				"_id" : {
					"path" : "uri",
					"store" : "true",
					"index" : "analyzed"
				},
				"_timestamp" : {
					"store" : "true",
					"index" : "analyzed",
					"enabled" : "true",	
					"format" : "YYYY-MM-dd",
					"default" : "now"
				},
				"properties" : {
					"key" : {"type" : "string", "index" : "analyzed", "null_value" : "na"},
					"uri" : {"type" : "string", "null_value" : "na", "index" : "analyzed"},
					"user" : {"type" : "string", "null_value" : "na", "index" : "analyzed"},
					"updated" : {"type" : "date", "format" : "yyyy/MM/dd", "index" : "analyzed", "null_value" : "na"}
				}
			}
		}
	}



}, function(err, result) {});
