import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherinfo, setWeatherinfo] = useState({
    city: "New York",
    temperature: 25,
    tempMin: 20,
    tempMax: 30,
    humidity: 60,
    feelsLike: 27,
    weather: "Partly cloudy",
  });
  let updateInfo = (newinfo) =>{
    setWeatherinfo(newinfo)
  }
  return (
    <div className="WeatherApp">
      <h2>Weather App</h2>
      <SearchBox  updateInfo = {updateInfo}/>
      <InfoBox  info={weatherinfo}/>
    </div>
  );
}
