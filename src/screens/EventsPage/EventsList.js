import React from 'react';
import EventPageHeading from './components/EventsListS1';
import EventCards from './components/EventsListS2';
import Footer from './../LandingScreen/components/LandingScreenS4';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

const Landing = () => {
  return (
    <div className="App">
        <EventPageHeading/>
        <EventCards/>
        <Footer />
    </div>
  );
};

export default Landing;