$(document).ready(function() {

	$("#image_attributes_window").load("./imageAttributesWindow.html", function() {
		console.log("Loaded Image Attributes Window.");
		
		var windowFrame = $("#image_attributes_window");

		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#iaw_ok_button");
		var cancelButton = $("#iaw_cancel_button");
		
		okButton.bind("click", function() {
			window.boxmine.activeWindow = null;
			windowFrame.data("kendoWindow").close();
			
			window.boxmine.deselectAll();
		});
		
		cancelButton.bind("click", function() {
			window.boxmine.activeWindow = null;
			windowFrame.data("kendoWindow").close();
		});
		
		if(windowFrame.data("kendoWindow") == undefined) {
			windowFrame.kendoWindow({
				width: "600px",
				title: "Image Attributes",
				actions: []
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}		
	});	
});