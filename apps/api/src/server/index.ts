import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { registerRoutes } from '../routes';
import { verify } from '@template/business-logic';
import { logger } from "@template/core-modules";

const { PORT, HOST } = process.env;

const corsOptions = {
  origin: '*',
};

const main = () => {
  const server = fastify({
    logger
  });

  server.register(fastifyCors, corsOptions);
  server.addHook('preValidation', verify);

  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: 'api/v1' },
  );

  server.listen({ port: Number(PORT), host: HOST }, (error, address) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    console.info(`Backend App is running at ${address}`);
    console.info('Press CTRL-c to stop');
  });
}

void main();