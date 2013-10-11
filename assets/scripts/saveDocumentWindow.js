$(document).ready(function() {

	$("#save_document_window").load("./saveDocumentWindow.html", function() {
		console.log("Loaded Save Document Window.");
		
		var windowFrame = $("#save_document_window");
		var navigationButton = $("#save_document");
		
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#sdw_ok_button");
		var cancelButton = $("#sdw_cancel_button");

		navigationButton.bind("click", function() {
			windowFrame.data("kendoWindow").open();
		});
		
		okButton.bind("click", function() {
			windowFrame.data("kendoWindow").close();
		});
		
		cancelButton.bind("click", function() {
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