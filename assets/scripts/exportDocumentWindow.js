$(document).ready(function() {

	$("#export_document_window").load("./exportDocumentWindow.html", function() {
		console.log("Loaded Export Document Window.");
		
		var windowFrame = $("#export_document_window");
		var navigationButton = $("#export_document");
		
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#edw_ok_button");
		var cancelButton = $("#edw_cancel_button");

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
				title: "Export Document",
				actions: []
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}		
	});	
});