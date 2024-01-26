import React, { useContext, useEffect, useState } from "react";

import { StravaContext } from "../contexts/StravaContext";
import "./Strava.css";

function ActivityList() {
  const { stravaToken } = useContext(StravaContext);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function getActivityList() {
      return fetch("https://www.strava.com/api/v3/athlete/activities", {
        headers: {
          authorization: `Bearer ${stravaToken?.token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((activities) => {
          setActivityList(activities);
        });
    }

    //getActivityList();

    return () => {
      ignore = true;
    };
  }, [stravaToken]);
  return <>Hello {activityList}</>;
}

export default ActivityList;
