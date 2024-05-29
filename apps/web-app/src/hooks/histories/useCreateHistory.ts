import { createHistory } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateHistory = () => {
    const queryClient = useQueryClient();

    const { isPending: isCreating, mutate } = useMutation({
        mutationFn: createHistory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["histories"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isCreating, createHistory: mutate }
}