import styles from './UnregisteredTasks.module.css';
import clipboard from '../assets/clipboard.svg';

export function UnregisteredTasks() {
  return (
    <div className={styles.wrapper}>
      <img
        src={clipboard}
        alt="Ícone de prancheta"
      />

      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}