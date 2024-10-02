import React from "react";
import "./Card.css";
import getWeatherCondition from "../helpers/getWeatherConditions";
import transformDate from "../helpers/transformDate/index";

const Card = ({ day }) => {
  console.log("day", day);
  const conditionDesc = getWeatherCondition(day.condition)[0];
  const icon = getWeatherCondition(day.condition)[1];
  const date = transformDate(day.date);

  return (
    <div className="Weather-card">
      <h3 className="day">
        {day.dayOfWeek} / {date}
      </h3>
      <img className="icon" src={icon} alt="Weather Icon" />
      <p className="condition">{conditionDesc}</p>
      <p>
        Temp: <strong>{day.temperatureMax} °C</strong>
      </p>
      <p>
        Wind: <strong>{day.windSpeed} km/h</strong>
      </p>
    </div>
  );
};

export default Card;
