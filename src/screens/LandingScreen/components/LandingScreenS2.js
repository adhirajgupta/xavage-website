import React from "react";

const LandingS2 = () => {
  const eventData = [
    {
      title: "Event 1: Syndicalism",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis purus sit amet magna gravida, vel tincidunt tortor suscipit. Duis ut gravida neque, ac posuere enim. Proin consectetur risus vel orci commodo, non tincidunt urna gravida. Morbi sed ex vel arcu suscipit eleifend. Integer tempor lorem id lorem elementum, id feugiat ipsum sodales. Donec ut neque vel felis feugiat maximus ac ut ligula. Vestibulum id nisi eu lorem tincidunt auctor. Nam facilisis ante id ligula rhoncus, non egestas libero vestibulum. Suspendisse potenti. Sed tincidunt erat at ante maximus, vel volutpat lectus facilisis.",
    },
    {
      title: "Event 2: Explicatus",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis purus sit amet magna gravida, vel tincidunt tortor suscipit. Duis ut gravida neque, ac posuere enim. Proin consectetur risus vel orci commodo, non tincidunt urna gravida. Morbi sed ex vel arcu suscipit eleifend. Integer tempor lorem id lorem elementum, id feugiat ipsum sodales. Donec ut neque vel felis feugiat maximus ac ut ligula. Vestibulum id nisi eu lorem tincidunt auctor. Nam facilisis ante id ligula rhoncus, non egestas libero vestibulum. Suspendisse potenti. Sed tincidunt erat at ante maximus, vel volutpat lectus facilisis.",
    },
    {
      title: "Event 3: The More the Money",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis purus sit amet magna gravida, vel tincidunt tortor suscipit. Duis ut gravida neque, ac posuere enim. Proin consectetur risus vel orci commodo, non tincidunt urna gravida. Morbi sed ex vel arcu suscipit eleifend. Integer tempor lorem id lorem elementum, id feugiat ipsum sodales. Donec ut neque vel felis feugiat maximus ac ut ligula. Vestibulum id nisi eu lorem tincidunt auctor. Nam facilisis ante id ligula rhoncus, non egestas libero vestibulum. Suspendisse potenti. Sed tincidunt erat at ante maximus, vel volutpat lectus facilisis.",
    },
    {
      title: "Event 4: The Courting",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis purus sit amet magna gravida, vel tincidunt tortor suscipit. Duis ut gravida neque, ac posuere enim. Proin consectetur risus vel orci commodo, non tincidunt urna gravida. Morbi sed ex vel arcu suscipit eleifend. Integer tempor lorem id lorem elementum, id feugiat ipsum sodales. Donec ut neque vel felis feugiat maximus ac ut ligula. Vestibulum id nisi eu lorem tincidunt auctor. Nam facilisis ante id ligula rhoncus, non egestas libero vestibulum. Suspendisse potenti. Sed tincidunt erat at ante maximus, vel volutpat lectus facilisis.",
    },
    {
      title: "Event 5: Deal or No Deal",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis purus sit amet magna gravida, vel tincidunt tortor suscipit. Duis ut gravida neque, ac posuere enim. Proin consectetur risus vel orci commodo, non tincidunt urna gravida. Morbi sed ex vel arcu suscipit eleifend. Integer tempor lorem id lorem elementum, id feugiat ipsum sodales. Donec ut neque vel felis feugiat maximus ac ut ligula. Vestibulum id nisi eu lorem tincidunt auctor. Nam facilisis ante id ligula rhoncus, non egestas libero vestibulum. Suspendisse potenti. Sed tincidunt erat at ante maximus, vel volutpat lectus facilisis.",
    },
    {
      title: "Event 6: Trojan’s Trap",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis purus sit amet magna gravida, vel tincidunt tortor suscipit. Duis ut gravida neque, ac posuere enim. Proin consectetur risus vel orci commodo, non tincidunt urna gravida. Morbi sed ex vel arcu suscipit eleifend. Integer tempor lorem id lorem elementum, id feugiat ipsum sodales. Donec ut neque vel felis feugiat maximus ac ut ligula. Vestibulum id nisi eu lorem tincidunt auctor. Nam facilisis ante id ligula rhoncus, non egestas libero vestibulum. Suspendisse potenti. Sed tincidunt erat at ante maximus, vel volutpat lectus facilisis."
    },
    {
        title: "Event 7: Ready Set Sell",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis purus sit amet magna gravida, vel tincidunt tortor suscipit. Duis ut gravida neque, ac posuere enim. Proin consectetur risus vel orci commodo, non tincidunt urna gravida. Morbi sed ex vel arcu suscipit eleifend. Integer tempor lorem id lorem elementum, id feugiat ipsum sodales. Donec ut neque vel felis feugiat maximus ac ut ligula. Vestibulum id nisi eu lorem tincidunt auctor. Nam facilisis ante id ligula rhoncus, non egestas libero vestibulum. Suspendisse potenti. Sed tincidunt erat at ante maximus, vel volutpat lectus facilisis.",
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
            <h2 id="s2-event-card-desc">{data.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingS2;
