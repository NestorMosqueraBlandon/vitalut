import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { registerRoutes } from '../routes';

const { PORT, HOST, MONGODB_URL } = process.env;

const corsOptions = {
  origin: '*',
};

const main = () => {
  const server = fastify();

  server.register(fastifyCors, corsOptions);

  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: 'api/v1' },
  );

  server.listen({ port: Number(PORT), host: HOST }, (error, address) => {
    if (error) {
      server.log.error(error);
      process.exit(1);
    }
    server.log.info(`Backend App is running at ${address}`);
    server.log.info('Press CTRL-c to stop');
  });
}

void main();