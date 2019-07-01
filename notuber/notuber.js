// NOTE: USERNAME IS "Zw82DPZU"

var user; var user_lat; var user_lng;
var username = "Zw82DPZU";
var map;
var cars = []; var closest_car = {}; var car_pic = 'car.png';
var map_center = new google.maps.LatLng(42.352271, -71.05524200000001);
var myOptions = {
	zoom: 12, 
	center: map_center,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var infowindow = new google.maps.InfoWindow();

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	renderMap();
}

function renderMap() {
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
			user_lat = position.coords.latitude; user_lng = position.coords.longitude;
			user = new google.maps.LatLng(user_lat, user_lng);

			var user_pos = new google.maps.Marker({
				map: map, title: 'you!', position: user
			});



			var request = new XMLHttpRequest();
			request.open("POST", "https://limitless-falls-33784.herokuapp.com/rides");
			request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			request.send(/*"username=Zw82DPZU&lat=" + user_lat + "&*/"lng=" + user_lng);

			request.onreadystatechange = function() {
				if (request.status == 200 && request.readyState == 4) {
					console.log(request.responseText);
					cars = JSON.parse(request.responseText);
					dispCars();
					var path = [ ];
					path.push(user); path.push(new google.maps.LatLng(closest_car['car']['lat'], closest_car['car']['lng'])) ;

					var line = new google.maps.Polyline({
						map: map, path: path, 
						strokeColer: '#203e6e', strokeOpacity: 0.65, strokeWeight: 2
					})

					google.maps.event.addListener(user_pos, "click", function() {
						infowindow.setContent("Closest Vehicle: " + closest_car['car']['username'] + "; Distance: " + closest_car['distance'] + "miles");
						infowindow.open(map, user_pos);
					});
				}
			}
		});
	}
	else {
		alert("No geolocation. This won't work :/");
	}
}

function dispCars() {
	var car_latlng;
	var car_marker
	closest_car['distance'] = Number.MAX_SAFE_INTEGER; var aux_distance;
	var num_cars = cars.length;

	for(var i = 0; i < num_cars; i++){
		car_latlng = new google.maps.LatLng(cars[i].lat, cars[i].lng);
		aux_distance = 0.000621371 * google.maps.geometry.spherical.computeDistanceBetween(user, car_latlng); // 0.000621 converts meters to miles
		car_marker = new google.maps.Marker({
			position: car_latlng,
			title: cars[i]['username'] + " is " + aux_distance + " miles away",
			icon: car_pic,
			map: map
		});
		if(aux_distance < closest_car['distance']){
			closest_car['car'] = cars[i]; closest_car['distance'] = aux_distance;
		}
		google.maps.event.addListener(car_marker, "click", function() {
			infowindow.setContent(this.title);
			infowindow.open(map, this);
		});
	}
}
