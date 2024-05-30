import { loginApi } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const navigate = useNavigate();

    const { isPending: isLogging, mutate: login } = useMutation({
        mutationFn: loginApi,
        onSuccess(){
            navigate("/citas", { replace: true })
        }
    });

    return { login, isLogging }
}