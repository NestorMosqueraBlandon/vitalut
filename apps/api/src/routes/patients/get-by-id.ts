import { verifyToken, getUserById } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';

export const getUserByIdRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/user',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      console.log(user)
      if (!user) return;
      const { id } = user;
      const userInfo = await getUserById(id);
      reply.status(200).send(userInfo);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);