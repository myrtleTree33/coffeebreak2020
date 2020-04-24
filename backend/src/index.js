import express from 'express';
import { logger, loggingMiddleware } from './utils/logger';

import sampleController from './controllers/sampleController';

const { PORT } = process.env;

const app = express();

// middleware
app.use(loggingMiddleware());

// controllers
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/sample', sampleController);

// start app
app.listen(PORT, () => logger.info(`Example app listening on port ${PORT}!`));
