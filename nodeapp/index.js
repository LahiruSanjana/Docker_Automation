const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', () => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
