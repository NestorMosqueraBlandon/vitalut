import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import styles from "./Login.module.css"
import { useLogin } from '@/hooks';


const Login = () => {
  const { login } = useLogin();

    const handleGoogleSuccess = async (
        credentialsResponse: CredentialResponse,
      ) => {
        if (credentialsResponse.credential) {
          const token_id = credentialsResponse.credential;
          login(token_id)
        }
      };
      const handleGoogleError = () => {
        alert("Error")
      };

  return (
    <div className={styles.container}>
        <div className={styles.blue}>

        </div>
        <div className={styles.content}>

         <h2 className={styles.title}>Inicia sesión en Vitalut</h2>
        <div className={styles.social}>
          <GoogleLogin
            width="600px"
            useOneTap
            onError={handleGoogleError}
            onSuccess={handleGoogleSuccess}
          />
        </div>
        </div>

    </div>
  )
}

export default Login