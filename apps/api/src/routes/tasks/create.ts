import { verifyToken, createTask } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';
import { Task } from '@vitalut/entities';

export const createTasksRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/tasks',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = user;

      const data = request.body as Partial<Task>;
      const completeData = {...data, therapistId: id}
      const task = await createTask(completeData);
      reply.status(201).send(task);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);