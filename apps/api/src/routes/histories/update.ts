import { verifyToken, updateHistory } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';
import { History } from '@vitalut/entities';

export const updateHistoriesRoute = makeFastifyRoute(
  RouteMethod.PATCH,
  '/histories',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;

      const data = request.body as Partial<History>;
      const history = await updateHistory(data);
      reply.status(200).send(history);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);