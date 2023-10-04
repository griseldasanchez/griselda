const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});