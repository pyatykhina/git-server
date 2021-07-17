import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';

import api from './controllers/api';
import ping from './controllers/ping';

const apiRouter = new (express.Router as any)();

apiRouter.get('/settings', api.getSettings);
apiRouter.post('/settings', api.setSettings);
apiRouter.get('/builds', api.getAllBuilds);
apiRouter.post('/builds/:commitHash', api.addBuildToQueue);
apiRouter.get('/builds/:buildId', api.getBuild);
apiRouter.get('/builds/:buildId/logs', api.getLogs);

const mainRouter = new (express.Router as any)();

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

export { apiRouter, mainRouter };
