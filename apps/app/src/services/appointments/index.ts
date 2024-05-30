import { vitalutApi } from "@/api";
import { Appointment } from "@vitalut/entities";

export const getAppointments = async () => {
    const { data } = await vitalutApi.get("/appointments");
    return data;
}

export const createAppointment = async (appointment: Partial<Appointment>) => {
    const { data } = await vitalutApi.post("/appointments", appointment);
    return data;
}


export const updateAppointment = async (appointment: Partial<Appointment>) => {
    const { data } = await vitalutApi.patch("/appointments", appointment);
    return data;
}

export const deleteAppointment = async (id: string) => {
    const { data } = await vitalutApi.delete(`/appointments/${id}`);
    return data;
}