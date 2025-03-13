import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // URL du backend
});

export const getEvents = () => api.get('/events');
export const createEvent = (eventData) => api.post('/events', eventData);

export default api;