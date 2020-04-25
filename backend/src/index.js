import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { logger, loggingMiddleware } from './utils/logger';

import sampleController from './controllers/sampleController';
import userController from './controllers/userController';
import therapistController from './controllers/therapistController';

import { initDb } from './utils/db';

const { PORT, MONGO_URI } = process.env;

const corsOptions = {
  origin: ['http://localhost:3000', 'http://68.183.230.167:3000'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

// initDb(MONGO_URI);

// middleware
app.use(loggingMiddleware());
app.use(bodyParser.json());
app.use(cors(corsOptions));

// controllers
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/sample', sampleController);
app.use('/user', userController);
app.use('/therapist', therapistController);

// start app
app.listen(PORT, () => logger.info(`Example app listening on port ${PORT}!`));
