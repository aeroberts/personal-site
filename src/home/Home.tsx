import { Button } from "@mui/material";
import React from "react";

import "./Home.css";

interface LinkerTreeLink {
  name: string;
  link: string;
}

const LinkerLinks: LinkerTreeLink[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aerobs",
  },
  {
    name: "Github",
    link: "https://github.com/aeroberts",
  },
  {
    name: "Strava",
    link: "https://www.strava.com/athletes/15802442",
  },
];

function Home() {
  return (
    <div className="home">
      <img src="banff-pp.png" alt="" />
      <h1>Where to Find me:</h1>
      <ul>
        {LinkerLinks.map((linkerLink) => (
          <li>
            <Button
              className="linker-button"
              href={linkerLink.link}
              target="_blank"
              variant="outlined"
            >
              {linkerLink.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
