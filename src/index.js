import express from 'express';
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

app.get('/cases', async (request, response) =>{
  const cases = await casesService.getCases(request.query);
  response.status(200).json(cases);
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}.`);
});

let newCase =
  {details: 'мусор',
   location:{longitude: 49.457857, latitude: 32.043704},
   image_url: 'test image',
  }

// casesService.getCaseById(3).then(console.log);
// // casesService.createCase(newCase).then(console.log);
// casesService.unresolveCase(3).then(console.log);
