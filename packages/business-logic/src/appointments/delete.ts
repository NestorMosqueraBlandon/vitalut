import { Collection, getModel } from "@vitalut/constant-definitions";
import { Appointment, AppointmentSchemaMongo, StatusType } from "@vitalut/entities";

export const deleteAppointment = async (id: string) => {
    const model = getModel<Appointment>(Collection.APPOINTMENTS, AppointmentSchemaMongo);
    const deleted = await model.findByIdAndUpdate(id, { status: StatusType.DELETED });
    return deleted;
}