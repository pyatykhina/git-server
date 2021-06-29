require('dotenv').config();
const http = require('http');
const express = require('express');
const { PORT } = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const { apiRouter, mainRouter } = require('./routers');

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
