import axios from "axios";

export const loginApi = async(id: string) => {
    const { data } = await axios.post("https://vitalut.onrender.com/api/v1/auth/login", { id }, {
        headers: {
            "api-key": "apkcoervo34nf34f3g34"
        }
    });

    localStorage.setItem('token', data);
    return data;
}