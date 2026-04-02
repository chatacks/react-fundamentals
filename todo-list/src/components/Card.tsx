import { TrashIcon } from '@phosphor-icons/react';
import styles from './Card.module.css';
import { Input } from './Input';
import { Button } from './Button';

export function Card() {
  return (
    <div className={styles.wrapper}>
      <label className={styles.checkbox}>
        <Input
          className={styles.inputCard}
          type="checkbox"
        />
        <span className={styles.custom}></span>
      </label>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a quam eligendi doloremque incidunt ullam perspiciatis placeat illum blanditiis voluptatum.</p>

      <Button className={styles.buttonCard}>
        <TrashIcon size={24}/>
      </Button>
    </div>
  );
}