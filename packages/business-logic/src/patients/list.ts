import { Collection, getModel } from "@vitalut/constant-definitions";
import { Patient, PatientSchemaMongo } from "@vitalut/entities";

export const getAllPatients = async (therapistId: string) => {
    const model = getModel<Patient>(Collection.PATIENTS, PatientSchemaMongo);
    const patients = await model.find({ therapistId });
    return patients;
}