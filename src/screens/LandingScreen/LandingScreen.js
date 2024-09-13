import React from 'react';

import LandingS1 from "./components/LandingScreenS1";
import LandingS2 from "./components/LandingScreenS2"
import LandingS3 from "./components/LandingScreenS3";
import LandingS4 from "./components/LandingScreenS4";


import './LandingScreenStyling/LandingScreenS1Style.css';
import './LandingScreenStyling/LandingScreenS2Style.css';
import './LandingScreenStyling/LandingScreenS3Style.css';
import './LandingScreenStyling/LandingScreenS4Style.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

const Landing = () => {
  return (
    <div className="App">
        <LandingS1/>
        <LandingS2/>
        <LandingS3/>
        <LandingS4/>
    </div>
  );
};

export default Landing;