$(function(){
	/* 메인페이지 #main_page*/
			/* 이달의 추천여행지 swipe  */	
 	var swiper = new Swiper(".mySwiper", { // 스와이프할 대상 전체 감싸고 있는 div
		slidesPerView: 2, // 보여질 개수
		paginationClickable: false,
		spaceBetween: 20,
		freeMode: true,
		loop: true
	}); 

			/* 전국 진행 중 축제/ 행사 auto swipe  */	
    var swiper = new Swiper(".list_event", {
      spaceBetween: 30,
      centeredSlides: true,
	  loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
    });

	/* 메인 상세페이지 #main_detail */
			/* 상단 swipe */
	var swiper = new Swiper(".photo_swiper", {
		pagination: {
		  el: ".swiper-pagination",
		  dynamicBullets: true,
		},
	  });

			/* 상세정보 더보기 */
	var articleheight = $('.detail_article').innerHeight();
	$('.detail_article').css('height',articleheight -144);
	
	$('.detail_article_close').click(function(e){
		e.preventDefault();
		$('.detail_article').stop().animate({height: articleheight},500);
		$('.detail_article_close').hide();
	}); 

	var infoheight = $('.detail_info').innerHeight();
	$('.detail_info').css('height',infoheight -430);
	
	$('.detail_info_close').click(function(e){
		e.preventDefault();
		$('.detail_info').stop().animate({height: infoheight},500);
		$('.detail_info_close').hide();
	}); 

			/* 지도 */
	function map() {
		var myLatlng = new google.maps.LatLng(37.5937101, 129.0900418);
		var myOptions = {
		 zoom: 16,
		 center: myLatlng,
		 mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("map"), myOptions);
		var marker = new google.maps.Marker( {
		 position: myLatlng, 
		 map: map, 
		});   
	   }
	   window.onload=function() {
		map();
	   }
	/* 일정 달력 페이지 #calendar */
	$('.cancle').click(function(){
		$('.box').fadeOut();
	});
	
	/* 숙소 게시판 페이지 #hotel*/
	var swiper = new Swiper(".bestHotel", {
		slidesPerView: 2, 
		paginationClickable: false,
		spaceBetween: 20,
		freeMode: true,
	}); 

	/* 티켓 게시판 페이지 #ticket*/
	var swiper = new Swiper(".bestTicket", {
		slidesPerView: 2, 
		paginationClickable: false,
		spaceBetween: 20,
		freeMode: true,
	}); 

	/* 게시판 페이지 #board */
	class LikeCounter01 {
		constructor() {
			
		this.clickedCount = 175;

		const button = document.querySelector('.button01');
		const clickedCountText = document.querySelector('.clickedCountText01');

			button.addEventListener('click', () => {
			this.clickedCount += 1;
			clickedCountText.textContent = this.clickedCount;
			});
		}
	}

	new LikeCounter01();
	
	class LikeCounter02 {
		constructor() {
			
		this.clickedCount = 67;

		const button = document.querySelector('.button02');
		const clickedCountText = document.querySelector('.clickedCountText02');

			button.addEventListener('click', () => {
			this.clickedCount += 1;
			clickedCountText.textContent = this.clickedCount;
			});
		}
	}

	new LikeCounter02();	
	
	class LikeCounter03 {
		constructor() {
			
		this.clickedCount = 244;

		const button = document.querySelector('.button03');
		const clickedCountText = document.querySelector('.clickedCountText03');

			button.addEventListener('click', () => {
			this.clickedCount += 1;
			clickedCountText.textContent = this.clickedCount;
			});
		}
	}

	new LikeCounter03();	
	
	class LikeCounter04 {
		constructor() {
			
		this.clickedCount = 34;

		const button = document.querySelector('.button04');
		const clickedCountText = document.querySelector('.clickedCountText04');

			button.addEventListener('click', () => {
			this.clickedCount += 1;
			clickedCountText.textContent = this.clickedCount;
			});
		}
	}

	new LikeCounter04();		
	
	class LikeCounter05 {
		constructor() {
			
		this.clickedCount = 54;

		const button = document.querySelector('.button05');
		const clickedCountText = document.querySelector('.clickedCountText05');

			button.addEventListener('click', () => {
			this.clickedCount += 1;
			clickedCountText.textContent = this.clickedCount;
			});
		}
	}

	new LikeCounter05();

});
