import { createPatient} from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreatePatient = () => {
    const queryClient = useQueryClient();

    const { isPending: isCreating, mutate } = useMutation({
        mutationFn: createPatient,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["patients"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isCreating, createPatient: mutate }
}