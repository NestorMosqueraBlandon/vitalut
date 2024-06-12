import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import styles from "./Login.module.css"
import { useLogin } from '@/hooks';
import { Loader } from '@vitalut/design-system/web';


const Login = () => {
  const { isLogging, login } = useLogin();

    const handleGoogleSuccess = async (
        credentialsResponse: CredentialResponse,
      ) => {
        if (credentialsResponse.credential) {
          const token_id = credentialsResponse.credential;
          login(token_id)
        }
      };
      const handleGoogleError = () => {
      };

  return (
    <div className={styles.container}>
        <div className={styles.blue}>

        </div>
        <div className={styles.content}>

         <h2 className={styles.title}>Inicia sesión en Vitalut</h2>
        <div className={styles.social}>
          {isLogging ? (
            <Loader />
          ): (
            <GoogleLogin
            width="600px"
            useOneTap
            onError={handleGoogleError}
            onSuccess={handleGoogleSuccess}
          />
          )}
        
        </div>
        </div>

    </div>
  )
}

export default Login