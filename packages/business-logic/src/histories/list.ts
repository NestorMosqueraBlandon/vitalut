import { Collection, getModel } from "@vitalut/constant-definitions";
import { History, HistorySchemaMongo, Patient, PatientSchemaMongo, StatusType } from "@vitalut/entities";

export const getAllHistories = async (therapistId: string) => {
    const model = getModel<History>(Collection.HISTORIES, HistorySchemaMongo);
    getModel<Patient>(Collection.PATIENTS, PatientSchemaMongo);
    
    const histories = await model.find({ therapistId, status: StatusType.ACTIVE }).populate("patientId");
    
    const count = await model.find({ therapistId, status: StatusType.ACTIVE }).countDocuments();

    return {
        count, 
        items: histories
    };
}