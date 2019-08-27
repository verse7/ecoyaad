const config = require('./config');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});