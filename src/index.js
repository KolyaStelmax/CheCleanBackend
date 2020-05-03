import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { getCases } from './queries.js';

dotenv.config();

const app = express();

app.get('/cases', getCases);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}.`);
});
//
