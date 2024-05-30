import { vitalutApi } from "@/api";
import { User } from '@vitalut/entities';

export const getUser = async (): Promise<User> => {
    const { data } = await vitalutApi.get("/user");
    return data;
}