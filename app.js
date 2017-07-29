const express = require('express');
const app = express();
app.get('/', (req,res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Startup app on port 3000');
});