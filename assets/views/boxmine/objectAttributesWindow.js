$(document).ready(function() {

	/*
	$("#object_attributes_window").load("./objectAttributesWindow.html", function() {
	
		console.log("Loaded Object Attributes Window.");
		
		var windowFrame = $("#object_attributes_window");
		
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#oaw_ok_button");
		var cancelButton = $("#oaw_cancel_button");

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
				title: "Object Attributes",
				actions: []
			});
			
			opacitySlider.kendoSlider({
				increaseButtonTitle: "Right",
				decreaseButtonTitle: "Left",
				min: -10,
				max: 10,
				smallStep: 2,
				largeStep: 1,
				showButtons: false
			}).data("kendoSlider");
			
			opacitySlider.kendoSlider({
				increaseButtonTitle: "Right",
				decreaseButtonTitle: "Left",
				min: -10,
				max: 10,
				smallStep: 2,
				largeStep: 1,
				showButtons: false
			}).data("kendoSlider");
			
			fillStartColour.kendoColorPicker({
				value: "#ffffff",
				buttons: false
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}		
	});	
	*/
});
