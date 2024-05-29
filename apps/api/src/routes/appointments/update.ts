import { verifyToken, updateAppointment } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';
import { Appointment } from '@vitalut/entities';

export const updateAppointmentsRoute = makeFastifyRoute(
  RouteMethod.PATCH,
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
      const patient = await updateAppointment(completeData);
      reply.status(201).send(patient);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);