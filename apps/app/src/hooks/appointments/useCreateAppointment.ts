import { createAppointment } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateAppointment = () => {
    const queryClient = useQueryClient();

    const { isPending: isCreating, mutate } = useMutation({
        mutationFn: createAppointment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["appointments"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isCreating, createAppointment: mutate }
}