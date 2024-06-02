import { createTask } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    const { isPending: isCreating, mutate } = useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isCreating, createTask: mutate }
}