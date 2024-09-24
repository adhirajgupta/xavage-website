import React from 'react';

import Footer from './../LandingScreen/components/LandingScreenS4';
import CauseS1 from "./components/CauseScreenS1";
import CauseS2 from "./components/CauseScreenS2"
// import LandingS3 from "./components/LandingScreenS3";
// import LandingS4 from "./components/LandingScreenS4";


import './CauseScreenStyling/CauseScreenS1Style.css';
import './CauseScreenStyling/CauseScreenS2Style.css';
// import './LandingScreenStyling/LandingScreenS3Style.css';
// import './LandingScreenStyling/LandingScreenS4Style.css';
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

const Cause = () => {
  return (
    <div>
        <CauseS1/>
        <CauseS2/>
        <Footer/>
    </div>
  );
};

export default Cause;