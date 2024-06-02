import { Schema } from 'mongoose';
import * as crypto from "crypto";
import { StatusType } from '../../../common';
import { Patient } from './patient';

export const PatientSchemaMongo = new Schema<Patient>({
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    firstname: { type: String},
    lastname: { type: String},
    dateOfBirth: { type: Date },
    therapistId: { type: String, ref: "users" },
    gender: { type: String},
    contactInfo: {
        email: { type: String},
        phone: { type: String},
        address: { type: String},
        city: { type: String},
        state: { type: String},
        country: { type: String},
        zipCode: { type: String},
    },
    medicalHistory: {
        allergies:[{ type: String}],
        medications: [{ type: String}],
        medicalConditions: [{ type: String}],
        surgeries: [{ type: String}],
        familyHistory: { type: String},
    },
    emergencyContact: {
        name: { type: String},
        relationship: { type: String},
        phone: { type: String},
    },
    personalHistory: {
        hobbies:[{ type: String}],
        lifestyle: { type: String},
        significantEvents: [{ type: String}],
    },
    socialHistory: {
        socialActivities:[{ type: String}],
        supportNetwork: { type: String},
        socialConcerns: [{ type: String}],
    },
    sexualHistory: {
        sexualOrientation: { type: String}, // Orientación sexual del paciente
        sexualActivity: { type: String},// Actividad sexual del paciente
        sexualConcerns: { type: String},// Preocupaciones sexuales del paciente
    },
    educationalHistory: {
        highestLevel: { type: String }, // Nivel educativo más alto alcanzado
        currentStatus: { type: String }, // Estado educativo actual
        schoolHistory: [{
          schoolName: { type: String }, // Nombre de la escuela
          yearsAttended: { type: String }, // Años asistidos
        }]
      },
      workHistory: {
        currentOccupation: { type: String }, // Nivel educativo más alto alcanzado
        employmentStatus: { type: String }, // Estado educativo actual
        jobHistory: [{
            companyName: { type: String }, // Nombre de la escuela
            jobTitle: { type: String }, // Años asistidos
            yearsWorked: { type: String }, // Años asistidos
        }]
      },
    status: { type: String, default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true,
});

PatientSchemaMongo.methods.toJSON = function () {
    const { _id, ...patient } = this.toObject();
    patient.id = _id;
    return patient;
};