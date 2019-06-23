// NOTE: USERNAME IS "Zw82DPZU"

var user; var user_lat; var user_lng;
var username = "Zw82DPZU";
var map;
var cars; var closest_car;
var map_center = new google.maps.LatLng(42.352271, -71.05524200000001);
var car_pic = 'car.png';
	var myOptions = {
		zoom: 13, 
		center: map_center,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
var infowindow = new google.maps.InfoWindow();

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	getMyLocation();
}

function getMyLocation() {
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
			navigator.geolocation.getCurrentPosition(function(position) {
				user_lat = position.coords.latitude; user_lng = position.coords.longitude;
				user = new google.maps.LatLng(user_lat, user_lng);
				renderMap();
			});
		}
		else {
			alert("No geolocation. This won't work :/");
		}
}


function renderMap() {
	var user_pos = new google.maps.Marker({
		map: map, title: 'you!', position: user
	});

	initCars();

	findClosestCar();

	var path = [ ];
	path.push(user); path.push(new google.maps.LatLng(cars[closest_car].lat, cars[closest_car].lng))

	var woowooline = new google.maps.Polyline({
		map: map, 
		path: path, 
		strokeColer: '#000080', 
		strokeOpacity: 0.065, 
		strokeWeight: 1
	})

	google.maps.event.addListener(user_pos, 'click', function() {
		infowindow.setContent("Closest Vehicle: " + cars[closest_car.car].username + "; Distance: " + closest_car.distance + "miles");
		infowindow.open(map, user_pos);
	});

}

function initCars() {
	var request = new XMLHttpRequest();

	var params = "username=IZ1sLGwg&lat=" + user_lat + "&lng=" + user_lng;

	request.open("POST", "https://hans-moleman.herokuapp.com/rides" + params, true)

	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			console.log("Got the data back!");
			data = request.responseText;
			console.log(data);
			cars = JSON.parse(data);
		}
		else if (request.readyState == 4 && request.status != 200) {
			// think 404 or 500
			document.getElementById("location").innerHTML = "<p>Whoops, something went terribly wrongo</p>";
		}
		else {
			console.log("In progress...");
		}
	};

}

function findClosestCar() {
	var car_latlng;
	closest_car.distance = Number.MAX_SAFE_INTEGER; var aux_distance;
	while(cars[i]){
		car_latlng = new google.maps.LatLng(cars[i].lat, cars[i].lng);
		aux_distance = google.maps.geometry.spherical.computeDistanceBetween(user, car_latlng);
		if(aux_distance < distance){
			closest_car.car = i; closest_car.distance = aux_distance;
		}
	}
}
