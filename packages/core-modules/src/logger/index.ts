import pino from 'pino';

export const logger = pino({
  redact: ['MONGO'],
  level: 'debug',
  trasnport: {
    target: 'pino-pretty'
  }
});