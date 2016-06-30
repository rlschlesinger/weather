$(document).ready(function(){

  $('.zipSubmit').on('click', function(){
    var zipCode = $("#enterZip").val();


    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=68b707007e0b45348849d5c26a765e10", function(data){
      $(".display_weather").append().html(data.name + "<p>Temp: " + data.main.temp+"&deg;F</p>" + "<p>Humidity: " + data.main.humidity + "</p>");
      $(".display_weather").append().html();

    });

  });

});
