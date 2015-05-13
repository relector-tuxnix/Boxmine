$(document).ready(function() {
	
	//Prevent dragging of svg elements
	$(document).bind("mousedown",function(e){
		return false;
	});
	
	//Prevent context menu from mouse left click
	$(document).bind("contextmenu",function(e){
		return false;
	}); 
			
	joint.shapes.basic.Blob = joint.shapes.basic.Generic.extend({

		markup: [
			'<g class="rotatable">',
				'<g class="scalable">',
					'<circle cx="233" cy="233" fill="#000" r="231" class="class-ying"/>',
					'<path d="M 233,459 a 226 226 0 0 1 0,-452 a 113 113 0 0 1 0,226 z" fill="#fff" class="class-yang"/>',
					'<circle cx="233" cy="346" r="113" fill="#000" class="class-ying"/>',
					'<circle cx="233" cy="120" fill="#000" r="30" class="class-ying"/>',
					'<circle cx="233" cy="346" r="30" fill="#fff" class="class-yang"/>',
				'</g>',
			'</g>',
		].join(''),
		
		defaults: joint.util.deepSupplement({
		
			type: 'basic.Boxmine',
			
			attrs: {
				'.class-ying': { 'fill': '#3498db' },
				'.class-yang': { 'fill': '#000' }
			}
			
		}, joint.shapes.basic.Generic.prototype.defaults)
	});
	
	window.boxmine = {};
	window.boxmine.selected = Array();
	window.boxmine.activeWindow = null;
	
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
	
	
	(function() {
		$("#paper").width("2000");
		$("#paper").height("1000");
		
		$("#paper_container").height($(window).height() - 100);
	})();
	
	window.boxmine.graph = new joint.dia.Graph;

	window.boxmine.paper = new joint.dia.Paper({
		el: $('#paper'),
		width: 2000,
		height: 1000,
		gridSize: 1,
		perpendicularLinks: false,
		model: window.boxmine.graph
	});
	
	var rect = new joint.shapes.basic.Blob({
		position: { x: 100, y: 30 },
		size: { width: 200, height: 200 },
		attrs: {
			'.class-ying': { fill: 'black' },
			'.class-yang': { fill: 'white' }
		}
	});

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
	
	console.log(rect.markup);
	
	window.boxmine.graph.addCell(rect);
	
	var text = new joint.shapes.basic.Text({
		position: { x: 170, y: 50 },
		size: { width: 40, height: 30 },
		attrs: { text: { text: 'Text' } }
	});
	
	window.boxmine.graph.addCell(text);

	
	$("#zoom_in").bind("click", function() {
		window.boxmine.paper.options.width += 50;
		window.boxmine.paper.options.height += 50;
		
		window.boxmine.paper.setDimensions(window.boxmine.paper.options.width, window.boxmine.paper.options.height);
		window.boxmine.paper.scale(window.boxmine.paper.options.width / 1000, window.boxmine.paper.options.height / 1000);
		
		$("#paper").width(window.boxmine.paper.options.width);
		$("#paper").height(window.boxmine.paper.options.height);
	});
	
	$("#zoom_reset").bind("click", function() {
	
		window.boxmine.paper.options.width = 1000;
		window.boxmine.paper.options.height = 1000;
		
		window.boxmine.paper.setDimensions(window.boxmine.paper.options.width, window.boxmine.paper.options.height);
		window.boxmine.paper.scale(window.boxmine.paper.options.width / 1000, window.boxmine.paper.options.height / 1000);
		
		$("#paper").width(window.boxmine.paper.options.width);
		$("#paper").height(window.boxmine.paper.options.height);
	});
	
	$("#zoom_out").bind("click", function() {
		
		window.boxmine.paper.options.width -= 50;
		window.boxmine.paper.options.height -= 50;
		
		window.boxmine.paper.setDimensions(window.boxmine.paper.options.width, window.boxmine.paper.options.height);
		window.boxmine.paper.scale(window.boxmine.paper.options.width / 1000, window.boxmine.paper.options.height / 1000);
		
		$("#paper").width(window.boxmine.paper.options.width);
		$("#paper").height(window.boxmine.paper.options.height);
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
	
	$("#attributes").bind("click", function() {
		
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
	
	$("#toggle_grid").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if($("#paper").hasClass("show_grid") == true) {

			$("#paper").removeClass("show_grid");
			
			$("#paper").addClass("hide_grid");
			
		} else {

			$("#paper").removeClass("hide_grid");
			
			$("#paper").addClass("show_grid");
		}
	});
	
	
	$("#move_up").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var selected = window.boxmine.selected[0];
	
			console.log(selected);
			
			selected.model.moveUp();
		}
	});
	
	$("#move_down").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var selected = window.boxmine.selected[0];
	
			console.log(selected);
			
			selected.model.moveDown();
		}
	});
	
	$("#move_top").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var selected = window.boxmine.selected[0];
	
			console.log(selected);
			
			selected.model.toFront();
		}
	});
	
	$("#move_bottom").bind("click", function() {
		
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		if(window.boxmine.selected.length == 1) {
			
			var selected = window.boxmine.selected[0];
	
			console.log(selected);
			
			selected.model.toBack();
		}
	});
	
	$("#delete").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		window.boxmine.deleteSelected();
	});
	
	$("#select_all").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		window.boxmine.selectAll();
	});
	
	$("#group").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		window.boxmine.groupSelected();
	});
	
	$("#ungroup").bind("click", function() {
	
		if(window.boxmine.activeWindow != null) {
			return;
		}
		
		window.boxmine.ungroupSelected();
	});
});
