var searchData = $(".search-data")
var listOfCities = []
var city
// NEED TO LINK INPUT OF SEARCH TERM TO LIST OF CITIES FOR BUTTON RENDERING
// ALSO NEED TO SAVE IN LOAL STORAGE
// USE WORKING-MOVIE-APP-SOLVED FROM 6-2 FOR REFERENCE!!!




function renderButtons () {
    $(".buttons-view").empty();
    for (var i = 0; i < listOfCities.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-outline-primary city-btn");
        a.attr("data-name", listOfCities[i]);
        a.text(listOfCities[i]);
        $(".buttons-view").prepend(a);
      }
    }


var APIKey = "78348e5f28e3de3c5614816a69e65e62";

function displayWeather () {
    $(".cityWeather").empty();
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

            var newDiv = $("<div class='cityWeather'>")

            var cityName = response.name
            var pOne = $("<p>").html("<b>" + cityName + "</b>");
            
            newDiv.append(pOne)

            var windSpeed = response.wind.speed
            var pTwo = $("<p>").text("Wind Speed: " + windSpeed);
            newDiv.append(pTwo)

            var humidity = response.main.humidity
            var pThree = $("<p>").text("Humidity: " + humidity);
            newDiv.append(pThree)

            var temperature = response.main.temp
            var pFour = $("<p>").text("Wind Speed: " + temperature);
            newDiv.append(pFour)

            searchData.prepend(newDiv)

            var icon = $("<img id = 'icon'>")
            $(".weather-icon").append(icon)
            var iconcode = response.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            $('#icon').attr('src', iconurl);


            if (listOfCities.includes(response.name) === false) {
                listOfCities.push(response.name)
            }
            renderButtons()
            display5day ()
        })   
 };



 function display5day () {
    var forcastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    $.ajax({
        url: forcastURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

        $(".day1").text(moment.js(response.list[1].dt).format(ddd))


 })}


 $("#run-search").on("click", function () {
city = $("#search-term").val()
displayWeather()
})

 
 $(document).on("click", ".city-btn", function () {
city = $(this).attr("data-name");
displayWeather ()
 })


