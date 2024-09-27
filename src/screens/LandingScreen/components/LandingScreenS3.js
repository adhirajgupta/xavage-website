import React, { useState } from "react";
import Logo1 from "./../sponsor-images/Placeholder-Logo1.png";
import NambiarBuilders from './../sponsor-images/NambiarBuilders_Logo.png';
import Sam from './../sponsor-images/SAAMTaT.png';

const sponsors = [
  {
    name: "Nambiar Builders",
    description: "Description for Sponsor 1 goes here.",
    image: NambiarBuilders,
  },
  {
    name: "SAAM Tours & Travels",
    description: "Description for Sponsor 2 goes here.",
    image: Sam,
  },
  // Add more sponsors as needed
];

const LandingS3 = () => {
  const [currentSponsor, setCurrentSponsor] = useState(0);

  const handlePrev = () => {
    setCurrentSponsor(
      currentSponsor === 0 ? sponsors.length - 1 : currentSponsor - 1
    );
  };

  const handleNext = () => {
    setCurrentSponsor(
      currentSponsor === sponsors.length - 1 ? 0 : currentSponsor + 1
    );
  };

  return (
    <div className="sponsor-carousel">
      <h1 className="sponsor-heading" id="section3-heading">Our Sponsors</h1>
      <div className="sponsor-card" id="section3-sponsor-card">
        <button className="nav-button" onClick={handlePrev}>
        &#10094;
        </button>
        <div className="sponsor-content">
        <img className="sponsor-logo" src={sponsors[currentSponsor].image} alt="Sponsor Logo" id="sponsor_image"/>
          <h2>{sponsors[currentSponsor].name}</h2>
          <p>{sponsors[currentSponsor].description}</p>
        </div>
        <button className="nav-button" onClick={handleNext}>
        &#10095;
        </button>
      </div>
    </div>
  );
};

export default LandingS3;
