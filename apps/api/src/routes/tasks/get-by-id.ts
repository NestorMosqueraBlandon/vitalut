import { verifyToken, getTaskById } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';

export const getTaskByIdRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/tasks/:id',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = request.params as { id: string };

      const task = await getTaskById(id);
      reply.status(200).send(task);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);