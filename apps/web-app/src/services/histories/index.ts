import { vitalutApi } from "@/api";
import { History } from "@vitalut/entities";

export const getHistories = async () => {
    const { data } = await vitalutApi.get("/histories");
    return data;
}

export const createHistory = async (history: Partial<History>) => {
    const { data } = await vitalutApi.post("/histories", history);
    return data;
}

export const deleteHistory = async (id: string) => {
    const { data } = await vitalutApi.delete(`/histories/${id}`);
    return data;
}