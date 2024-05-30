import { useUser } from '@/hooks';
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { user } = useUser();
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <p>{transformPathname(pathname)}</p>
      <div className={styles.profile}>
        <picture>
          <span className={styles.badge}></span>
          <img
            src={user?.photo}
            alt={user?.name}
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
