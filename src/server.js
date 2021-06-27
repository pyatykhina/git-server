const http = require('http');
const express = require('express');
const { PORT } = require('./config');
var bodyParser = require('body-parser');
const { apiRouter, mainRouter } = require('./routers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.use('/', mainRouter);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
