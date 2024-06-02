import { updateTask } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    const { isPending: isUpdating, mutate } = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isUpdating, updateTask: mutate }
}