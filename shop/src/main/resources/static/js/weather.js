$(document).ready(function(){
	var API_KEY = 'eb57196cf4ecd600ea40fe1ab4bd682e'; //add your API KEY 
	var latitude = '33.4996213';
	var longitude = '126.5311884';
	getWeather(latitude, longitude); 
	getDaysWeather(latitude, longitude); 
 
	
	/* 현재위치의 좌표를 넘겨주는 함수 */
	/* function init() {
		askForCoords();
	}

	function askForCoords() {
		navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
	}

	function handleSuccess(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		getWeather(latitude, longitude); 
		getDaysWeather(latitude, longitude); 
	}

	function handleError() {
		console.log("can't not access to location");
	} */


	function getWeather(lat, lon) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`).then(function(response) {
			return response.json();
		})
		.then(function(data) {
			var minmaxTemp = '최저 ' + (Math.round(data.main.temp_min))+'˚ / 최고 '+(Math.round(data.main.temp_max))+'˚';
			var temp = (Math.round(data.main.temp))+"˚";
			var icon = data.weather[0].icon;
			var place = data.name;
			var now = new Date(Date.now());
			var hour = now.getHours();
					
			if(hour >= 18){
				$('.weather_wrap').css('background','url(images/weather/night.jpg) rigth center ');
			} else if(hour < 18) {
				$('.weather_wrap').css('background','url(images/weather/day.jpg) center center ');
			}
			
			$('.loc').append(place);
			$('.temp').append(temp);
			$('.lowhightemp').append(minmaxTemp);
			$('.icon').append('<img src="images/weather/'+icon+'.png"/>');
		})
		.catch((error) => console.log("error:", error));
	}

	function getDaysWeather(lat, lon) {
		fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`).then(function(response) {
			return response.json();
		})
		.then(function(data) {

			$.each(data.list, function(key) {

				// 오늘 날짜 구하는 코드
				var now = new Date();
			    var year= now.getFullYear();
			    var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
			    var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
			    var today = year + '-' + mon + '-' + day;
			  
			    // api에서 받는 날짜
			    var date = data.list[key].dt_txt.substring(0,10)
			    var time = data.list[key].dt_txt.substring(11,13)

			    // 데이터를 받아옴
			    var tem=(Math.round(data.list[key].main.temp))+'˚';
				var icon = data.list[key].weather[0].icon;

			    // 날씨 출력
                if (date === today) {
                 
                    if(time === '09') {
                        $('.am9').append('오전 9시<br/>' + tem+'<br/> <img src="images/weather/'+icon+'.png"/>');		    	
                    } else if (time === '12') {
                        $('.pm12').append('오후 12시<br/>' + tem+'<br/> <img src="images/weather/'+icon+'.png"/>');
                    } else if (time === '15') {
                        $('.pm15').append('오후 3시<br/>' + tem+'<br/> <img src="images/weather/'+icon+'.png"/>');		
                    } else if (time === '18') {
                        $('.pm18').append('오후 6시<br/>' + tem+'<br/> <img src="images/weather/'+icon+'.png"/>');	
                    } else if (time === '21') {
                        $('.pm21').append('오후 9시<br/>' + tem+'<br/> <img src="images/weather/'+icon+'.png"/>');	
                    } else{

                    }
                }
		        
			});
			
		})
		.catch((error) => console.log("error:", error));
	}

	init();
})