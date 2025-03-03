// Import necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create the Express app
const app = express();

// Apply middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection setup (Adjust the URI as needed)
mongoose.connect('mongodb://localhost/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

// Define a port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
