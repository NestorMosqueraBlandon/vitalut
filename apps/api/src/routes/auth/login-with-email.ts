import { userLoginWithEmail } from "@vitalut/business-logic";
import { RouteOptions } from "fastify";

export const loginWithEmailRoute: RouteOptions = {
    method: 'POST',
    url: '/auth/login/email',
    handler: async (request, reply) => {
        const { body } = request as { body: { email: string, name: string } }; 
        const loginInfo = await userLoginWithEmail({ email: body.email, name: body.name });
        reply.status(200).send(loginInfo.token);
    }
};