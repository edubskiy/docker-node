const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hi there');
})

app.listen(7001, () => {
  console.log("Listening on port 7001")
})