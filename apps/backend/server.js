const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(4000, (req, res) => {
  console.log('listening on port 4000');
});
