import { Base } from '../../../common';
import { Patient } from '../../patients';

export interface HistoryBase extends Base {
  patientId: string | Patient;
  therapistId: string;
  description: string;
  entries: ClinicalEntry[]; // Entradas de la historia clínica
}

export interface History extends HistoryBase {
  patientId: string
}
export interface HistoryWithPatient extends HistoryBase {
  patientId: Patient
}

export interface ClinicalEntry {
  date: Date; // Fecha y hora de la entrada
  type: "" | 'assessment' | 'session' | 'progressNote' | 'medication'; // Tipo de entrada (evaluación, sesión, nota de progreso, medicación, etc.)
  details: string; // Detalles o notas de la entrada

  // Campos adicionales según el tipo de entrada
  assessmentData?: AssessmentData; // Datos de evaluación (por ejemplo, resultados de pruebas psicométricas)
  sessionData?: SessionData; // Datos de sesión (por ejemplo, temas discutidos, ejercicios realizados)
  progressNoteData?: ProgressNoteData; // Datos de nota de progreso (por ejemplo, resumen de la sesión, plan de tratamiento)
  medicationData?: MedicationData[]; // Datos de medicación (por ejemplo, nombre del medicamento, dosis, frecuencia)
}

interface AssessmentData {
  assessmentType: string; // Tipo de evaluación (por ejemplo, ansiedad, depresión, habilidades sociales)
  results: string; // Resultados de la evaluación (estructura específica según el tipo de evaluación)
}

interface SessionData {
  topicsDiscussed: string[]; // Lista de temas discutidos durante la sesión
  exercisesPerformed: string[]; // Lista de ejercicios realizados durante la sesión
}

interface ProgressNoteData {
  summary: string; // Resumen de la sesión y progreso del paciente
  treatmentPlan: string; // Plan de tratamiento recomendado para el paciente
}

interface MedicationData {
  medicationName: string; // Nombre del medicamento
  dosage: string; // Dosificación del medicamento
  frequency: string; // Frecuencia de administración del medicamento
  notes: string; // Notas adicionales sobre la medicación
}
