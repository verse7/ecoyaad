const app = require('./app');

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});