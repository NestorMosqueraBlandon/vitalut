import { vitalutApi } from "@/api";

export const loginApi = async(id: string) => {
    const { data } = await vitalutApi.post("/auth/login", { id }, {
        headers: {
            "api-key": "apkcoervo34nf34f3g34"
        }
    });

    localStorage.setItem('token', data);
    return data;
}