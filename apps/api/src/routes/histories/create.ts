import { verifyToken, createHistory } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';
import { History } from '@vitalut/entities';

export const createHistoriesRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/histories',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = user;

      const data = request.body as Partial<History>;
      const completeData = {...data, therapistId: id}
      const history = await createHistory(completeData);
      reply.status(201).send(history);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);