import { deleteTask } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate } = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isDeleting, deleteTask: mutate }
}