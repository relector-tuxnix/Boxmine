
$(document).ready(function() {

	$(document).foundation({
 		reveal : {
			animation: null
		}
	});

	$(document).foundation('joyride', 'start');

	
	$('#login-submit-button').click(function() {

		var email = $('#login-email').val();
		var password = $('#login-password').val();
	
		var loginPost = $.post('{{pages.apiLogin.uri}}', {'email' : email, 'password' : password});

		loginPost.success(function(result) {

			if(result == null || result.success == false) {

				displayError("An unexpected error occured!");

			} else {

				if(result.success == true) {

					window.location.replace("{{pages.home.uri}}");	
				}
			}
		});

		loginPost.error(errorHandler);
	});

	{{#if pages.register.active}}

		$('#register-submit-button').click(function() {

			var email = $('#register-email').val();
			var password = $('#register-password').val();
			var confirm = $('#register-confirm').val();
		
			var registerPost = $.post('{{pages.apiRegister.uri}}', {'email' : email, 'password' : password, 'confirm' : confirm});

			registerPost.success(function(result) {

				if(result == null || result.success == false) {

					displayError("An unexpected error occured!");

				} else {

					if(result.success == true) {

						$('#login-lightbox').foundation('reveal', 'open');
					}
				}
			});

			registerPost.error(errorHandler);
		});

	{{/if}}

	$('.lightbox-cancel-button').click(function() {
		$('[data-reveal]').foundation('reveal', 'close')
	});
});
