import { getTasks } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const useTasks = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks
    });

    return { isLoading, count: data?.count, tasks: data?.items }
}