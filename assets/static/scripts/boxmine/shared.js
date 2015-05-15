
var errorHandler = function(jqXHR, status, error) {

	console.log(status);
	console.log(error);

	if(status == "error") {

		displayError(error);
	} 
};

function displayError(error) {
	$('#error-message').html(error);
	$('#error-lightbox').foundation('reveal', 'open');
}
