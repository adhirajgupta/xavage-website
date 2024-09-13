import React from "react";

const LandingS2 = () => {
  const eventData = [
    {
      title: "Deal or No Deal"
    },
    {
      title: "The More the Money"
    },
    {
      title: "Ready? Set? Sell!"
    },
    {
      title: "Trojans Tank"
    },
    {
      title: "The Courting"
    },
    {
      title: "Conquer the Crisis"
    },
    {
        title: "Stakeholders' Showdown"
      },
  ];
  return (
    <div className="landing-s2-events" id="landing-s2-section">

      <div className="landing-s2-top" id="landing-s2-top">
        <p className="primary-subheading" id="landing-s2-subheading"></p>
        <h1 className="primary-heading" id="landing-s2-heading">
          Our Events
        </h1>
        <p className="primary-text" id="landing-s2-text">
          For seeing more details, visit the events page or click on an event
        </p>
        <button className="secondary-button" id="landing-s2-button">
          Visit Events Page
          {/* <FiArrowRight />{" "} */}
        </button>
      </div>

      <div className="section2-bottom" id="landing-s2-bottom">
        {eventData.map((data) => (
          <div class="infocard-text-container" id="s2-event-card">
            <a href="#" id="s2-event-card-title">{data.title}</a>
            {/* <h2 id="s2-event-card-desc">{data.text}</h2>  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingS2;
