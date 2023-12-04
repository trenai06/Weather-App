const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const weather = [
  {
    city: "Louisville",
    temp: "63º",
    condition: "Sunny",
    precipitation: "0%",
  },

  {
    city: "Chicago",
    temp: "43º",
    condition: "Cloudy",
    precipitation: "20%",
  },

  {
    city: "New York",
    temp: "32º",
    condition: "Snowy",
    precipitation: "100%",
  },

  {
    city: "Miami",
    temp: "79º",
    condition: "Sunny",
    precipitation: "0%",
  },
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/weather2.html"));
});

app.get("/weather", (req, res) => {
  res.send(weather);
});

app.get("/weather/:city", (req, res) => {
  const cityName = req.params.city;
  for (i = 0; i < weather.length; i++) {
    if (weather[i].city === cityName) {
      res.send(weather[i]);
    } 
  }
});


app.listen(3000);
console.log("Express Weather 2 is working ");
