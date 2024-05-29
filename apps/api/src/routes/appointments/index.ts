import { RouteOptions } from "fastify";
import { getAllAppointmentsRoute } from "./list";
import { createAppointmentsRoute } from "./create";
import { deleteAppointmentsRoute } from "./delete";
import { updateAppointmentsRoute } from "./update";

export const appointmentsRoutes: RouteOptions[] = [
    getAllAppointmentsRoute,
    createAppointmentsRoute,
    deleteAppointmentsRoute,
    updateAppointmentsRoute
]