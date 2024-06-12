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

export const generateReport = async () => {
    const response = await vitalutApi.get(`/histories/report`,  {
        responseType: 'blob', 
      });

      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Historia_Clinica.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
}