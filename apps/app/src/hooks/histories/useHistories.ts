import { getHistories } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const useHistories = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["histories"],
        queryFn: getHistories
    });

    return { isLoading, count: data?.count, histories: data?.items }
}