var searchData = $(".search-data")
var listOfCities = []
var city
var APIKey = "78348e5f28e3de3c5614816a69e65e62";


// $(document).ready(function() {
//     var savedCities = JSON.parse(localStorage.getItem(("cities")));
//     listOfCities.push(savedCities)
//     renderButtons()
//     })

// function saveCities() {
//         localStorage.setItem("cities", JSON.stringify(listOfCities));
//     }

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

function displayWeather () {
    $(".cityWeather").empty();

    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey + "&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
            var newDiv = $("<div class='cityWeather'>")

            var cityName = response.name
            var pOne = $("<p>").html("<b>" + cityName + "</b>");
            
            newDiv.append(pOne)

            var windSpeed = response.wind.speed
            var pTwo = $("<p>").text("Wind Speed: " + windSpeed.toFixed(0) + " mph");
            newDiv.append(pTwo)

            var humidity = response.main.humidity
            var pThree = $("<p>").text("Humidity: " + humidity.toFixed(0) + " %");
            newDiv.append(pThree)

            var temperature = response.main.temp
            var pFour = $("<p>").text("Temperature: " + temperature.toFixed(0) + " F");
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
    var forcastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey
    $.ajax({
        url: forcastURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
        var day1date = moment("response.list[1].dt_txt", "YYYY-MM-DD HH:MM:SS")
        var day2date = moment("response.list[2].dt_txt", "YYYY-MM-DD HH:MM:SS")
        var day3date = moment("response.list[3].dt_txt", "YYYY-MM-DD HH:MM:SS")
        var day4date = moment("response.list[4].dt_txt", "YYYY-MM-DD HH:MM:SS")
        var day5date = moment("response.list[5].dt_txt", "YYYY-MM-DD HH:MM:SS")

        var day1temp = (response.list[1].main.temp * (9/5) - 459.67).toFixed(0)
        var day2temp = (response.list[2].main.temp * (9/5) - 459.67).toFixed(0)
        var day3temp = (response.list[3].main.temp * (9/5) - 459.67).toFixed(0)
        var day4temp = (response.list[4].main.temp * (9/5) - 459.67).toFixed(0)      
        var day5temp = (response.list[5].main.temp * (9/5) - 459.67).toFixed(0)

        var day1hum = (response.list[1].main.humidity).toFixed(0)
        var day2hum = (response.list[2].main.humidity).toFixed(0)
        var day3hum = (response.list[3].main.humidity).toFixed(0)
        var day4hum = (response.list[4].main.humidity).toFixed(0)
        var day5hum = (response.list[5].main.humidity).toFixed(0)

        var day1icon = "http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png";
        var day2icon = "http://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png";
        var day3icon = "http://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png";
        var day4icon = "http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png";
        var day5icon = "http://openweathermap.org/img/w/" + response.list[5].weather[0].icon + ".png";

        $('.day1-icon').attr('src', day1icon);
        $('.day2-icon').attr('src', day2icon);
        $('.day3-icon').attr('src', day3icon);
        $('.day4-icon').attr('src', day4icon);
        $('.day5-icon').attr('src', day5icon);

        $(".day1").html("<br/>" + "<b>" + day1date.format("ddd") + "</b>" + "</br>" + "Temp: " + day1temp + " F </br>" + "Humidity: " + day1hum + " %")
        $(".day2").html("<br/>" + "<b>" + day2date.format("ddd") + "</b>" +  "</br>" + "Temp: " + day2temp + " F </br>" + "Humidity: " + day2hum + " %")
        $(".day3").html("<br/>" + "<b>" + day3date.format("ddd") + "</b>" +  "</br>" + "Temp: " + day3temp + " F </br>" + "Humidity: " + day3hum + " %")
        $(".day4").html("<br/>" + "<b>" +  day4date.format("ddd") + "</b>" +  "</br>" + "Temp: " + day4temp + " F </br>" + "Humidity: " + day4hum + " %")
        $(".day5").html("<br/>" + "<b>" +  day5date.format("ddd") + "</b>" +  "</br>" + "Temp: " + day5temp + " F </br>" + "Humidity: " + day5hum + " %")
})
}


 $("#run-search").on("click", function () {
city = $("#search-term").val()
displayWeather()
display5day ()
// saveCities ()
})

 
 $(document).on("click", ".city-btn", function () {
city = $(this).attr("data-name");
displayWeather ()
display5day ()
 })


