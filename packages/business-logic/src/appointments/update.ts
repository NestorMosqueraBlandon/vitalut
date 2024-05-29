import { Collection, getModel } from "@vitalut/constant-definitions";
import { Appointment, AppointmentSchemaMongo } from "@vitalut/entities";

export const updateAppointment = async (data: Partial<Appointment>) => {
    const model = getModel<Appointment>(Collection.APPOINTMENTS, AppointmentSchemaMongo);
    await model.findByIdAndUpdate(data.id, data);

    const appoint = await model.findById(data.id);
    return appoint;
}