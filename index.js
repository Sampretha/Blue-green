const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the microservice!');
});

app.listen(port, () => {
  console.log(`Microservice running on port ${port}`);
});
