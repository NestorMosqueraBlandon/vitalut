import { Schema } from 'mongoose';
import * as crypto from "crypto";
import { StatusType } from '../../../common';
import { History } from './history';

export const HistorySchemaMongo = new Schema<History>({
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    patientId: { type: String, ref: "patients"},
    therapistId: { type: String, ref: "users"},
    description: { type: String },
    reason: { type: String },
    entries: [{ 
        date: { type: Date },
        type: { type: String },
        details: { type: String },
        assessmentData: {
            assessmentType: { type: String },
            results: { type: String }
        },
        sessionData: {
            topicsDiscussed: [{ type: String }],
            exercisesPerformed: [{ type: String }]
        },
        progressNoteData: {
            summary: { type: String },
            treatmentPlan: { type: String }
        },
        medicationData: [{
            medicationName: { type: String },
            dosage: { type: String },
            frequency: { type: String },
            notes: { type: String }
        }]

    }],
    status: { type: String, default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true,
});

HistorySchemaMongo.methods.toJSON = function () {
    const { _id, ...user } = this.toObject();
    user.id = _id;
    return user;
};