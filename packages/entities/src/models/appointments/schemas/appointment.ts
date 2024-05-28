import { Base } from "../../../common";

export interface Appointment extends Base {
    id: string; // Identificador único de la cita
    patientId: string; // ID del paciente para el que se programó la cita
    therapistId: string; // ID del psicólogo que realizará la cita
    dateTime: Date; // Fecha y hora de la cita
    duration: number; // Duración de la cita en minutos
    location?: string; // Ubicación de la cita (por ejemplo, consultorio, teleconferencia)
    notes?: string[]; // Notas adicionales sobre la cita
    appointmentStatus: 'scheduled' | 'completed' | 'cancelled'; // Estado de la cita (programada, completada, cancelada, etc.)
}