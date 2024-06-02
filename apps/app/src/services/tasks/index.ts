import { vitalutApi } from "@/api";
import { Task } from "@vitalut/entities";

export const getTasks = async () => {
    const { data } = await vitalutApi.get("/tasks");
    return data;
}

export const createTask = async (task: Partial<Task>) => {
    const { data } = await vitalutApi.post("/tasks", task);
    return data;
}

export const updateTask = async (task: Partial<Task>) => {
    const { data } = await vitalutApi.patch("/tasks", task);
    return data;
}

export const deleteTask = async (id: string) => {
    const { data } = await vitalutApi.delete(`/tasks/${id}`);
    return data;
}