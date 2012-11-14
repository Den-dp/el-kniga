$(document).ready(function() {
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear(), austDay.getMonth() , austDay.getDate() + 1 + austDay.getDate()%2);
	$('#timesCountdown').countdown({until: austDay, format: 'DHMS'});

	$( "#buy-dialog" ).dialog({
		autoOpen: false,
		width: 300,
		height: 'auto',
		modal: true
	});

	$( "#order-dialog" ).dialog({
		autoOpen: false,
		width: 302,
		height: 'auto',
		modal: true
	});

	$('.call-me').click(function(elem){
		$( "#order-dialog" ).dialog( "open" );
		elem.preventDefault();
	});

	$('.buy-button').click(function(elem){
		elem = elem || window.event;
		var src = elem.target || elem.srcElement;
		$( "#buy-dialog" ).dialog({
			title: 'Заказ '+$(src).data('device')
		});
		$( "input[name=device]").val($(src).data('device'));
		$( "#buy-dialog" ).dialog( "open" );
	});

	$('.order-dialog-button').click(function(elem){
		$.post(
			"send.php",
			$(".order-form").serialize()
		).done(function( jqXHR, status ) {
			$( '#order-dialog' ).dialog( "close" );
		});
		elem.preventDefault();
	});

	$('.order-dialog-button-external').click(function(elem){
		$.post(
			"send.php",
			$(".advice-form-external").serialize()
		).done(function( jqXHR, status ) {
			$('.order-dialog-button-external').hide();
			$('.sended').show();
		});
		elem.preventDefault();
	});

	$('.buy-dialog-button').click(function(elem){
		$.post(
			"send.php",
			$(".buy-dialog-form").serialize()
		).done(function( jqXHR, status ) {
			$( '#buy-dialog' ).dialog( "close" );
		});
		elem.preventDefault();
	});
});