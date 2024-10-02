import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Search from "../Search";
import Card from "../Card";
import Day from "../Day/Day";
import getWeatherForecast from "../handlers/getWeatherForecast";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [trimmedData, setTrimmedData] = useState([]);
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [selectedDay, setSelectedDay] = useState(1);

  const handleSearch = async (location) => {
    try {
      const data = await getWeatherForecast(location);
      setCity(data.city);
      setCountry(data.country);
      setWeatherData(data.data);
      setError("");
    } catch (err) {
      setError("Error fetching weather data. Please try again.");
      setWeatherData([]);
      setCity("");
      setCountry("");
    }
  };

  useEffect(() => {
    let newWeatherData = weatherData.slice(0, selectedDay);
    setTrimmedData(newWeatherData);
  }, [selectedDay, weatherData]);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Search handleSearch={handleSearch} />
        <Day selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

        {city && country && (
          <p className="location">
            {city} / {country}
          </p>
        )}
        {error && <p className="error">{error}</p>}
        <div className="Weather-cards">
          {trimmedData.map((day, index) => (
            <Card key={index} day={day} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default App;
