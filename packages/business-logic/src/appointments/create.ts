import { Collection, getModel } from "@vitalut/constant-definitions";
import { Appointment, AppointmentSchemaMongo } from "@vitalut/entities";

export const createAppointment = async (data: Partial<Appointment>) => {
    const model = getModel<Appointment>(Collection.APPOINTMENTS, AppointmentSchemaMongo);
    const newAppointment = new model(data);
    await newAppointment.save();
    return newAppointment;
}