import { TrashIcon } from '@phosphor-icons/react';
import styles from './Card.module.css';
import { Input } from './Input';
import { Button } from './Button';
import type { UUID } from './NewTask';

interface CardProps {
  id: UUID;
  taskName: string;
  isFinished: boolean;
  onFinishedTask: (id: UUID, isFinishedTask: boolean) => void;
  onDeleteTask: (id: UUID) => void;
}

export function Card({id, taskName, isFinished, onFinishedTask, onDeleteTask }: CardProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.checkbox}>
        <Input
          className={styles.inputCard}
          type="checkbox"
          id={id}
          value={taskName}
          checked={isFinished}
          onChange={(event) => onFinishedTask(id, event.target.checked)}
        />
        <span className={styles.custom}></span>
      </label>
      
      <p>{taskName}</p>

      <Button
        className={styles.buttonCard}
        onClick={() => onDeleteTask(id)}
      >
        <TrashIcon size={24}/>
      </Button>
    </div>
  );
}