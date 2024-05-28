import { Base } from "../../../common";

export interface Patient extends Base {
        id: string; // Identificador único del paciente
        firstName: string; // Nombre del paciente
        lastName: string; // Apellido del paciente
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
          allergies: string[]; // Lista de alergias del paciente
          medications: string[]; // Lista de medicamentos que toma el paciente
          medicalConditions: string[]; // Lista de condiciones médicas del paciente
          surgeries: string[]; // Lista de cirugías previas del paciente
          familyHistory: string; // Antecedentes médicos familiares del paciente
        };
        emergencyContact: {
          name: string; 
          relationship: string; 
          phone: string;
        };
}