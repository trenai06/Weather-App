function getWeather() {
  textbox = document.getElementById("text");
  city = textbox.value;

  fetch(`/weather/${city}`)
    .then((response) => {
      info = response.json();
      return info;
    })

    .then((info) => {
      console.log(info);

      cityName = document.getElementById("city-name");
      cityTemp = document.getElementById("city-temp");
      cityCondition = document.getElementById("city-condition");
      cityPrecipitation = document.getElementById("city-precipitation");

      cityName.innerText = info.city;
      cityTemp.innerText = info.temp;
      cityPrecipitation.innerText = info.precipitation;

      if (info.condition === "Sunny") {
        document.getElementById("weather-container").style.backgroundImage =
          "url('/Assets/maxresdefault.webp')";
        document.getElementById("weather-container").style.boxShadow =
          "10px 10px 10px 10px black";
        cityCondition.innerText = `${info.condition}` + " " + `☀️`;
      } else if (info.condition === "Cloudy") {
        document.getElementById("weather-container").style.backgroundImage =
          "url('/Assets/cloudy.jpg')";
        document.getElementById("weather-container").style.boxShadow =
          "10px 10px 10px 10px black";
        cityCondition.innerText = `${info.condition}` + " " + `☁️`;
      } else if (info.condition === "Snowy") {
        document.getElementById("weather-container").style.backgroundImage =
          "url('/Assets/snowy.webp')";
        document.getElementById("weather-container").style.boxShadow =
          "10px 10px 10px 10px black";
        cityCondition.innerText = `${info.condition}` + " " + `❄️`;
      }
    })

    .catch((error) => {
      console.log(error);
    });
}


//if you are getting back an array, use a loop. if just individual values, no loop. 
