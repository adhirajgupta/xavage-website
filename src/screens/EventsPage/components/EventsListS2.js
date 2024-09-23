import React from "react";
import { Link } from "react-router-dom";
import eventData from '../../../eventData';

const EventsListS2 = () => {
  
  return (
    
    <div className="section2-bottom" id="landing-s2-bottom">
        {eventData.map((data) => (
          <div key={data.id} className="infocard-text-container" id="s2-event-card" style={{
                            backgroundImage: `url(${data.bgimage})`,  //bkg images for xavage event cards from xavage23 website
                            backgroundSize: 'contain',             
                            backgroundPosition: 'center',          
                            backgroundRepeat: 'no-repeat'          
                        }}>
            <Link to={`/event/${data.id}`} id="s2-event-card-title">
              {data.title}
            </Link>
            <h3 class='event-subheading' id='event-card-tagline-subheading'>{data.tagline}</h3>
          </div>
        ))}
      </div>
  );
};

export default EventsListS2;