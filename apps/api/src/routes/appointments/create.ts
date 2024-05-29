import { verifyToken, createAppointment } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';
import { Appointment } from '@vitalut/entities';

export const createAppointmentsRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/appointments',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = user;

      const data = request.body as Partial<Appointment>;
      const completeData = {...data, therapistId: id}
      const patient = await createAppointment(completeData);
      reply.status(201).send(patient);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);