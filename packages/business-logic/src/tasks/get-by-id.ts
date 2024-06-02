import { Collection, getModel } from "@vitalut/constant-definitions";
import { Task, TaskSchemaMongo } from "@vitalut/entities";

export const getTaskById = async (id : string ) => {
  const model = getModel<Task>(Collection.TASKS, TaskSchemaMongo);
  const task = await model.findById(id);
  return task;
};
