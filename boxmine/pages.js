//Override elastic-core pages
var $ = module.exports = require('../elastic-core/pages.js');

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

$.error = {
	uri: '/error',
	options: [],
	label: 'Error Occured',
	views: [
		{"body" : 'boxmine/error.html'},
		{'default' : 'boxmine/home.html'}
	],
	above: [],
	below: []
};

$.home = {
	uri: '/',
	label: 'Home',
	views: [
		{'saveDocumentWindow_js' : 'boxmine/saveDocumentWindow.js'},
		{'saveDocumentWindow_html' : 'boxmine/saveDocumentWindow.html'},
		{'objectAttributestWindow_js' : 'boxmine/objectAttributesWindow.js'},
		{'objectAttributesWindow_html' : 'boxmine/objectAttributesWindow.html'},
		{'openDocumentWindow_js' : 'boxmine/openDocumentWindow.js'},
		{'openDocumentWindow_html' : 'boxmine/openDocumentWindow.html'},
		{'insertObjectWindow_js' : 'boxmine/insertObjectWindow.js'},
		{'insertObjectWindow_html' : 'boxmine/insertObjectWindow.html'},
		{'insertImageWindow_js' : 'boxmine/insertImageWindow.js'},
		{'insertImageWindow_html' : 'boxmine/insertImageWindow.html'},
		{'imageAttributesWindow_js' : 'boxmine/imageAttributesWindow.js'},
		{'imageAttributesWindow_html' : 'boxmine/imageAttributesWindow.html'},
		{'textAttributesWindow_js' : 'boxmine/textAttributesWindow.js'},
		{'textAttributesWindow_html' : 'boxmine/textAttributesWindow.html'},
		{'exportDocumentWindow_js' : 'boxmine/exportDocumentWindow.js'},
		{'exportDocumentWindow_html' : 'boxmine/exportDocumentWindow.html'},
		{'grapher_js' : 'boxmine/grapher.js'},
		{'home_js' : 'boxmine/home.js'},
		{'default' : 'boxmine/home.html'}
	],
	options: ['get'],
	above: [],
	below: []
};


//RELATIONSHIPS

$.home.below = [];

//$.viewQuotes.above = [$.home];
