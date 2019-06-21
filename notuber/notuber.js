// NOTE: USERNAME IS "Zw82DPZU"

var user;
var map;
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
				user = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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
	})
	var car1 = new google.maps.Marker({
		map: map, title: 'mXfkjrFw', position: {lat: 42.3453, lng: -71.0464},icon: car_pic
	});
	var car2 = new google.maps.Marker({
		map: map, title: 'nZXB8ZHz', position: {lat: 42.3662, lng: -71.0621}, icon: car_pic
	});
	var car3 = new google.maps.Marker({
		map: map, title: 'Tkwu74WC', position: {lat: 42.3603, lng: -71.0547}, icon: car_pic
	});
	var car4 = new google.maps.Marker({
		map: map, title: '5KWpnAJN', position: {lat: 42.3472, lng: -71.0802}, icon: car_pic
	});
	var car5 = new google.maps.Marker({
		map: map, title: 'uf5ZrXYw', position: {lat: 42.3663, lng: -71.0544}, icon: car_pic
	});
	var car6 = new google.maps.Marker({
		map: map, title: 'VMerzMH8', position: {lat: 42.3542, lng: -71.0704}, icon: car_pic
	});

	google.maps.event.addListener(user_pos, 'click', function() {
		infowindow.setContent(user_pos.title);
		infowindow.open(map, user_pos);
	});

}
