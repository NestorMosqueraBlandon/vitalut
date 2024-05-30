import { vitalutApi } from "@/api";
import { Patient } from "@vitalut/entities";

export const getPatients = async () => {
    const { data } = await vitalutApi.get("/patients");
    return data;
}

export const createPatient = async (patient: Partial<Patient>) => {
    const { data } = await vitalutApi.post("/patients", patient);
    return data;
}


export const deletePatient = async (id: string) => {
    const { data } = await vitalutApi.delete(`/patients/${id}`);
    return data;
}