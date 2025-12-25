import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  
  app.use(cors());

  // logger middleware
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      },
    }),
  );

  // health check endpoint
  app.get('/', (req, res) => {
    res.json({
      status: 'success',
      message: 'SlimMom Backend API is running!',
      timestamp: new Date().toISOString(),
    });
  });

  // API routes
  // app.use();


  // 404 handler
  app.use(notFoundHandler);

  // error handler
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${env('NODE_ENV', 'development')}`);
  });
};