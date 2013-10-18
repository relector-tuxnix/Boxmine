$(document).ready(function() {
	
	$("#insert_object_window").load("./insertObjectWindow.html", function() {

		console.log("Loaded Insert Object Window.");

		var windowFrame = $("#insert_object_window");
		var navigationButton = $("#insert_object");
		
		var tabStrip = $("#tab_strip")
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#iow_ok_button");
		var cancelButton = $("#iow_cancel_button");

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
					image: { 'xlink:href': 'http://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg', width: 48, height: 48 }
				}
			});
	
			console.log(ib);
			
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
				title: "Insert Object",
				actions: []
			});
			
			tabStrip.kendoTabStrip({
				animation:  {
					open: {
						effects: "fadeIn"
					}
				}
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}	
	});	
});