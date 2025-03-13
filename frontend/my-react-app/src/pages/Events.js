import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Gestion des événements</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Events;