// LandingPage.jsx

import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">Avanseus</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sales">Projects</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#logout">Logout</a>
          </li>
        </ul>
      </nav>
      <div className="ED">      
        <h1>Welcome Manager</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."/>
      </div>
      <div className="content">
        <p>
          A company, abbreviated as co., is a legal entity<br />
          representing an association of legal people, whether<br />
          natural, juridical or a mixture of both, with a <br />specific
          objective. Company members share a common <br />
          purpose and unite to achieve specific, declared goals.
        </p>
      </div>
      
    </div>
  );
};

export default LandingPage;
