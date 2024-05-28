import { Base } from "../../../common";

export interface Task extends Base {
    id: string; // Identificador único de la tarea
    patientId: string; // ID del paciente al que se asigna la tarea
    therapistId: string; // ID del psicólogo que asigna la tarea
    title: string; // Título de la tarea
    description?: string; // Descripción detallada de la tarea (opcional)
    deadline: Date; // Fecha límite para completar la tarea
    priority: 'low' | 'medium' | 'high'; // Prioridad de la tarea (baja, media, alta)
    taskStatus: 'pending' | 'completed' | 'overdue' | 'cancelled'; 
}