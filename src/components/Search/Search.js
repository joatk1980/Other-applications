import React, { useState } from "react";
import "./Search.css";

function Search({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
    //console.log(inputValue);
    //console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    handleSearch(inputValue);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="searchInput"
        type="text"
        placeholder="Search location"
        name="search"
        data-testid="text-input"
        value={inputValue}
        onChange={onChange}
      />
      <button
        className="searchButton"
        type="submit"
        data-testid="submit-button"
      >
        Submit
      </button>
      <p></p>
      <p></p>
    </form>
  );
}

export default Search;
