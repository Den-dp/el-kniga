(function( $ ){

	$.fn.formValidation.options = {
		validators : {
			text: function(value){
				return text.length>2;
			},
			tel: function(value){
				return value.test(/\+?(\([\d]+\))?[\d]{4,}/gm);
			},
			email: function(value){},
			hidden: function(value){}
		}
	};

	var Validator = {
		init: function (options, elem) {
			var self = this;
			self.options = $.extend( {}, $.fn.formValidation.options, options );
		}
	};

	$.fn.formValidation = function(config) {
		$.extend(config);
		// тут не нужно делать так $(this) потому-что
		// "this" уже является объектом jquery

		// $(this) будет обозначать то же самое, что $($('#element'));

		var inputs = this.find('input');
		for ( var input in inputs ){
			if (!input.type) continue;
			if( !validators[input.type] ){
				input.addClass();
			}
		}

		this.fadeIn('normal', function(){

			// а вот здесь this это ссылка на нативный DOM объект, и чтобы работать с ним
			// надо сделать так   $(this)

		});

	};
})( jQuery );