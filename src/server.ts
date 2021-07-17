require('dotenv').config();
import http from 'http';
import express from 'express';
import { PORT } from './config';
import bodyParser from 'body-parser';
import cors from 'cors';
import { apiRouter, mainRouter } from './routers';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.use('/', mainRouter);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
