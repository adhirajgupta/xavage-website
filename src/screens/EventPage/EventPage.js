import React from 'react';
import { useParams } from 'react-router-dom';
import eventData from './../../eventData';
import EventPageStyle from './EventPageStyle.css';

const EventPage = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const event = eventData.find((e) => e.id === parseInt(id));

  if (!event) {
    return <h1>Event Not Found</h1>;
  }

  return (
    <div id="event-page-container">
      <div id='event-heading' style={{ backgroundImage: `url(${event.bgimage})` }}>
        <h1 id="event-card-title">{event.title}</h1>
        <h2 id='event-card-tagline'>{event.tagline}</h2>
      </div>
        <div id="event-card-1" class='eventpage-card'>
                <h1>Description</h1>
                <p id="event-card-description">{event.description}</p>
        </div>

        <div id='event-card-2' class='eventpage-card'>
                <h1>Maximum number of teams</h1>
                <p id="event-card-rules">{event.maximum_teams}</p>
        </div>

        <div id='event-card-3' class='eventpage-card'>
                <h1>Participants per teams</h1>
                <p id="event-card-rules">{event.participants_per_team}</p>
        </div>

        <div id='event-card-4' class='eventpage-card'>
                <h1>Rules</h1>
                <p id="event-card-rules">{event.rules}</p>
        </div>

        <div id="event-card-5" class='eventpage-card'>
                <h1>Judging Criteria</h1>
                <p id="event-card-prizes">{event.judging_criteria}</p>
        </div>
      
    </div>
  );
};

export default EventPage;