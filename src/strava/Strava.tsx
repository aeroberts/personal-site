import React, { useEffect } from "react";
import { useState } from "react";

import { Athlete } from "./Athlete";
import "./Strava.css";

function Strava() {
  const [inputValue, setInputValue] = useState("");
  const [stravaToken, setStravaToken] = useState(
    localStorage.getItem("stravaToken") || "",
  );
  const [athleteInfo, setAthleteInfo] = useState<Athlete | null>(null);

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

  const fetchAthleteInfo = () => {
    fetch("https://www.strava.com/api/v3/athlete", {
      headers: {
        authorization: `Bearer ${stravaToken}`,
      },
    })
      .then((res) => {
        return res.json() as Promise<Athlete>;
      })
      .then((athleteInfo) => setAthleteInfo(athleteInfo));
  };

  const resetToken = () => {
    setStravaToken("");
    localStorage.removeItem("stravaToken");
  };

  return (
    <div className="strava">
      {!stravaToken ? (
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={handleChange} />
          <button type="submit">Save token</button>
        </form>
      ) : (
        <>
          <p>token: {stravaToken}</p>
          <button onClick={resetToken}>Reset Token</button>
          <button onClick={fetchAthleteInfo}>Fetch Info</button>
          <div>
            <p>{athleteInfo?.firstname}</p>
            <p>{athleteInfo?.lastname}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Strava;
