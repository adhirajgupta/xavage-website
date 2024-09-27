import React from "react";
import { Link, useNavigate } from "react-router-dom";
import eventData from "../../../eventData";

export const LandingS2 = () => {
  const navigate = useNavigate()
  return (
    <div className="landing-s2-events" id="landing-s2-section">

      <div className="landing-s2-top" id="landing-s2-top">
        <p className="primary-subheading" id="landing-s2-subheading"></p>
        <h1 className="primary-heading" id="landing-s2-heading">
          Our Events
        </h1>
        <p className="primary-text" id="landing-s2-text">
          For more details, visit the events page or click on an event
        </p>
        <button className="secondary-button" id="landing-s2-button" onClick={()=>navigate('/events')}>
          Visit Events Page
          {/* <FiArrowRight />{" "} */}
        </button>
      </div>

      <div className="section2-bottom" id="landing-s2-bottom">
        {eventData.map((data) => (
          <div key={data.id} className="infocard-text-container" id="s2-event-card" style={{
                            backgroundImage: `url(${data.bgimage})`,  //bkg images for xavage event cards from xavage23 website
                            backgroundSize: 'contain',             
                            backgroundPosition: 'center',          
                            backgroundRepeat: 'no-repeat',    
                        }}>
            <Link to={`/event/${data.id}`} id="s2-event-card-title">
              {data.title}
            </Link>
            <h3 class='event-subheading' id='event-card-tagline-subheading'>{data.tagline}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingS2;
