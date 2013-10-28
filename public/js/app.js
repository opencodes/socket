var app = (function (app, $) {
	var app = {
		init: function () {
			$('.media-list.user-list li').on('click', function(){
				window.location.href = $(this).data('url');
			});	
		}
	};	
	return app;
}(window.app = window.app || {}, jQuery));

//initialize app
jQuery(document).ready(function () {
	app.init();
});
