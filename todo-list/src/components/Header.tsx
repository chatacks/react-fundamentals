import styles from './Header.module.css';
import rocketImage from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img
          src={rocketImage}
          alt="Imagem de foguete"
        />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  ); 
}