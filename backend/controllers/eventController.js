const getEvents = (req, res) => {
    res.json({ message: 'Liste des événements' });
  };
  
  const createEvent = (req, res) => {
    res.json({ message: 'Événement créé' });
  };
  
  module.exports = { getEvents, createEvent };