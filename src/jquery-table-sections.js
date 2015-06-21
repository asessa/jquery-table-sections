(function($) {
	$.fn.table_sections = function() {
		var self = this;

		self.each(function(k,v) {
			var element = $(v),
				headers = $(".table-sections-header > tr", element);

			headers.click(function() {
				var header = $(this),
					tbody = header.parent("tbody");

				if (typeof element.attr('autoclose') !== 'undefined') {
					tbody.hasClass("open") || $("tbody", element).removeClass("open");
				}

				tbody.toggleClass("open");
			});
		});
	}
})(jQuery);