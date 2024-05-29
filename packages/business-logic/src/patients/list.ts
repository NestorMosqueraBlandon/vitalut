import { Collection, getModel } from "@vitalut/constant-definitions";
import { Patient, PatientSchemaMongo, StatusType } from "@vitalut/entities";

export const getAllPatients = async (therapistId: string) => {
    const model = getModel<Patient>(Collection.PATIENTS, PatientSchemaMongo);
    const patients = await model.find({ therapistId, status: StatusType.ACTIVE });
    
    const count = await model.find({ therapistId, status: StatusType.ACTIVE }).countDocuments();

    return {
        count, 
        items: patients
    };
}