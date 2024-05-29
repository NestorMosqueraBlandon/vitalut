import { verifyToken, getAllAppointments } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';

export const getAllAppointmentsRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/appointments',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;
      const { id } = user;

      const appointments = await getAllAppointments(id);
      console.log(appointments)
      reply.status(200).send(appointments);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);