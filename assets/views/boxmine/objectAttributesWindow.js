$(document).ready(function() {

	$(window).load(function() {

		objectAttributesButton.mouseupCallback = function() {
			
			if(window.boxmine.selected.length == 1) {
				
				var type = window.boxmine.selected[0].model.defaults.type;
				
				console.log(type);

				window.boxmine.activeWindow = $('#object-attributes-window');

				$('#object-attributes-window').show();
					
				/*
				if(type == "basic.Rect") {
					
					window.boxmine.activeWindow = $("#object_attributes_window");
					
					window.boxmine.activeWindow.data("kendoWindow").open();
					
				} else if(type == "basic.Image") {
				
					window.boxmine.activeWindow = $("#image_attributes_window");
					
					window.boxmine.activeWindow.data("kendoWindow").open();
				
				} else if(type =="basic.Text") {
				
					window.boxmine.activeWindow = $("#text_attributes_window");
					
					window.boxmine.activeWindow.data("kendoWindow").open();
				}
				*/
			}
		};
	
		attributesCloseButton.mouseupCallback = function() {
			$(window.boxmine.activeWindow).hide();
		};

	});
});
