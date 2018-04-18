  
    var APIKey = "166a433c57516f51dfab1f7edaed8413"; // This is our API key
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Brooklyn+Park,US&units=imperial&appid=" + APIKey;// Here we are building the URL we need to query the database

    $.ajax({
      url: queryURL,
      method: "GET"
    }) 
      .then(function(response) {
        $(".temp").text("Temperature " +response.main.temp+ " (F)");
        $(".description").text("Looking out the window: " + response.weather[0].description);
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);

        if ( response.main.temp >= 32) {
          $("body").css("background-color", "rgb(224, 110, 110)")
        }else{
          $("body").css("background-color", "rgb(86, 86, 199)")
        }
      });