let map;
let marker;
let geocoder;
let responseDiv;
let response;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("mapCore"), {
    zoom: 16, //처음 실행 시 줌 정도
    center: { lat: 33.4307831, lng: 126.9282011 }, //처음 실행 시 기준 화면 좌표
    mapTypeControl: false, //일반 지도, 위성지도 교체 버튼
  });
  geocoder = new google.maps.Geocoder();

  const inputText = document.createElement("input");

  inputText.type = "text"; //검색 박스
  inputText.placeholder = "여행지를 검색해보세요";

  const submitButton = document.createElement("input");

  submitButton.type = "button";
  submitButton.value = "검색";
  submitButton.classList.add("button", "button-primary");

  const clearButton = document.createElement("input");

  clearButton.type = "button";
  clearButton.value = "초기화";
  clearButton.classList.add("button", "button-secondary");
  response = document.createElement("pre");
  response.id = "response";
  response.innerText = "";
  responseDiv = document.createElement("div");
  // responseDiv.id = "response-container";
  // responseDiv.appendChild(response);

  const instructionsElement = document.createElement("p");

  /* instructionsElement.id = "instructions";
  instructionsElement.innerHTML =
    "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode."; */
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);

	var sr = document.querySelector('#sr');
	sr.appendChild(inputText);
  
	var sr = document.querySelector('#sr');
	sr.appendChild(submitButton);
	
/*  	var sr = document.querySelector('#sr');
	sr.appendChild(clearButton); */
  
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(
    instructionsElement
  );
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
  marker = new google.maps.Marker({
    map,
  });
  map.addListener("click", (e) => {
    geocode({ location: e.latLng });
  });
  submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
  );
   
  clearButton.addEventListener("click", () => {
    clear();
  });
  clear();
  
  infoWindow = new google.maps.InfoWindow();
  
    const locationButton = document.createElement("button");

  locationButton.textContent = "내 위치";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push( //내 위치 버튼 위치조절, TOP,RIGHT
    locationButton
  );
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
			
          };
		
          infoWindow.setPosition(pos);
          infoWindow.setContent("내 현재 위치예요.");
          infoWindow.open(map);
          map.setCenter(pos);
			
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function clear() {
  marker.setMap(null);
}

function geocode(request) {
  clear();
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;

      map.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      marker.setMap(map);
      response.innerText = JSON.stringify(result, null, 2);
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
}

window.initMap = initMap;


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
	
window.initMap = initMap;

