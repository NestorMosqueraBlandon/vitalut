import { Collection, getModel } from "@vitalut/constant-definitions";
import { Appointment, AppointmentSchemaMongo } from "@vitalut/entities";

export const deleteAppointment = async (id: string) => {
    const model = getModel<Appointment>(Collection.APPOINTMENTS, AppointmentSchemaMongo);
    const deleted = await model.findByIdAndDelete(id);
    return deleted;
}