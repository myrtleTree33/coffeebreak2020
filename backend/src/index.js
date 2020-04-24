import express from 'express';
import { logger, loggingMiddleware } from './utils/logger';

import sampleController from './controllers/sampleController';
import { initDb } from './utils/db';

const { PORT, MONGO_URI } = process.env;

const app = express();

initDb(MONGO_URI);

// middleware
app.use(loggingMiddleware());

// controllers
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/sample', sampleController);

// start app
app.listen(PORT, () => logger.info(`Example app listening on port ${PORT}!`));
