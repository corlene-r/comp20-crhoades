function initMap()
{
	// Faneuil Hall
	var map_center = new google.maps.LatLng(42.352271, -71.05524200000001);
	
	var a_car = new google.maps.LatLng(42.3453, -71.0464);
	// Set up map
	var myOptions = {
		zoom: 13, // The larger the zoom number, the bigger the zoom
		center: map_center,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
				
	// Create the map in the "map_canvas" <div>
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	// Create a marker				
	var marker = new google.maps.Marker({
		position: a_car,
		title: "mXfkjrFw"
	});
	marker.setMap(map);
	// This is a global info window...
	var infowindow = new google.maps.InfoWindow();
				
	// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
}
