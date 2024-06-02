import { Collection, getModel } from "@vitalut/constant-definitions";
import { StatusType, Task, TaskSchemaMongo } from "@vitalut/entities";

export const deleteTask = async (id: string) => {
    const model = getModel<Task>(Collection.TASKS, TaskSchemaMongo);
    const deleted = await model.findByIdAndUpdate(id, { status: StatusType.DELETED });
    return deleted;
}