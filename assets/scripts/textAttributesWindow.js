$(document).ready(function() {

	$("#text_attributes_window").load("./textAttributesWindow.html", function() {
		console.log("Loaded Text Attributes Window.");
		
		var windowFrame = $("#text_attributes_window");
		
		//var navigationButton = $("#insert_object");
		
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#taw_ok_button");
		var cancelButton = $("#taw_cancel_button");

		/*
		navigationButton.bind("click", function() {
			windowFrame.data("kendoWindow").open();
		});
		*/
		
		okButton.bind("click", function() {
			windowFrame.data("kendoWindow").close();
		});
		
		cancelButton.bind("click", function() {
			windowFrame.data("kendoWindow").close();
		});
		
		if(windowFrame.data("kendoWindow") == undefined) {
			windowFrame.kendoWindow({
				width: "600px",
				title: "Object Attributes",
				actions: []
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}		
	});	
});