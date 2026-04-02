import { PlusCircleIcon } from '@phosphor-icons/react';
import styles from './NewTask.module.css';
import { Input } from './Input';
import { Button } from './Button';
import { Tasks } from './Tasks';

export function NewTask() {
  return (
    <>
      <div className={styles.wrapper}>
        <Input
          type="text"
          name="newTask"
        />
        <Button>
          Criar <PlusCircleIcon size={18}/>
        </Button>
      </div>
      <Tasks />
    </>
  );
}