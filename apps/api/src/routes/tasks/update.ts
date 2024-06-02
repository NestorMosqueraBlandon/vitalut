import { verifyToken, updateTask } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';
import { Task } from '@vitalut/entities';

export const updateTasksRoute = makeFastifyRoute(
  RouteMethod.PATCH,
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
      const task = await updateTask(completeData);
      reply.status(201).send(task);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);