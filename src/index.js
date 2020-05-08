import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { casesService } from './services/index.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/', (request, response) => {
  response.json({ info: 'CheClean' });
});

app.get('/cases', async (request, response) => {
  const cases = await casesService.getCases(request.query);
  response.status(200).json(cases);
});

app.get('/cases/:id', async (request, response) => {
  const caseById = await casesService.getCaseById(+request.params.id);
  response.status(200).json(caseById);
});

app.post('/cases', async (request, response) => {
  const createdCase = await casesService.createCase(request.body);
  response.status(200).json(createdCase);
});

app.patch('/cases/:id/resolve', async (request, response) => {
  const resolveCase = await casesService.resolveCase(+request.params.id);
  response.status(200).json(resolveCase);
});

app.patch('/cases/:id/unresolve', async (request, response) => {
  const unresolveCase = await casesService.unresolveCase(+request.params.id);
  response.status(200).json(unresolveCase);
});

app.use((err, request, response, next) => {
  console.error(err);
  response.status(500).json({ errorMessage: err.message });
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}.`);
});
