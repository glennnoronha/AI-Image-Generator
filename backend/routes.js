const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

module.exports = router; 