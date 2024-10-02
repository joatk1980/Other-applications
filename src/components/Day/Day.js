import React from "react";
import "./Day.css";

const DaysDropdown = ({ selectedDay, setSelectedDay }) => {
  const handleChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const days = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div>
      <h4>
        Please choose from the dropdown how many days weather you would like to
        see below:
      </h4>
      <select value={selectedDay} onChange={handleChange}>
        <option value="" disabled>
          Choose amount of days
        </option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      {selectedDay && (
        <p>
          <h5>Showing {selectedDay} days of weather</h5>
        </p>
      )}
    </div>
  );
};

export default DaysDropdown;
