import * as jwt from 'jsonwebtoken';
import { FastifyRequest, FastifyReply } from 'fastify';

const { API_KEY, JWT_SECRET } = process.env;


interface FastifyRequestUser extends FastifyRequest {
    user?: string ;
}


export const verify = (request:FastifyRequest, reply: FastifyReply, done: () => void) => {
    const apiKey = request.headers['api-key'];
    const isHttps = true;
    
    if(!isHttps) return reply.code(400).send('Bad Request: The request must be made over HTTPS'); 
    
    if(!apiKey) return reply.code(401).send('Unauthorized: API key is missing');
    
    const validApiKey = apiKey == API_KEY!;
    if(!validApiKey) return reply.code(401).send('Unauthorized: Invalid API key');
    
    done();
}


export const verifyToken = async (request: FastifyRequestUser, reply: FastifyReply) => {
    const authHeader = request.headers.authorization;
    
    if(!authHeader) return reply.code(401).send('Unauthorized: Authorization header is missing');
    
    const token = authHeader.split(' ')[1];
    
    try{
        const decodedToken = await jwt.verify(token!, JWT_SECRET!);
        request.user = decodedToken as string;
        return decodedToken;
    }catch(err){
        return reply.status(401).send('Invalid token')
    }
}