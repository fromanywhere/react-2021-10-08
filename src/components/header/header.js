import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';
import CurrencySwitch from '../currency-switch';

const Header = () => {
  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Igor')}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2>{name}</h2>
      <div className={styles.currency}>
        <CurrencySwitch />
      </div>
    </header>
  );
};

export default Header;
