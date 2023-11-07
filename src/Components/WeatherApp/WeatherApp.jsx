import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

let apiKey = "f481f51c7e6c4389a2d124148230711";
const search = async () => {
  const element = document.getElementsByClassName("cityInput");
  if (element[0].value === "") {
    return 0;
  }
  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${element[0].value}&aqi=no`;
  let response = await fetch(url);
  let data = await response.json();
  const humidity = document.getElementsByClassName("humidity-percent");
  const wind = document.getElementsByClassName("wind-rate");
  const temperature = document.getElementsByClassName("weather-temp");
  const location = document.getElementsByClassName("weather-location");
  humidity[0].innerHTML = data.current.humidity + "%";
  wind[0].innerHTML = data.current.wind_kph + "kph";
  temperature[0].innerHTML = Math.floor(data.current.temp_c) + "℃";
  location[0].innerHTML = data.location.name;
};
const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24℃</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
