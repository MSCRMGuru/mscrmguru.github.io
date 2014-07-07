function ContactGuruSubmittedHandler() {

	$(".contact-guru-form").fadeOut();
	$(".thank-you-message").fadeIn();

}



$(document).ready(function() {

});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 