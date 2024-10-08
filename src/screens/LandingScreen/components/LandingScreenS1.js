import { Typography } from "@mui/material";
import React from "react";

const LandingS1 = () => {
  return (
    <div class="container" id="landing-s1-container">
      <div class="container" id="landing-s1-inner-container">
        {/* <div class="img-container" id="landing-s1-logo-div">
                <img src="/src/screens/LandingScreen/logo-placeholder-image.png" alt="xavage-logo"/>
            </div> */}

        <div class="registration-container" id="landing-s1-registration-div">
          <h1 id="xavage-heading">XAVAGE 2024</h1>
          <h1 id="edition-heading">10th Edition</h1>
                    

        </div>
      </div>
                  <div style={{marginTop:-80}}></div>

                    <Typography sx={{fontFamily:'Rosella-Solid',marginBottom:2}}>24th October</Typography>
                    <Typography sx={{fontFamily:'Rosella-Solid'}}>THE INTERNATIONAL SCHOOL BANGALORE</Typography>
      <button class="primary-button" id="registration-button" onClick={()=>window.open('https://forms.office.com/r/wvubmman1A','_blank')}>
        Register Now!
      </button>
    </div>
  );
};

export default LandingS1;
