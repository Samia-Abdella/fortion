import "./App.css";
import { useEffect, useState } from "react";
import { Input } from "postcss";

//http://api.weatherapi.com/v1/current.json?key=322a0617d0f64b01bc6164300232905&q=London
//http://api.weatherapi.com/v1/forecast.json?key=322a0617d0f64b01bc6164300232905&q=London&days=7

export default function App() {
  const [forecastWeather, setForecastWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeatherData();..
  }, []);
  const getWeatherData = () => {
    const forecastWeatherData = fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=322a0617d0f64b01bc6164300232905&q=07112&days=7`
    );

    Promise.all([forecastWeatherData])
      .then(async (response) => {
        const forecastWeatherResponse = await response[0].json();

        setForecastWeather(forecastWeatherResponse);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  console.log("Forecast Weahter:", forecastWeather);

  return (
    <>
      {forecastWeather && (
        <div>
          <p>{forecastWeather.location.name}</p>
          <p>{forecastWeather.current.temp_c}</p>
          <p>{forecastWeather.current.wind_dir}</p>
        </div>
      )}
    </>
  );
}
