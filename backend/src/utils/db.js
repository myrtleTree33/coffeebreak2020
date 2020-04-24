import mongoose from 'mongoose';
import { logger } from './logger';

export const initDb = mongo_uri => {
  mongoose.connect(mongo_uri, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', e => {
    logger.error('Unable to connect to DB');
    logger.error(e);
  });

  db.once('open', () => logger.info('Connected to Mongo DB instance!'));
};
