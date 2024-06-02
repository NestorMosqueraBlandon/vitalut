import { Collection, getModel } from "@vitalut/constant-definitions";
import { Patient, PatientSchemaMongo, StatusType, Task, TaskSchemaMongo } from "@vitalut/entities";

export const getAllTasks = async (therapistId: string) => {
    const model = getModel<Task>(Collection.TASKS, TaskSchemaMongo);
    getModel<Patient>(Collection.PATIENTS, PatientSchemaMongo);

    const task = await model.find({ therapistId, status: StatusType.ACTIVE }).populate("patientId");
    
    const count = await model.find({ therapistId, status: StatusType.ACTIVE }).countDocuments();

    return {
        count, 
        items: task
    };
}