//Override elastic-core pages
var $ = module.exports = require('../boxmine/pages.js');

$.apiGetMany = {
	uri: '/api/get-many',
	options: ['post'],
	label: 'API Get Many.'
};

$.apiGetByURI = {
	uri: '/api/get-by-uri',
	options: ['post'],
	label: 'API Get By URI'
};

$.apiDeleteByURI = {
	uri: '/api/delete',
	options: ['post', 'authorize'],
	label: 'Delete.'
};

$.apiRegister = {
	uri: '/api/register',
	options: ['unauthorize', 'post'],
	label: 'API Register',
	active: true
};

$.default = {
	label: 'Elastic Blog',
	views: [
		{'defaultjs' : 'boxmine/default.js'}, 
		{'default' : 'boxmine/default.html'}
	],
	above: [],
	below: []
};

$.error = {
	uri: '/error',
	options: [],
	label: 'Error Occured',
	views: [
		{"body" : 'boxmine/error.html'},
		{'defaultjs' : 'boxmine/default.js'},
		{'default' : 'boxmine/default.html'}
	],
	above: [],
	below: []
};

$.home = {
	uri: '/',
	label: 'Home',
	views: [
		{'homejs' : 'boxmine/home.js'}, 
		{'body' : 'boxmine/home.html'}, 
		{'defaultjs' : 'boxmine/default.js'}, 
		{'default' : 'boxmine/default.html'}
	],
	options: ['get'],
	above: [],
	below: []
};

$.register = {
	uri: '/register',
	options: [],
	label: 'Register',
	active: true
};


//RELATIONSHIPS

$.home.below = [
];

//$.viewQuotes.above = [$.home];
