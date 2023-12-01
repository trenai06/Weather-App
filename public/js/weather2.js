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
      cityCondition.innerText = info.condition;
      cityPrecipitation.innerText = info.precipitation;

      document.getElementById("weather-container").style.background = "black";
      document.getElementById("weather-container").style.boxShadow = "10px 10px 10px 10px black";
    })

    .catch((error) => {
      console.log(error);
    });
}
