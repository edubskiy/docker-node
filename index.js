const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('bye there');
})

app.listen(7001, () => {
  console.log("Listening on port 7001")
})