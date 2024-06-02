import { getAllTasks, verifyToken } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';

export const getAllTasksRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/tasks',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = user;

      const tasks = await getAllTasks(id);
      reply.status(200).send(tasks);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);