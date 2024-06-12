import { generateReport } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useGenerateReport = () => {
    const queryClient = useQueryClient();

    const { isPending: isGenerating, mutate } = useMutation({
        mutationFn: generateReport,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["histories/report"]
            })
        },
        onError: (err) => console.log(err)
    });

    return { isGenerating, generateReport: mutate }
}