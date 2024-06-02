import { Collection, getModel } from "@vitalut/constant-definitions";
import { Patient, PatientSchemaMongo, StatusType } from "@vitalut/entities";

export const deletePatient = async (id: string) => {
    const model = getModel<Patient>(Collection.PATIENTS, PatientSchemaMongo);
    const deleted = await model.findByIdAndUpdate(id, { status: StatusType.DELETED });
    return deleted;
}