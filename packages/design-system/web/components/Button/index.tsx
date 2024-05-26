import React from 'react';
import styles from "./Button.module.css"

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

const Button = ({ children, loading, ...rest }: Props) => {
  return <button className={styles.button} {...rest}>{loading ? <div></div> : <>{ children }</>}</button>;
};

export default Button;
