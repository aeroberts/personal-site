import React from "react";
import OAuth2Login from "react-simple-oauth2-login";

import "./Strava.css";

function Strava() {
  const stravaAuthUrl = "https://www.strava.com/oauth/authorize";
  const clientIdProp = "client_id=3d9d020516649342f53163e6ae025eec5bc00e22";
  const redirectUriProp = `redirect_uri=${encodeURIComponent("http://localhost:3000")}`;
  const responseTypeProp = "response_type=code";
  const scopeProp = "scope=read";
  const onSuccess = (response: any) => {
    console.log(response);
    debugger;
  };
  const onFailure = (response: any) => {
    console.log(response);
    debugger;
  };
  return (
    <div className="strava">
      <a
        target="_blank"
        href={`${stravaAuthUrl}?${clientIdProp}&${redirectUriProp}&${responseTypeProp}&${scopeProp}`}
      >
        Login
      </a>
    </div>
  );
}

export default Strava;
