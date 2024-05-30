import { useUser } from '@/hooks';
import { Loader } from '@vitalut/design-system/web';
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

  if(isLoading) return <Loader />

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