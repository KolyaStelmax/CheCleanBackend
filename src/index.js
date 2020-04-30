const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
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

app.listen(port, () => {
 console.log(`Server started on port ${port}.`);
});
