$(function(){
	$('#btnPersonalArea').css('color', '#FB7267');
})


$(function(){
	$('#RedactionPrivateCabinet').on('click', function(){
		$('.privateKabinet').hide();
		$('.DoubleEntry').show();
	})
})
$(function(){
	$("#btnSend").on('click', function(){
		$(".DoubleEntry").hide();
		$(".privateKabinet").show();	
	})
})
