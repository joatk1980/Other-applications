import axios from "axios";

const GEO_API_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

const getWeatherForecast = async (location) => {
  //   const startDate = new Date();
  //   const endDate = new Date();
  //   endDate.setDate(startDate.getDate() + 4);

  //   const formattedStartDate = startDate.toISOString().split("T")[0];
  //   const formattedEndDate = endDate.toISOString().split("T")[0];

  //  &start_date=${formattedStartDate}&end_date=${formattedEndDate}

  const geoResponse = await axios.get(
    `${GEO_API_URL}?name=${location}&count=1&language=en&format=json`
  );
  const { latitude, longitude, name, country } = geoResponse.data.results[0];

  console.log("geoResponse: ", geoResponse);

  const weatherResponse = await axios.get(
    `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,weathercode&timezone=auto&forecast_days=14`
  );

  console.log("weatherResponse: ", weatherResponse);

  const {
    time,
    temperature_2m_max,
    temperature_2m_min,
    weathercode,
    windspeed_10m_max,
  } = weatherResponse.data.daily;

  const mappedWeatherData = [];

  for (let index = 0; index < 14; index++) {
    const date = time[index];
    mappedWeatherData.push({
      date,
      dayOfWeek: new Date(date).toLocaleString("en-us", { weekday: "long" }),
      condition: weathercode[index],
      temperatureMax: temperature_2m_max[index],
      temperatureMin: temperature_2m_min[index],
      windSpeed: windspeed_10m_max[index],
    });
  }

  return {
    country,
    city: name,
    data: mappedWeatherData,
  };
};

export default getWeatherForecast;
