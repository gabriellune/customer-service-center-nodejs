require('dotenv').config()
const express = require('express');
const routes = require('./infrastructure/api/Routes');
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./documentation/swagger.json')

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});