const express = require('express');

//express app
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the app' });
});

//listen for requests
app.listen(4000, (req, res) => {
  console.log('listening on port 4000');
});
