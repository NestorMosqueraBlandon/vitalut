import { verifyToken, deleteHistory } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';

export const deleteHistoriesRoute = makeFastifyRoute(
  RouteMethod.DELETE,
  '/histories/:id',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;

      const { id } = request.params as { id: string };
      const history = await deleteHistory(id);
      reply.status(200).send(history);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);