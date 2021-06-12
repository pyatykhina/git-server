const http = require('http');
const express = require('express');
const { PORT } = require('./config');
const { apiRouter, mainRouter } = require('./routers');

const app = express();

app.use('/api', apiRouter);

app.use('/', mainRouter);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
