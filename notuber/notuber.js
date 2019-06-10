		function initMap()
		{
			// Faneuil Hall
			var map_center = new google.maps.LatLng(42.352271, -71.05524200000001);

			// Set up map
			var myOptions = {
				zoom: 13, // The larger the zoom number, the bigger the zoom
				center: map_center,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
						
			// Create the map in the "map_canvas" <div>
			var map = new google.maps.Map(document.getElementById("map"), myOptions);
			
			/*
			// Create a marker
			var a_car = new google.maps.LatLng(42.3453, -71.0464);
			var marker = new google.maps.Marker({
				position: a_car,
				title: 'mXfkjrFw'
			});
			marker.setMap(map);*/

			// Say where car pic is
			var car_pic = 'car.png'
			var car1 = new google.maps.Marker({
				map: map,
				title: 'mXfkjrFw',
				position: {lat: 42.3453, lng: -71.0464},
				icon: 'car.png'
			});
			var car2 = new google.maps.Marker({
				map: map,
				title: 'nZXB8ZHz',
				position: {lat: 42.3662, lng: -71.0621},
				icon: car_pic
			});
			var car3 = new google.maps.Marker({
				map: map,
				title: 'Tkwu74WC',
				position: {lat: 42.3603, lng: -71.0547},
				icon: car_pic
			});
			var car4 = new google.maps.Marker({
				map: map,
				title: '5KWpnAJN',
				position: {lat: 42.3472, lng: -71.0802},
				icon: car_pic
			});
			var car5 = new google.maps.Marker({
				map: map,
				title: 'uf5ZrXYw',
				position: {lat: 42.3663, lng: -71.0544},
				icon: car_pic
			});
			var car6 = new google.maps.Marker({
				map: map,
				title: 'VMerzMH8',
				position: {lat: 42.3542, lng: -71.0704},
				icon: car_pic
			});

			// This is a global info window...
			var infowindow = new google.maps.InfoWindow();
						
			// Open info window on click of marker
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(marker.title);
				infowindow.open(map, marker);
			});
