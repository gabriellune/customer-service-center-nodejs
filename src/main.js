require('dotenv').config()
const express = require('express');
const routes = require('./infrastructure/api/Routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});