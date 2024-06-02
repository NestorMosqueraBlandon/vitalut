import { Base } from '../../../common';

export interface Patient extends Base {
  id: string; // Identificador único del paciente
  firstname: string; // Nombre del paciente
  lastname: string; // Apellido del paciente
  therapistId: string;
  dateOfBirth: Date; // Fecha de nacimiento del paciente
  gender: 'male' | 'female' | 'other'; // Género del paciente
  contactInfo: {
    email: string; // Correo electrónico del paciente
    phone: string; // Número de teléfono del paciente
    address: string; // Dirección del paciente
    city: string; // Ciudad del paciente
    state: string; // Estado o provincia del paciente
    country: string; // País del paciente
    zipCode: string; // Código postal del paciente
  };
  medicalHistory: {
    allergies?: string[]; // Lista de alergias del paciente
    medications?: string[]; // Lista de medicamentos que toma el paciente
    medicalConditions?: string[]; // Lista de condiciones médicas del paciente
    surgeries?: string[]; // Lista de cirugías previas del paciente
    familyHistory?: string; // Antecedentes médicos familiares del paciente
  };
  personalHistory?: {
    hobbies?: string[]; // Lista de hobbies del paciente
    lifestyle?: string; // Descripción del estilo de vida del paciente
    significantEvents?: string[]; // Eventos significativos en la vida del paciente
  };
  educationalHistory: {
    highestLevel?: string; // Nivel educativo más alto alcanzado
    currentStatus?: string; // Estado educativo actual
    schoolHistory?: {
      schoolName: string; // Nombre de la escuela
      yearsAttended: string; // Años asistidos
    }[];
  };
  workHistory: {
    currentOccupation: string; // Ocupación actual del paciente
    employmentStatus: string; // Estado laboral actual
    jobHistory: {
      companyName: string; // Nombre de la empresa
      jobTitle: string; // Título del trabajo
      yearsWorked: string; // Años trabajados
    }[];
  };
  socialHistory?: {
    socialActivities?: string[]; // Actividades sociales del paciente
    supportNetwork?: string; // Descripción de la red de apoyo del paciente
    socialConcerns?: string; // Preocupaciones sociales del paciente
  };
  sexualHistory: {
    sexualOrientation: string; // Orientación sexual del paciente
    sexualActivity: string; // Actividad sexual del paciente
    sexualConcerns: string; // Preocupaciones sexuales del paciente
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}
