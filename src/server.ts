// /* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './config';
import app from './app';
// import { errorLogger, } from './shared/logger';
import { Server } from 'http';
import { logger } from './shared/logger';

// synchronous error handel
process.on('uncaughtException', error => {
  logger.info(error);
  process.exit(1);
});

let server: Server;

// database connected
async function DataBase() {
  try {
    await mongoose.connect(config.databaser_url as string);
    logger.info('📚 Database connected | All Ok');
    server = app.listen(config.port, () => {
      logger.info(`Run Time listening on port ${config.port}`);
    });
  } catch (error) {
    logger.info(`Database Connected fail ::`, error);
  }
  // When
  process.on('unhandledRejection', error => {
    logger.info(error);

    if (server) {
      server.close(() => {
        logger.info(error);
      });
    } else {
      process.exit(1);
    }
  });
}

DataBase();

// when server stops suddenly off notification call
process.on('SIGTERM', () => {
  logger.info('SIGTERM is Resive');
  if (server) {
    server.close();
  }
});
