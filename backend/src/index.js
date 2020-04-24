import express from 'express';
import bodyParser from 'body-parser';

import { logger, loggingMiddleware } from './utils/logger';

import sampleController from './controllers/sampleController';
import userController from './controllers/userController';

import { initDb } from './utils/db';

const { PORT, MONGO_URI } = process.env;

const app = express();

initDb(MONGO_URI);

// middleware
app.use(loggingMiddleware());
app.use(bodyParser.json());

// controllers
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/sample', sampleController);
app.use('/user', userController);

// start app
app.listen(PORT, () => logger.info(`Example app listening on port ${PORT}!`));
