import { Collection, getModel } from "@vitalut/constant-definitions";
import { Appointment, AppointmentSchemaMongo, Patient, PatientSchemaMongo, StatusType } from "@vitalut/entities";

export const getAllAppointments = async (therapistId: string) => {
    const model = getModel<Appointment>(Collection.APPOINTMENTS, AppointmentSchemaMongo);
    getModel<Patient>(Collection.PATIENTS, PatientSchemaMongo);

    const appointments = await model.find({ therapistId, status: StatusType.ACTIVE }).populate("patientId");
    
    const count = await model.find({ therapistId, status: StatusType.ACTIVE }).countDocuments();

    return {
        count, 
        items: appointments
    };
}