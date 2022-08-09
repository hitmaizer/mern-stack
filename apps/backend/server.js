require('dotenv').config();
const express = require('express');

//express app
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the app' });
});

//listen for requests
app.listen(process.env.PORT, (req, res) => {
  console.log('listening on port 4000');
});
