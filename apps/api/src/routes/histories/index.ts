import { RouteOptions } from "fastify";
import { getAllHistoriesRoute } from "./list";
import { createHistoriesRoute } from "./create";
import { updateHistoriesRoute } from "./update";
import { deleteHistoriesRoute } from "./delete";

export const historiesRoutes: RouteOptions[] = [
    getAllHistoriesRoute,
    createHistoriesRoute,
    updateHistoriesRoute,
    deleteHistoriesRoute
]