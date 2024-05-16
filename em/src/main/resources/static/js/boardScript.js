$(function(){
	$('.searchBar').each(function(){
		var guideText = this.defaultValue;
		var element = $(this);

		element.focus(function(){

			if(element.val() === guideText){
				element.val('');				
				element.removeClass('guide');
			}
		});
		element.blur(function(){
			
			if(element.val() === ''){ 
				element.val(guideText);				
				element.addClass('guide');
			}
		});
		if(element.val()===guideText){
			element.addClass('guide');
		}
		
	});	

	//툴팁
	
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPsition(x, y){
		balloon.css({left: x + 15, top: y}); //x축으로 살짝 빼는 것, 숫자을 안 넣으면 겹쳐서 잘 안나옴
		//balloon.css('left','x + 15').css('top','y'); 랑 같은 표현
		
	}
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},1000);
	}
	function hideBalloon(){
		balloon.stop().animate({opacity:0},1000,function(){balloon.hide();});
	}
	
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title',''); 
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPsition(event.pageX, event.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
				
			}
		);
		element.mousemove(function(good){
			updateBalloonPsition(event.pageX, event.pageY);
		});
	});		
});