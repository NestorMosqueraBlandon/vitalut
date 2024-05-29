import { verifyToken, createPatient } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';
import { Patient } from '@vitalut/entities';

export const createPatientsRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/patients',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = user;

      const data = request.body as Partial<Patient>;
      const completeData = {...data, therapistId: id}
      const patient = await createPatient(completeData);
      reply.status(201).send(patient);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);