import { RouteOptions } from "fastify";
import { getAllTasksRoute } from "./list";
import { createTasksRoute } from "./create";
import { deleteTasksRoute } from "./delete";
import { updateTasksRoute } from "./update";

export const tasksRoutes: RouteOptions[] = [
    getAllTasksRoute,
    createTasksRoute,
    deleteTasksRoute,
    updateTasksRoute
]