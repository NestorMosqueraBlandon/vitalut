import styles from "./Login.module.css"
import { useLogin } from '@/hooks';
import { Loader } from '@vitalut/design-system/web';
import { useLoginWithEmail } from '@/hooks/auth/useLoginWithEmail';


const Login = () => {
  const { isLogging } = useLogin();
  const { login: loginWithEmail } = useLoginWithEmail();


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
            <button onClick={() => loginWithEmail(
              'yunsde26@gmail.com',
            )} >Login</button>
          )}
        
        </div>
        </div>

    </div>
  )
}

export default Login