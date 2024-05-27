import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <p>{transformPathname(pathname)}</p>
      <div className={styles.profile}>
        <picture>
          <span className={styles.badge}></span>
          <img
            src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </picture>
      </div>
    </header>
  );
};
function transformPathname(pathname: string) {
  if (!pathname || pathname.length === 1) return pathname; // Return if it's empty or just '/'
  const newPath = pathname.substring(1); // Remove the leading '/'
  return newPath.charAt(0).toUpperCase() + newPath.slice(1); // Capitalize the first letter
}

export default Header;
