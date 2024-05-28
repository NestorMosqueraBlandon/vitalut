import { Schema } from 'mongoose';
import * as crypto from "crypto";
import { StatusType } from '../../../common';
import { Patient } from './patient';

export const PatientSchemaMongo = new Schema<Patient>({
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    name: { type: String},
    lastname: { type: String},
    photo: { type: String},
    email: { type: String},
    lastLogin: { type: String },
    status: { type: String, default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true,
});

PatientSchemaMongo.methods.toJSON = function () {
    const { _id, ...user } = this.toObject();
    user.id = _id;
    return user;
};