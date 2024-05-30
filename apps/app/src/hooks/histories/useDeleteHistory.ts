import { deleteHistory } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteHistory = () => {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate } = useMutation({
        mutationFn: deleteHistory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["histories"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isDeleting, deleteHistory: mutate }
}