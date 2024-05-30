import { getAppointments } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const useAppointments = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["appointments"],
        queryFn: getAppointments
    });

    return { isLoading, count: data?.count, appointments: data?.items }
}