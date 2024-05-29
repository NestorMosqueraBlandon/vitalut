import { Collection, getModel } from "@vitalut/constant-definitions";
import { Patient, PatientSchemaMongo } from "@vitalut/entities";

export const getHistoryById = async (id : string ) => {
  const model = getModel<Patient>(Collection.PATIENTS, PatientSchemaMongo);
  const patient = await model.findById(id);
  return patient;
};
