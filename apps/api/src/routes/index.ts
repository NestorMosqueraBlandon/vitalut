import {
  FastifyInstance,
  RouteOptions,
} from 'fastify';
import { healthCheckRoute } from './health-check';
import { loginRoute } from './auth/login';
import { getUserByIdRoute } from './users/get-by-id';

const routes: RouteOptions[] = [
  healthCheckRoute,
  loginRoute,
  getUserByIdRoute
];

export const registerRoutes = (fastify: FastifyInstance) => {
  routes.map((route) => {
    fastify.route(route);
  });
};