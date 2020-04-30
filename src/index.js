const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const db = require('./queries');

app.get('/cases', db.getCases);

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
