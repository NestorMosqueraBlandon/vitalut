import { verifyToken, getAllHistories } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';

export const getAllHistoriesRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/histories',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = user;

      const histories = await getAllHistories(id);
      reply.status(200).send(histories);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);