$(function() {
	$("#WindowRegistration").show(1000);
	$("#buttomLogin").css("background-color", '#FEFEFE');
	$("#buttomLogin").css("color", '#173C7D');
})

$(function(){
	$("#buttomLogin").on('click', function(){
		$("#buttomEntry").css("background-color", 'rgba(0, 0, 0, 0)');
		$("#buttomEntry").css("color", "white");
		$("#buttomLogin").css("background-color", "#FEFEFE");
		$("#buttomLogin").css("color", "#173C7D");
		$("#WindowsEntry").hide(500);
		$("#WindowRegistration").show(500);
		$("#DoubleWindowRegistration").hide(500); 
	})
})

$(function(){
	$("#btnBack").on('click', function(){
		$("#DoubleWindowRegistration").hide(500);
		$("#WindowRegistration").show(500);	
	})
})

$(function(){
	$("#buttomEntry").on('click', function(){
		$("#WindowRegistration").hide(500);
		$("#WindowsEntry").show(500);
		$("#buttomEntry").css("background-color", "#FEFEFE");
		$("#buttomEntry").css("color", "#173C7D");
		$("#buttomLogin").css("background-color", 'rgba(0, 0, 0, 0)');
		$("#buttomLogin").css("color", "white");
		$("#DoubleWindowRegistration").hide(500); 
		
	})
})

$(function(){
	$("#btnFurther").on('click', function(){
		if ($('#customControlAutosizing').is(':checked')) {
			$("#WindowRegistration").hide(500);
			$("#DoubleWindowRegistration").show(500); 
		}
		
	})
})
