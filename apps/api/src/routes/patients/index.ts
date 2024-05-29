import { RouteOptions } from "fastify";
import { getAllPatientsRoute } from "./list";
import { createPatientsRoute } from "./create";
import { deletePatientsRoute } from "./delete";

export const patientsRoutes: RouteOptions[] = [
    getAllPatientsRoute,
    createPatientsRoute,
    deletePatientsRoute
]