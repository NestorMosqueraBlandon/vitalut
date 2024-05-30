import { deletePatient } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeletePatient = () => {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate } = useMutation({
        mutationFn: deletePatient,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["patients"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isDeleting, deletePatient: mutate }
}