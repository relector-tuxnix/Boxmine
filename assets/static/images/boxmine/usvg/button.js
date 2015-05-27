var element;
var state;

function init()
{
	state = "enabled";

	element = document.getElementById("canvas");
	element.addEventListener("mousedown", mousedown, false);
}

function mousedown(evt)
{
 	evt.preventDefault();

	if(state == "disabled") {
		return;
	}
	
	element.style.opacity = 0.5;
	
	document.addEventListener("mouseup", mouseup, true);
}

function mouseup(evt)
{
	evt.preventDefault();

	if(typeof mouseupCallback !== "undefined") {
		mouseupCallback();
	}

	element.style.opacity = 1;

	document.removeEventListener("mouseup", mouseup, true);
}

function disable()
{
	state = "disabled";
}

function enable()
{
	state = "enabled";
}
