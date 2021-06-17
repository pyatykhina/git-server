const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const api = require('./controllers/api');
const ping = require('./controllers/ping');

const apiRouter = new express.Router();

apiRouter.get('/settings', api.getSettings);
apiRouter.post('/settings', api.setSettings);
apiRouter.get('/builds', api.getAllBuilds);
apiRouter.post('/builds/:commitHash', api.addBuildToQueue);
apiRouter.get('/builds/:buildId', api.getBuild);
apiRouter.get('/builds/:buildId/logs', api.getLogs);

exports.apiRouter = apiRouter;

const mainRouter = new express.Router();

mainRouter.get('/ping', ping);
mainRouter.use(
  '/',
  process.env.NODE_ENV === 'production'
    ? express.static(path.resolve(__dirname, '..', 'client', 'build'))
    : createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
      })
);

exports.mainRouter = mainRouter;