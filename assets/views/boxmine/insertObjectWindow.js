$(document).ready(function() {
	
	$("#insert-object-button").click(function() {

		console.log("Loaded Insert Object Window.");

		$('#insert-object-window').show();

		$(".object-item").on("mousedown", function(e) {

			var item = $(e.target).clone();

			$(e.target).parent().append(item);

			var offset = $(e.target).offset();

			$(item).offset(offset);

			window.boxmine.dragging = $(item);

			$(item).css('position', 'fixed');

			return false;
		});

		$('body').on("mouseup", function (e) {

			if(window.boxmine.dragging != null) {

				var objectSrc = $(window.boxmine.dragging).attr('data-name');

				window.boxmine.registerObject(objectSrc, function() {

					window.boxmine.addToPaper(objectSrc);
				});

				$(window.boxmine.dragging).remove();

				window.boxmine.dragging = null;
			}
		});

		$('body').on("mousemove", function(e) {
			if(window.boxmine.dragging) {

				window.boxmine.dragging.offset({
					top: e.pageY - 50,
					left: e.pageX - 50
				});
			}
		});


/*

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
		*/
	});	
});
