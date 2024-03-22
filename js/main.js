$(function(){
	var mainSwiper = new Swiper(".mainSwiper", {
		loop:true,
		autoplay: {
			delay:5000,
		},
		pagination: {
			el: ".swiper-pagination",
			type:"fraction"
		},
});
$("#desktop > ul > li").hover(
		function(){
			$("#desktop").addClass("active");
			$(this).find("ul").addClass("active");
			$(".menu_bg").addClass("active");
		},
		function(){
			$("#desktop").removeClass("active");
			$(this).find("ul").removeClass("active");
			$(".menu_bg").removeClass("active");
		},
	);
	$(".slider .prev").click(function(e){
			e.preventDefault();
			mainSwiper.slidePrev();
		});
	$(".slider .next").click(function(e){
			e.preventDefault();
			mainSwiper.slideNext();
		});
	$("#desktop > ul > li > a").focusin(function(){
	$("#desktop").addClass("active");
	$(this).parent().addClass("active");
	$(this).next().addClass("active");	
	$(".menu_bg").addClass("active");
});

$("#desktop li li:last-child").focusout(function(){
	$("#desktop").removeClass("active");
	$(this).parent().parent().removeClass("active");
	$(this).parent().removeClass("active");
	$(".menu_bg").removeClass("active");
});

$("#mobile > ul > li").click(function(e){
	e.preventDefault();
	if($(this).hasClass("active")==false) {
		$("#mobile > ul > li").removeClass("active");
		$(this).addClass("active");
		$("#mobile ul ul").slideUp(300);
		$(this).find("ul").slideDown(300);
	}
	else {
		$(this).removeClass("active");
		$(this).find("ul").slideUp(300);
	}
});

$("#tab").click(function(e){
e.preventDefault();
if($("#tab").hasClass("close")===false){ 
	$(this).removeAttr("class");
	$(this).addClass("close");
	$("#mobile").slideDown(300);
}
else { 
	$(this).removeAttr("class");
	$(this).addClass("open");
	$("#mobile").slideUp(300);
}
});
});

let winw;
$(window).resize(function(){
	winw=$(window).width();
	if(winw > 1280){
		if($("#tab").hasClass("close")===true){ 
			$("body").removeClass("fixed");
			$(".top").removeClass("active");
			$("#mobile").hide();
			$("#tab").removeAttr("class");
			$("#tab").addClass("open");
		}
	}
});	