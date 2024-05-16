$(function(){
	//최상단 이벤트 베너
	$('.eventClose').on('click',function(){
		$('.mainEventBannerWrap').slideUp();
	});	
	
	//배너 슬라이드 - 플러그인	
	var mySlider = $('.slide > ul').bxSlider({
		mode: 'horizontal', //수평으로 이동, 수직은 vertical
		speed: 300, //이동속도
		pager: false, //페이지 표시 제거
		moveSlides: 1, //이동 슬라이드 개수
		slideWidth: 400, //개당 슬라이드 폭
		minSlides: 3, //최소 노출 슬라이드 수
		maxSlides: 3, //최대
		slideMargin: 70, //슬라이드 간 간격
		auto: true, //자동 슬라이드 여부
		autoHover: true, //마우스 오버시 자동 정지
		controls: false // 이전 다음 버튼 숨김
		
	});
	$('.slideButtonL').on('click',function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$('.slideButtonR').on('click',function(){
		mySlider.goToNextSlide();
		return false;
	});		
	
	//검색창 텍스트 가이드
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
	
	//하단 텝메뉴
	$('.mainNotice2Sub4').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('.mainNotice2Sub5 > ol > li > a');
		var panelDivs = topDiv.find('.mainNotice2Sub6');
		var lastAnchor;
		var lastPanel;
		
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();


		anchors.click(function(bbb){
			bbb.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			
			//같은 텝 반복 눌렀을 때 동작 안 하게 하기			
			if(currentAnchor.get(0) === lastAnchor.get(0))  {
				return;
			}			
			
			//슬라이드 시리즈 앞에 stop넣어서 빨리 눌렀을 때 여러개 안 보이게 하기
			lastPanel.stop().slideUp(200,function(){
				//슬라이드 업 200시간으로 하고~ 펑션 뒤에꺼 또 실행하라는 뜻
				lastAnchor.removeClass('on'); 
				currentAnchor.addClass('on');
				currentPanel.stop().slideDown(200);
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;			
			});
		});	
	});	
	//툴팁
	
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPsition(x, y){
		balloon.css({left: x + 15, top: y + 15}); //x축으로 살짝 빼는 것, 숫자을 안 넣으면 겹쳐서 잘 안나옴
		//balloon.css('left','x + 15').css('top','y'); 랑 같은 표현
		
	}
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},800);
	}
	function hideBalloon(){
		balloon.stop().animate({opacity:0},800,function(){balloon.hide();});
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
	
	//애니메이션 그림 위로 1
	$(".mainNotice1Sub2 > ol > li").each(function(){
		var box = $(this); //이치는 아래 디스나옴
		
		box.hover(
			function(){
				box.find('>a').stop(true, true).animate({"margin-top":"-188px"},500);
			},
			function(){
				box.find('>a').stop(true, true).animate({"margin-top":"0px"},500);			
			}
		);		
	})
	//애니메이션 그림 위로 2
	$(".mainNotice1Sub4 > ol > li").each(function(){
		var box = $(this); //이치는 아래 디스나옴
		
		box.hover(
			function(){
				box.find('>a').stop(true, true).animate({"margin-top":"-188px"},500);
			},
			function(){
				box.find('>a').stop(true, true).animate({"margin-top":"0px"},500);			
			}
		);		
	})

	//오토 슬라이드
	var current = 0;
	var banner = $('.autoSlideS > ul > li');
	var stop;
	
	function timer(){
		stop = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0%','-100%');
			current++;
			if(current==banner.size()) {current=0;}  //사이즈는 0부터 카운트
			var next = banner.eq(current);
			move(next,'100%','0%');
		},2000);		
	}

	banner.hover(
		function(){
			clearInterval(stop);
		},
		function(){
			timer();
		}
	);

	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
	}
	timer();
	
	//날씨
	$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=b62e92967a76204cb9c857e69df4c5ca&units=metric',function(data){
		//alert(data.list[0].main.temp_min);
		
		var $minTemp = data.list[0].main.temp_min;
		var $maxTemp = data.list[0].main.temp_max;
		var $cTemp = data.list[0].main.temp;
		var $now = new Date(Date.now());
		var month = $now.getMonth()+1;
		var $cDate = $now.getFullYear() + '년 ' + month + '월 ' +$now.getDate()+ '일 ' +$now.getHours()+ '시 '+ $now.getMinutes()+ '분 ';
		//var $wIcon = data.list[0].weather[0].icon;
		
		
		$('.clowtemp').append($minTemp);
		$('.ctemp').append($cTemp);
		$('.chightemp').append($maxTemp);
		$('.h2').prepend($cDate);
		$('.cicon').append('<img src="http://blackoceans.dothome.co.kr/project02/images/weatherCloudB.png"/>');
		
	});
	//메인슬라이드
	var panel_width=$('.slideGroup1 > li > img').width();
	$('.slideTextSub').css('left',-300).each(function(index){
		$(this).attr('data-index',index);
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});
	function moveSlider(index){
		var willMoveLeft = -(index*panel_width);
		$('.slideGroup1').animate({left:willMoveLeft},'500');
		$('.slideTextSub[data-index='+index+']').show().animate({left:20},500);
		$('.slideTextSub[data-index!='+index+']').hide().animate({left:-300},500);
	};
	var randomNumber = Math.round(Math.random()*3);
	moveSlider(randomNumber);
	
	//메인슬라이드 인터벌

	var setIntervalId;
	function slideTimer(){
		setIntervalId = setInterval(function(){
			randomNumber++;
			if(randomNumber==4){randomNumber=0;}
			moveSlider(randomNumber);
			//$('.control_button').eq(randomNumber).trigger('click');
		},4000);
	};
	slideTimer();
	
	//메인슬라이드 호버
	$('.tabImg').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			slideTimer();
		}
	);	
	
	//메인슬라이드 좌우 버튼
	$('.left').click(function(){
		randomNumber--;
		if(randomNumber<0){randomNumber=4}
		$('.control_button').eq(randomNumber).trigger('click');
	});
	$('.right').click(function(){
		randomNumber++;
		if(randomNumber==4){randomNumber=0}
		$('.control_button').eq(randomNumber).trigger('click');
	});	
	
	//사이드 퀵 메뉴
	bb = true;
	$('#quickWrap > .closeBtn').click(function(e){
		e.preventDefault();
		if(bb){
			$(this).find('>img').attr('src','images/quickMenu07.png').animate({right:'15px'},500);
			$(this).animate({right:'-25px'},500).css('border-radius','10px 0px 0px 10px');
			$('#quickWrap > ul').stop().animate({right:'-65px'},500);
			$('.topMove').stop().animate({right:'-65px'},500,function(){bb=false});
			$('#quickWrap').css('height','66px');
		}else{
			$(this).find('>img').attr('src','images/quickMenu01.png').animate({right:'0px'},500);
			$(this).animate({right:'0px'},500).css('border-radius','10px 0px 0px 0px');
			$('#quickWrap > ul').stop().animate({right:'0px'},500);
			$('.topMove').stop().animate({right:'0px'},500,function(){bb=true});
			$('#quickWrap').css('height','430px');
		}
	});
	//사이드 퀵 메뉴 호버효과
	$('#quickWrap > ul > li').hover(
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>span').stop().animate({left:'-130px'},200);
		},
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>span').stop().hide().css('left','65px').show();
		}
	);
	
});