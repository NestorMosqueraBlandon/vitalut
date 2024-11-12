import {
  FastifyInstance,
  RouteOptions,
} from 'fastify';
import { healthCheckRoute } from './health-check';
import { loginRoute } from './auth/login';
import { getUserByIdRoute } from './users/get-by-id';
import { patientsRoutes } from './patients';
import { historiesRoutes } from './histories';
import { appointmentsRoutes } from './appointments';
import { tasksRoutes } from './tasks';
import { loginWithEmailRoute } from './auth/login-with-email';


const routes: RouteOptions[] = [
  healthCheckRoute,
  loginRoute,
  loginWithEmailRoute,
  getUserByIdRoute,
  ...patientsRoutes,
  ...historiesRoutes,
  ...appointmentsRoutes,
  ...tasksRoutes
];

export const registerRoutes = (fastify: FastifyInstance) => {
  routes.map((route) => {
    fastify.route(route);
  });
};