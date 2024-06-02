import { Collection, getModel } from "@vitalut/constant-definitions";
import { Task, TaskSchemaMongo } from "@vitalut/entities";

export const updateTask = async (data: Partial<Task>) => {
    const model = getModel<Task>(Collection.TASKS, TaskSchemaMongo);
    await model.findByIdAndUpdate(data.id, data);

    const task = await model.findById(data.id);
    return task;
}