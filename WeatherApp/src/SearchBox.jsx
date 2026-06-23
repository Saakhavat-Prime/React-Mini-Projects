import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "9570db3949131a485d9b2abc22a6071b";

  let getWeatherAccess = async () => {
  
      let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    let data = await response.json();
    console.log(data);
    let result = {
      city: city,
      temperature: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
    };
    console.log(result);
    return result;

  };

  let handleinputChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      console.log(city);
      let newinfo = await getWeatherAccess();
      updateInfo(newinfo);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="city"
          variant="outlined"
          value={city}
          onChange={handleinputChange}
          required
        />
        <br /> <br />
        <Button variant="contained" type="Submit">
          Search
        </Button>
        {error && <p className="error">City not found. Please try again.</p>}
      </form>
    </div>
  );
}
