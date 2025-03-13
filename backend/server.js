const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route de test
app.use('/api/events', eventRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});