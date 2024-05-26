import { RouteMethod } from "@template/constant-definitions";
import { RouteOptions } from "fastify";

//@ts-ignore
import {version} from '../../../package.json';

export const healthCheckRoute: RouteOptions = {
    method: RouteMethod.GET,
    url: '/health-check',
    handler: async () => {
        return {
            appVersion: version,
            status: 'ok',
            uptime: process.uptime(), 
        }
    }
};