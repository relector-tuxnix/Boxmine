$(document).ready(function() {

	$("#object_attributes_window").load("objectAttributesWindow.html", function() {
	
		var window = $("#object_attributes_window");
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var newDocument = $("#object_attributes");
		var okButton = $("#oaw_ok_button");
		var cancelButton = $("#oaw_cancel_button");

		newDocument.bind("click", function() {
			window.data("kendoWindow").open();
		});
		
		okButton.bind("click", function() {
			window.data("kendoWindow").close();
		});
		
		cancelButton.bind("click", function() {
			window.data("kendoWindow").close();
		});
		
		if(window.data("kendoWindow") == undefined) {
			window.kendoWindow({
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

			
			window.data("kendoWindow").close();
			window.data("kendoWindow").center();
		}		
	});	
});