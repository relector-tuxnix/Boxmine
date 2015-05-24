$(document).ready(function() {
	
	//Prevent dragging of svg elements
	$(document).bind("mousedown",function(e){
		return false;
	});
	
	//Prevent context menu from mouse left click
	$(document).bind("contextmenu",function(e){
		return false;
	}); 
			
	$(window).resize(function() {
		console.log("Window resized!");
		updateDimensions();
	});
	
	window.boxmine = {};
	window.boxmine.selected = Array();
	window.boxmine.activeWindow = null;

	window.boxmine.registerObject = function(name, callback) {

		if(name in joint.shapes.basic) {
			callback();
			return;
		}

		$.get("/images/boxmine/shapes/" + name + ".svg", null, function(data) {

			data = data.toString();
			data = data.replace(/<svg .*>/g, "");
			data = data.replace("</svg>", "");
			data = data.replace(/\s{2,}/g, ' ');
			data = data.replace(/\t/g, ' ');
			data = data.trim().replace(/(\r\n|\n|\r)/g,"");

			joint.shapes.basic[name] = joint.shapes.basic.Generic.extend({

				markup: data,
				
				defaults: joint.util.deepSupplement({
				
					type: 'basic.Boxmine',
					
					attrs: {
						'.class-ying': { 'fill': '#3498db' },
						'.class-yang': { 'fill': '#000' }
					}
					
				}, joint.shapes.basic.Generic.prototype.defaults)
			});

			callback();

		},  'text');
	};

	window.boxmine.addToPaper = function(name) {

		var rect = new joint.shapes.basic[name]({
			position: { x: 0, y: 0 },
			size: { width: 100, height: 100 },
			attrs: {
				'.class-ying': { fill: 'black' },
				'.class-yang': { fill: 'white' }
			}
		});

		console.log(rect.markup);
	
		window.boxmine.graph.addCell(rect);
	};

	window.boxmine.select = function(object) {
		console.log(object);	
		object.highlight();
		window.boxmine.selected.push(object);
	};
	
	window.boxmine.deselect = function(object) {
		
		object.unhighlight();
	}

	window.boxmine.deselectAll = function() {
		
		while(window.boxmine.selected.length > 0) {
			window.boxmine.selected.pop().unhighlight();
		}
	};
	
	window.boxmine.deleteSelected = function() {
	
		while(window.boxmine.selected.length > 0) {
			window.boxmine.selected.pop().remove();
		}
	};
	
	window.boxmine.selectAll = function() {
	
		console.log(window.boxmine.paper);
			
		var cells = window.boxmine.paper;
	
		for(var i = 0; i < cells.length; i++) {
			console.log(cells);
			window.boxmine.select(cells[i].model);
		}
	};
	
	window.boxmine.groupSelected = function() {
	
		if(window.boxmine.selected.length < 2) {
			return;
		}
		
		var first = window.boxmine.selected.shift();
		
		window.boxmine.deselect(first);
		
		while(window.boxmine.selected.length > 0) {
			
			var second = window.boxmine.selected.pop();
			
			window.boxmine.deselect(second);
			
			first.model.embed(second.model);
		}
	};
	
	window.boxmine.ungroupSelected = function() {
	
		console.log(window.boxmine.selected.length);
		
		if(window.boxmine.selected.length < 2) {
			return;
		}
		
		var first = window.boxmine.selected.shift();
		
		window.boxmine.deselect(first);
		
		while(window.boxmine.selected.length > 0) {
		
			var second = window.boxmine.selected.pop();
			
			window.boxmine.deselect(second);
			
			first.model.unembed(second.model);
			
			second.model.unembed(first.model);
		}
	};
	
	window.boxmine.graph = new joint.dia.Graph;

	window.boxmine.paper = new joint.dia.Paper({
		el: $('#paper'),
		width: 100,
		height: 100,
		gridSize: 1,
		perpendicularLinks: false,
		model: window.boxmine.graph
	});

	function updateDimensions() {
		var width = $('#paper-container').width();
		var height = $('#paper-container').height() - 80;

		$("#paper").height(height);
		$("#paper").width(width);

		window.boxmine.paper.setDimensions(width, height); 
	}

	updateDimensions();
	
	var link = new joint.dia.Link({
		source: { x: 10, y: 20 },
		target: { x: 350, y: 20 },
		attrs: {
			'.connection': { stroke: 'blue' },
			'.marker-source': { fill: 'red', d: 'M 10 0 L 0 5 L 10 10 z' },
			'.marker-target': { fill: 'yellow', d: 'M 10 0 L 0 5 L 10 10 z' }
		}
	});

	window.boxmine.graph.addCell(link);
	

	var text = new joint.shapes.basic.Text({
		position: { x: 170, y: 50 },
		size: { width: 40, height: 30 },
		attrs: { text: { text: 'Text' } }
	});
	
	window.boxmine.graph.addCell(text);

 $(window).load(function () {	

	blah.mouseupCallback = function() {
		console.log("YOU CLICKED ME");
	};

	zoompanel.inMouseupCallback = function() {
		window.boxmine.paper.options.width += 50;
		window.boxmine.paper.options.height += 50;
		
		window.boxmine.paper.setDimensions(window.boxmine.paper.options.width, window.boxmine.paper.options.height);
		window.boxmine.paper.scale(window.boxmine.paper.options.width / 1000, window.boxmine.paper.options.height / 1000);
		
		$("#paper").width(window.boxmine.paper.options.width);
		$("#paper").height(window.boxmine.paper.options.height);
	};

	zoompanel.resetMouseupCallback = function() {	
		window.boxmine.paper.options.width = 1000;
		window.boxmine.paper.options.height = 1000;
		
		window.boxmine.paper.setDimensions(window.boxmine.paper.options.width, window.boxmine.paper.options.height);
		window.boxmine.paper.scale(window.boxmine.paper.options.width / 1000, window.boxmine.paper.options.height / 1000);
		
		$("#paper").width(window.boxmine.paper.options.width);
		$("#paper").height(window.boxmine.paper.options.height);
	};
	
	zoompanel.outMouseupCallback = function() {	
		window.boxmine.paper.options.width -= 50;
		window.boxmine.paper.options.height -= 50;
		
		window.boxmine.paper.setDimensions(window.boxmine.paper.options.width, window.boxmine.paper.options.height);
		window.boxmine.paper.scale(window.boxmine.paper.options.width / 1000, window.boxmine.paper.options.height / 1000);
		
		$("#paper").width(window.boxmine.paper.options.width);
		$("#paper").height(window.boxmine.paper.options.height);
	};
});
	
	/*
	window.boxmine.graph.on('all', function(eventName, cell)
	{
	    console.log(arguments);
	});
	*/
	
	window.boxmine.paper.on('cell', function(v, evt, x, y) {
	
		console.log(arguments);
	});

	window.boxmine.paper.on('blank:pointerdown', function(evt, x, y) {
	
		console.log("pointerdown on " + x + "," + y);

		window.boxmine.deselectAll();
	});

	window.boxmine.paper.on('cell:pointerdown', function(v, evt, x, y) {
	
		console.log("mousedown on " + x + "," + y);
		
		window.boxmine.select(v);
	});

	window.boxmine.paper.on('cell:pointerup', function(v, evt, x, y) {
	
		console.log("mouseup on " + x + "," + y);
	});
	
	window.boxmine.paper.on('cell:pointermove', function(v, evt, x, y) {
	
		console.log("mousemove on " + x + "," + y);
	});

	window.boxmine.paper.on('blank:pointerdown', function(evt) {
		if(evt.shiftKey) {
			console.log("HERE");
		}
	});
		
	$("#attributes-button").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var type = window.boxmine.selected[0].model.defaults.type;
			
			console.log(type);
			
			if(type == "basic.Rect") {
				
				window.boxmine.activeWindow = $("#object_attributes_window");
				
				window.boxmine.activeWindow.data("kendoWindow").open();
				
			} else if(type == "basic.Image") {
			
				window.boxmine.activeWindow = $("#image_attributes_window");
				
				window.boxmine.activeWindow.data("kendoWindow").open();
			
			} else if(type =="basic.Text") {
			
				window.boxmine.activeWindow = $("#text_attributes_window");
				
				window.boxmine.activeWindow.data("kendoWindow").open();
			}
		}
	});
	
	$("#toggle-grid-button").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if($("#paper").hasClass("show-grid") == true) {

			$("#paper").removeClass("show-grid");
			
			$("#paper").addClass("hide-grid");
			
		} else {

			$("#paper").removeClass("hide-grid");
			
			$("#paper").addClass("show-grid");
		}
	});
	
	$("#move-up-button").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var selected = window.boxmine.selected[0];
	
			console.log(selected);
			
			selected.model.moveUp();
		}
	});
	
	$("#move-down-button").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var selected = window.boxmine.selected[0];
	
			console.log(selected);
			
			selected.model.moveDown();
		}
	});
	
	$("#move-top-button").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var selected = window.boxmine.selected[0];
	
			console.log(selected);
			
			selected.model.toFront();
		}
	});
	
	$("#move-bottom-button").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var selected = window.boxmine.selected[0];
	
			console.log(selected);
			
			selected.model.toBack();
		}
	});
	
	$("#delete-button").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		window.boxmine.deleteSelected();
	});
	
	$("#select-all-button").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		window.boxmine.selectAll();
	});
	
	$("#group-button").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		window.boxmine.groupSelected();
	});
	
	$("#ungroup-button").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		window.boxmine.ungroupSelected();
	});
});
