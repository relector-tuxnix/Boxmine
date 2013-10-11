$(document).ready(function() {
	
	$("#insert_object_window").load("./insertObjectWindow.html", function() {

		console.log("Loaded Insert Object Window.");

		var windowFrame = $("#insert_object_window");
		var navigationButton = $("#insert_object");
		
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#iow_ok_button");
		var cancelButton = $("#iow_cancel_button");

		navigationButton.bind("click", function() {
			windowFrame.data("kendoWindow").open();
		});
		
		okButton.bind("click", function() {
			console.log( joint.shapes.basic.Image);

			var ib = new joint.shapes.basic.Image({
				position: { x: 450, y: 50 },
				size: { width: 40, height: 40 },
				attrs: {
					text: { text: 'basic.Image' },
					image: { 'xlink:href': 'http://computerrepair-vancouver.org/wp-content/uploads/2011/09/network.png', width: 48, height: 48 }
				}
			});
	
			console.log(ib);
			
			window.boxmine.graph.addCell(ib);
	
			windowFrame.data("kendoWindow").close();
		});
		
		cancelButton.bind("click", function() {
			windowFrame.data("kendoWindow").close();
		});
		
		if(windowFrame.data("kendoWindow") == undefined) {
			windowFrame.kendoWindow({
				width: "600px",
				title: "Insert Object",
				actions: []
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}	
	});	
});