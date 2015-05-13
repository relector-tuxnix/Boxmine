$(document).ready(function() {

	$("#save_document").click(function() {

		console.log("Loaded Save Document Window.");
		
		var windowFrame = $("#save_document_window");
		var navigationButton = $("#save_document");
		
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#sdw_ok_button");
		var cancelButton = $("#sdw_cancel_button");

		navigationButton.bind("click", function() {
			
			if(window.boxmine.activeWindow != null) {
				return;
			}

			window.boxmine.activeWindow = windowFrame;
			windowFrame.data("kendoWindow").open();
		});
		
		okButton.bind("click", function() {
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
				title: "Save Document",
				actions: []
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}		
	});	
});
