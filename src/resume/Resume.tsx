import React from "react";

import "./Resume.css";

function Resume() {
  return (
    <object
      data="resume.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
      aria-label="Alex Roberts Resume"
    ></object>
  );
}

export default Resume;
