import { Schema } from 'mongoose';
import * as crypto from "crypto";
import { StatusType } from '../../../common';
import { Task } from './task';

export const TaskSchemaMongo = new Schema<Task>({
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    patientId: { type: String, ref: "patients" },
    therapistId: { type: String, ref: "users" },
    title: { type: String },
    description: { type: String },
    deadline: { type: Date },
    priority: { type: String },
    taskStatus: { type: String },
    notes: [{
        text: { type: String },
        date: { type: Date, default: new Date() }
    }],
    status: { type: String, default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true,
});

TaskSchemaMongo.methods.toJSON = function () {
    const { _id, ...task } = this.toObject();
    task.id = _id;
    return task;
};