// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route for the root path "/"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define another route for "/about"
app.get('/about', (req, res) => {
  res.send('About Us');
});

// Define another route for "/contact us"
app.get('/contact', (req, res) => {
  res.send('Contact Us');
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log("Server is running on http://localhost:${port}");
});