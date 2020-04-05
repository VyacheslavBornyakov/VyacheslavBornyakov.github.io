$(function(){
	$('#btnPromotionalCodes').css('color', '#FB7267');
})
$(function(){
	$('#RedactionPrivateCabinet').on('click', function(){
		$('.PromoCodeKabinet').hide();
		$('.DoubleEntry').show();
	})
})
$(function(){
	$('#btnSend').on('click', function(){
		$('.DoubleEntry').hide();
		$('.PromoCodeKabinet').show();
	})
})
$(function(){
	$('#btnToApply').on('click', function(){
		$('.windowPromotionalCodes').hide();
		$('.PromoCodeKabinet').show();
	})
})
$(function(){
	$('#AddPromotionalCode').on('click', function(){
		$('.PromoCodeKabinet').hide();
		$('.windowPromotionalCodes').show();
	})
})
$(function(){
	$('#btnToApply').on('click', function(){
		$('.windowPromotionalCodes').hide();
		$('.PromoCodeKabinet').show();
	})
})
