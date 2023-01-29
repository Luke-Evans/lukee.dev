import React from "react";
import "../../src/styles/portfolio.css";

function pages() {
  return (
    <div className="Portfolio">
      <div className="Portfolio_left-gradient" />
      <div className="Portfolio_content">
        <h1 className="Portfolio_title">Luke.</h1>
        <div className="Portfolio_summary">
          <p>Hello there! My name is Luke and I'm a software Engineer.</p>
          <p>
            I'm currently working at Huel as a Senior Frontend Engineer and
            working on personal projects in my spare time.
          </p>
        </div>
        <div className="Portfolio_links">
          <div className="Portfolio_links-col">
            <p className="Portfolio_link-text">Reach me at</p>
            <a href="mailto:xlukexevansx@gmail.com">
              <p>xlukexevansx@gmail.com</p>
            </a>
          </div>
          <div className="Portfolio_links-col">
            <p className="Portfolio_link-text">Or find me here</p>
            <a href="https://www.linkedin.com/in/luke-evans-dev/">
              <p>Linkedin</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pages;
