import winston from 'winston';
import expressWinston from 'express-winston';

const { NODE_ENV } = process.env;

const opts = {
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'App' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
};

export const logger = winston.createLogger(opts);

export const loggingMiddleware = () =>
  expressWinston.logger({
    ...opts,
    ...{
      transports: [new winston.transports.Console()],
      format: winston.format.combine(winston.format.colorize(), winston.format.json()),
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
      expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
      colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
      ignoreRoute: (req, res) => {
        return false;
      }
    }
  });

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}
