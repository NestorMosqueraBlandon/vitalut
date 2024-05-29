import { verifyToken, deleteAppointment } from '@vitalut/business-logic';
import { RouteMethod, makeFastifyRoute } from '@vitalut/constant-definitions';

export const deleteAppointmentsRoute = makeFastifyRoute(
  RouteMethod.DELETE,
  '/appointments/:id',
  verifyToken,
  async (request, reply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };

      if (!user) return;

      const { id } = request.params as { id: string };
      const patient = await deleteAppointment(id);
      reply.status(200).send(patient);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);