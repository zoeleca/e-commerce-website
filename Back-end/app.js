const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bonjour Ada !');
});

app.listen(port, () => {
  console.log(`Application exemple écoutant sur le port ${port}`);
});