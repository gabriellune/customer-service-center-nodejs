import express from 'express'
import bodyParser from 'body-parser';
import 'dotenv/config'

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});