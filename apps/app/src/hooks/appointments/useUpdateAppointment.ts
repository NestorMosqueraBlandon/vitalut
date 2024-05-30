import { updateAppointment } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useUpdateAppointment = () => {
    const queryClient = useQueryClient();

    const { isPending: isUpdating, mutate } = useMutation({
        mutationFn: updateAppointment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["appointments"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isUpdating, updateAppointment: mutate }
}