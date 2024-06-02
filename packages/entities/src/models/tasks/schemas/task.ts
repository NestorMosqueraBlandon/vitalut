import { Base } from "../../../common";
import { Patient } from "../../patients";

export interface TaskBase extends Base {
    id: string; // Identificador único de la tarea
    patientId: string | Patient; // ID del paciente al que se asigna la tarea
    therapistId: string; // ID del psicólogo que asigna la tarea
    title: string; // Título de la tarea
    description?: string; // Descripción detallada de la tarea (opcional)
    deadline: Date; // Fecha límite para completar la tarea
    priority: 'low' | 'medium' | 'high'; // Prioridad de la tarea (baja, media, alta)
    taskStatus: 'pending' | 'completed' | 'overdue' | 'cancelled'; 
    notes?: { 
        text: string;
        date: Date;
    }[]; 
}

export interface Task extends TaskBase {
    patientId: string; // ID del paciente al que se asigna la tarea
}

export interface TaskWithPatient extends TaskBase {
    patientId: Patient; // ID del paciente al que se asigna la tarea
}
