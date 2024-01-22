import { FormControl, FormGroup } from "@mui/material";
import Box from "@mui/material/Box";
import React, { ChangeEventHandler, FormEventHandler } from "react";
import { useState } from "react";

import { Athlete } from "./Athlete";
import AthleteDisplay from "./AthleteDisplay";
import "./Strava.css";

interface StravaToken {
  token: string;
  expiration: string;
  refresh: string;
}

function Strava() {
  const [inputStravaToken, setInputStravaToken] = useState<StravaToken>({
    token: "",
    expiration: "",
    refresh: "",
  });

  const [stravaToken, setStravaToken] = useState<StravaToken | null>(() => {
    const stravaTokenJsonString = localStorage.getItem("stravaToken");

    if (stravaTokenJsonString !== null && stravaTokenJsonString.length) {
      const token = JSON.parse(stravaTokenJsonString) as StravaToken;
      if (token.expiration && new Date(token.expiration) > new Date()) {
        // If not expired return the token otherwise return empty obj
        return token;
      }
    }
    return { token: "", expiration: "", refresh: "" };
  });

  const [athleteInfo, setAthleteInfo] = useState<Athlete | null>(null);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputStravaToken((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputStravaToken) {
      localStorage.setItem("stravaToken", JSON.stringify(inputStravaToken));
      setStravaToken(inputStravaToken);
    }
  };

  const fetchAthleteInfo = () => {
    fetch("https://www.strava.com/api/v3/athlete", {
      headers: {
        authorization: `Bearer ${stravaToken?.token}`,
      },
    })
      .then((res) => {
        return res.json() as Promise<Athlete>;
      })
      .then((athleteInfo) => setAthleteInfo(athleteInfo));
  };

  const resetToken = () => {
    setStravaToken({ token: "", expiration: "", refresh: "" });
    localStorage.removeItem("stravaToken");
  };

  return (
    <div className="strava">
      {!stravaToken || stravaToken?.token === "" ? (
        <TokenForm
          inputStravaToken={inputStravaToken}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <p>Token: {stravaToken.token}</p>
          <p>Expiration: {stravaToken.expiration}</p>
          <p>Refresh: {stravaToken.refresh}</p>
          <button onClick={resetToken}>Reset Token</button>
          <button onClick={fetchAthleteInfo}>Fetch Info</button>
          <div>
            <Box>
              {athleteInfo ? <AthleteDisplay athlete={athleteInfo} /> : <></>}
            </Box>
          </div>
        </div>
      )}
    </div>
  );
}

function TokenForm({
  inputStravaToken,
  handleChange,
  handleSubmit,
}: {
  inputStravaToken: StravaToken;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl>
          <label>
            Token:{" "}
            <input
              name="token"
              value={inputStravaToken.token}
              onChange={handleChange}
            />
          </label>
        </FormControl>
        <FormControl>
          <label>
            Expiration:
            <input
              name="expiration"
              value={inputStravaToken.expiration}
              onChange={handleChange}
            />
          </label>
        </FormControl>
        <FormControl>
          <label>
            Refresh:
            <input
              name="refresh"
              value={inputStravaToken.refresh}
              onChange={handleChange}
            />
          </label>
        </FormControl>
      </FormGroup>
      <button type="submit">Save token</button>
    </form>
  );
}

export default Strava;
