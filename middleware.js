const express = require('express');


const app = express();

// Define a route for the root path "/"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to Homepage');
  });

// Define another route for "/about"
app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/product', (req, res) => {
  res.send('Welcome to Online Shop');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to Contact');
    res.send('Email:210305105446@paruluniversity.ac.in');
  });  

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log("Server is running on http://localhost:${port}");
});