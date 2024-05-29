import { getPatients } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const usePatients = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["patients"],
        queryFn: getPatients
    });

    return { isLoading, count: data?.count, patients: data?.items }
}