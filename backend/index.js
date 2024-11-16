// Import required modules
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Initialize express app
const app = express();
const PORT = 4000;

// Apply middleware
app.use(cors());  // Add CORS middleware
app.use(express.json());  // Add JSON parsing middleware

// Apply routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});