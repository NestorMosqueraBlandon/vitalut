import { userLoginGoogle } from "@vitalut/business-logic";
import { RouteOptions } from "fastify";

export const loginRoute: RouteOptions = {
    method: 'POST',
    url: '/auth/login',
    handler: async (request, reply) => {
        const { body } = request as { body: { id: string } }; 
        const log = await userLoginGoogle({ id: body.id});
        reply.status(200).send(log.token);
    }
};