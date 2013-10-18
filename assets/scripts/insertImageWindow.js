$(document).ready(function() {

	$("#insert_image_window").load("./insertImageWindow.html", function() {
		console.log("Loaded Insert Image Window.");
		
		var windowFrame = $("#insert_image_window");
		var navigationButton = $("#insert_image");
		
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#iiw_ok_button");
		var cancelButton = $("#iiw_cancel_button");

		navigationButton.bind("click", function() {
		
			if(window.boxmine.activeWindow != null) {
				return;
			}

			window.boxmine.activeWindow = windowFrame;
			windowFrame.data("kendoWindow").open();
		});
		
		okButton.bind("click", function() {
		
			var ib = new joint.shapes.basic.Image({
				position: { x: 450, y: 50 },
				size: { width: 40, height: 40 },
				attrs: {
					text: { text: 'basic.Image' },
					image: { 'xlink:href': 'http://computerrepair-vancouver.org/wp-content/uploads/2011/09/network.png', width: 48, height: 48 }
				}
			});
			
			window.boxmine.graph.addCell(ib);
		
			window.boxmine.activeWindow = null;
			windowFrame.data("kendoWindow").close();
		});
		
		cancelButton.bind("click", function() {
			window.boxmine.activeWindow = null;
			windowFrame.data("kendoWindow").close();
		});
		
		if(windowFrame.data("kendoWindow") == undefined) {
			windowFrame.kendoWindow({
				width: "600px",
				title: "Insert Image",
				actions: []
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}		
	});	
});