import { loginWithEmailApi } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLoginWithEmail = () => {
    const navigate = useNavigate();

    const { isPending: isLogging, mutate: login } = useMutation({
        mutationFn: loginWithEmailApi,
        onSuccess(){
            navigate("/citas", { replace: true })
        }
    });

    return { login, isLogging }
}