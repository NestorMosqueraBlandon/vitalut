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


export const loginWithEmailApi = async(email: string) => {
    const { data } = await vitalutApi.post("/auth/login/email", { email }, {
        headers: {
            "api-key": "1234"
        }
    });

    localStorage.setItem('token', data);
    return data;
}