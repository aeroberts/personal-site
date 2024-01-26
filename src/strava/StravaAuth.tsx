import React from "react";

function StravaAuth() {
  const redirectUri: string = "http://localhost:3000/stravaauth";
  const clientId: string = "12360";
  const responseType: string = "code";
  const scopes: string = encodeURIComponent("activity:read");
  const AUTH_URL: string = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&approval_prompt=auto&scope=${scopes}`;
  return (
    <div>
      <a href={AUTH_URL} target="_blank">
        AUTHORIZE
      </a>
    </div>
  );
}

/*
.appendQueryParameter("client_id", "1234321")
        .appendQueryParameter("redirect_uri", "https://www.yourapp.com")
        .appendQueryParameter("response_type", "code")
        .appendQueryParameter("approval_prompt", "auto")
        .appendQueryParameter("scope", "activity:write,read")
 */

export default StravaAuth;
