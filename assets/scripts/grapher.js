$(document).ready(function() {
	
	window.boxmine = {};
	
	(function() {
		$("#paper").width("1000");
		$("#paper").height("1000");
		
		$("#paper_container").height($(window).height() - 100);
	})();
	
	window.boxmine.graph = new joint.dia.Graph;

	window.boxmine.paper = new joint.dia.Paper({
		el: $('#paper'),
		width: 1000,
		height: 1000,
		gridSize: 1,
		perpendicularLinks: false,
		model: window.boxmine.graph
	});
	
	var rect = new joint.shapes.basic.Rect({
		position: { x: 100, y: 30 },
		size: { width: 100, height: 30 },
		attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
	});
	
	window.boxmine.graph.addCell(rect);
	
	rect.rotate(30);
	
	console.log(rect);
	
	$("#zoom_in").bind("click", function() {
		window.boxmine.paper.scale(1.1);
	});
	
	$("#zoom_reset").bind("click", function() {
		window.boxmine.paper.scale(1);
	});
	
	$("#zoom_in").bind("click", function() {
		window.boxmine.paper.scale(0.9);
	});

	
	//window.boxmine.graph.on('all', function(eventName, cell)
	//{
	//    console.log(arguments);
	//});

	window.boxmine.paper.on('cell', function(v, evt, x, y) {
	
		console.log(arguments);
	});

	window.boxmine.paper.on('blank:pointerdown', function(evt, x, y) {
	
		console.log("pointerdown on " + x + "," + y);
	});

	window.boxmine.paper.on('cell:pointerdown', function(v, evt, x, y) {
	
		console.log("mousedown on " + x + "," + y);
		
		console.log(v.model.rotate(90));
	});

	window.boxmine.paper.on('cell:pointerup', function(v, evt, x, y) {
	
		console.log("mouseup on " + x + "," + y);
	});
	
	window.boxmine.paper.on('cell:pointermove', function(v, evt, x, y) {
	
		console.log("mousemove on " + x + "," + y);
	});
	
});