import { getUser } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const useUser = () => {
    const { isLoading, data: user } = useQuery({
        queryKey: ["users"],
        queryFn: getUser
    });

    return { isLoading, user }
}