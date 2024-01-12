import Box from "@mui/material/Box";
import React from "react";

import "./About.css";

function About() {
  return (
    <Box>
      <h1>About Me!</h1>
      <p>
        Hi! My name is Alex Roberts. I'm a Computer Scientist, cyclist, and avid
        fantasy book enjoyer.
      </p>

      <h2>Front End Developer</h2>
      <div className="flex-section">
        <p>
          My passion is building user interfaces, especially web, and working on
          projects that I can see. There is nothing more satistfying than
          translating an intracte design onto a web page and making it
          interactive. In my career I've worked on many different projects
          ranging from Software as a Medical Device features shipping to
          millions of users to small rapidly developed prototypes launching to
          hundreds. The frameworks I have the most experience with are{" "}
          <strong>Ember.JS</strong> and <strong>Angular</strong>.
        </p>
        <div>
          <img src="typescriptjavascript.jpeg" />
        </div>
      </div>
      <h2>Cyclist and Triathlete</h2>
      <p>
        There's nothing better a long ride with friends. Most weekends you can
        find me around Marin and the rest of North Bay riding around with my
        buddies or training for the upteenth race I've signed up for this year.
      </p>

      <h2>Reader</h2>
      <p>
        Brandon Sanderson, Robert Jordan, James Islington, Terry Pratchett, and
        Neil Gaiman are some of my favorite Authors (among many others). In 2023
        I spent <strong>641 hours 52 minutes</strong> or{" "}
        <strong>~26.75 days</strong> listening to audiobooks, and finished 10s
        of physical books as well. Check out my{" "}
        <a href="https://www.goodreads.com/review/list/121795500?ref=nav_mybooks">
          goodreads
        </a>{" "}
        to check out what's up next!
      </p>
    </Box>
  );
}

export default About;
