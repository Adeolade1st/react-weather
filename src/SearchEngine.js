import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  const [temperature, setTemperature] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [humidity, setHumidity] = useState(" ");
  const [wind, setWind] = useState(" ");
  const [submit, getSubmit] = useState(" ");
  const [citylocation, changeCityLocation] = useState(" ");
  const [city, displayCity] = useState(" ");

  function weatherCondition(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiLink).then(weatherCondition);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getSubmit(
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>wind: {wind}km/h</li>
      </ul>
    );
  }

  function changeCity(event) {
    changeCityLocation(event.target.value);
    citylocation({ city });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChage={changeCity} />
        <input type="submit" value="Search" />
      </form>

      <p>{submit}</p>
    </div>
  );
}
