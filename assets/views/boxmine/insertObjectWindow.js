$(document).ready(function() {
	
	$(window).load(function() {

		insertObjectCloseButton.mouseupCallback = function() {
			console.log("Close Insert Object Window");

			$('#insert-object-window').hide();
		};

		insertObjectButton.mouseupCallback = function() {

			console.log("Loaded Insert Object Window.");

			$('#insert-object-window').show();

			var lastMX;
			var lastMY;
			var itemTLX;
			var itemTLY;
			var firstMX;
			var firstMY;
			var paperTLX;
			var paperTLY;

			$('.object-item').on('mousedown', function(evt) {

				console.log("HERE");

				// Paper offset from top left
				var realPaper = $('#paper').offset();
				paperTLX = realPaper.left;
				paperTLY = realPaper.top;

				// Record where the object started, coordinated is from the top left
				var real = $(evt.target).offset();
				itemTLX = real.left;
				itemTLY = real.top;

				// Record where the mouse started
				firstMX = evt.clientX;
				firstMY = evt.clientY;
				lastMX = 0;
				lastMY = 0;

				var item = $(evt.target).clone();

				$('body').append(item);

				$(item).unbind();

				$(item).offset({left: itemTLX, top: itemTLY});

				$(item).css('position', 'fixed');

				// When moving anywhere on the page, drag the window …until the mouse button comes up
				$(document).bind('mousemove', drag);

				$(document).bind('mouseup', function() {

					$(document).unbind('mousemove', drag);

					if(item != null) {

						var objectSrc = $(item).attr('data-name');

						window.boxmine.registerObject(objectSrc, function() {

							console.log("B: " + lastMX + ", " + lastMY);

							window.boxmine.addToPaper(objectSrc, itemTLX + lastMX - firstMX - paperTLX, itemTLY + lastMY - firstMY - paperTLY);
						});

						$(item).remove();
					}
				});

				// Every time the mouse moves, we do the following 
				function drag(evt) {
					lastMX = evt.clientX;
					lastMY = evt.clientY;

					// Add difference between where the mouse is now versus where it was last to the original positions
					$(item).offset({
						left: itemTLX + lastMX - firstMX,
						top: itemTLY + lastMY - firstMY
					});
				};
			});
		};

		/*
		//Adding images	
		var ib = new joint.shapes.basic.Image({
			position: { x: 450, y: 50 },
			size: { width: 40, height: 40 },
			attrs: {
				image: { 'xlink:href': 'http://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg', width: 48, height: 48 }
			}
		});

		console.log(ib);
		
		window.boxmine.graph.addCell(ib);
		*/
	});	
});
