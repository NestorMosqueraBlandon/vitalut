import { verifyToken, getAllPatients } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';

export const getAllPatientsRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/patients',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = user;

      const patients = await getAllPatients(id);
      console.log(patients)
      reply.status(200).send(patients);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);