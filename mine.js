!function($){
	$(window).load(function (e) {
		/*所有的document加载完成后在执行*/
		var tw = $(".m-thb-addon").width();
		var oh = $(".m-thb-addon").height();
		var uh = $(".m-thb-ul").height();
		$(".m-thb-addon").height(tw*1.5);
		var nh = $(".m-thb-addon").height();
		$(".m-thb-ul").height(nh);
		$(".m-thb-img").height($(".m-thb-img").height()+nh-oh);
	});

	
	$(function(){
		$(document).ready(function(e){
			$(".m-ig").find('input').on("focus",function(e){
				//$(".m-fg-ctrl").css({"border":"1px solid green"});
				$(this).parent(".m-ig").addClass("m-bd-active");
			});
			$(".m-ig").find('input').on("blur",function(e){
				//$(".m-fg-ctrl").css({"border":"1px solid #ccc"});
				$(this).parent(".m-ig").removeClass("m-bd-active");
			});

		});
	})
}(window.jQuery);


 function isDefined(obj){
 	if (typeof obj!="undefined"||obj!=""||obj!=null||obj!=undefined) {
 		return true;
 	}else{
 		return false;
 	}
 }