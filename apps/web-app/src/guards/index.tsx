import { useUser } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate to="/*" replace />
)

const GuardRoute = ({privateValidation}: Props) => {
  const { isLoading, user } = useUser();

  console.log(user)

  if(isLoading) return <div>Cargando...</div>

  return user ? (
    privateValidation ? (
        PrivateValidationFragment
    ): (
        PublicValidationFragment
    )
) : (
    <Navigate replace to="/login" />
) 
}

export default GuardRoute