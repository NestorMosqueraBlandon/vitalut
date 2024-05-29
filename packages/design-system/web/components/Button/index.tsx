import styles from "./Button.module.css"
import Loader from '../Loader';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'primary'
    | 'link'
    | ''
    | 'outline'
    | 'secondary'
    | 'cancel'
    | 'third'
    | 'danger';
  children?: React.ReactNode;
  loading?: boolean;
}

const Button = ({ children, variant="default", loading, ...rest }: Props) => {
  return <button       className={`${styles.button} ${styles[variant]} ${rest.className}`}
  {...rest}>{loading ? <Loader small />: <>{ children }</>}</button>;
};

export default Button;
