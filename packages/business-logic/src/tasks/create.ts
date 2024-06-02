import { Collection, getModel } from "@vitalut/constant-definitions";
import { Task, TaskSchemaMongo } from "@vitalut/entities";

export const createTask = async (data: Partial<Task>) => {
    const model = getModel<Task>(Collection.TASKS, TaskSchemaMongo);
    const newTask = new model(data);
    await newTask.save();
    return newTask;
}