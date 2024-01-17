import React from "react";
import { useState } from "react";

import "./Strava.css";

function Strava() {
  //this.state = {stravaToken: localStorage.getItem('stavatoken') || null}
  const [inputValue, setInputValue] = useState("");
  const [stravaToken, setStravaToken] = useState(
    localStorage.getItem("stravaToken") || "",
  );

  const handleChange = (event: any) => {
    setInputValue(event?.target?.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue) {
      localStorage.setItem("stravaToken", inputValue);
      setStravaToken(inputValue);
    }
  };

  return (
    <div className="strava">
      {!stravaToken ? (
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={handleChange} />
          <button type="submit">Save token</button>
        </form>
      ) : (
        <p>token: {stravaToken}</p>
      )}
    </div>
  );
}

export default Strava;
