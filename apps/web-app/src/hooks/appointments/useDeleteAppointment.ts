import { deleteAppointment } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteAppointment = () => {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate } = useMutation({
        mutationFn: deleteAppointment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["appointments"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isDeleting, deleteAppointment: mutate }
}