import { Schema } from 'mongoose';
import * as crypto from "crypto";
import { StatusType } from '../../../common';
import { Task } from './task';

export const TaskSchemaMongo = new Schema<Task>({
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    status: { type: String, default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true,
});

TaskSchemaMongo.methods.toJSON = function () {
    const { _id, ...user } = this.toObject();
    user.id = _id;
    return user;
};