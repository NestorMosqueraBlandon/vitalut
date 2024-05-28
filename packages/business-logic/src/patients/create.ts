import { Collection, getModel } from "@vitalut/constant-definitions";
import { Patient, PatientSchemaMongo } from "@vitalut/entities";

export const createPatient = async (data: Partial<Patient>) => {
    const model = getModel<Patient>(Collection.PATIENTS, PatientSchemaMongo);
    const newPatient = new model(data);
    await newPatient.save();
    return newPatient;
}