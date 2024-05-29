import { Schema } from 'mongoose';
import * as crypto from "crypto";
import { StatusType } from '../../../common';
import { Appointment } from './appointment';

export const AppointmentSchemaMongo = new Schema<Appointment>({
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    patientId: { type: String, ref: "patients"},
    therapistId: { type: String, ref: "users"},
    dateTime: { type: Date },
    duration: { type: Number},
    location: { type: String },
    notes: [{  type: String }],
    appointmentStatus: { type: String },
    status: { type: String, default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true,
});

AppointmentSchemaMongo.methods.toJSON = function () {
    const { _id, ...user } = this.toObject();
    user.id = _id;
    return user;
};