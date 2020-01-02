var bulbIP = "http://192.168.0.50/api/";

var apiKey = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";

var apiURL = bulbIP + apiKey + "/lights/1";

var apiURL2 = bulbIP + apiKey + "/lights/2";

var apiURL3 = bulbIP + apiKey + "/lights/3";

var apiURL4 = bulbIP + apiKey + "/lights/4";

var apiURL5 = bulbIP + apiKey + "/lights/5";

var apiURL6 = bulbIP + apiKey + "/lights/6";




function color(url, brightness, color){
	$.ajax({
		url:url + "/state",
		type:"PUT",
		data:JSON.stringify({ "on": true, "bri": brightness, "xy":color}),
		success:function(data){
			console.log(data);
		}

	});
}
