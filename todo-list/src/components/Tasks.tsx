import styles from './Tasks.module.css';
import { UnregisteredTasks } from './UnregisteredTasks';

export function Tasks() {
  return (
    <section className={styles.wrapper}>

      <div className={styles.tasksCounter}>
        <div>
          <span className={styles.hidden}>Tarefas criadas</span>
          <span className={styles.badge}>0</span>
        </div>

        <div>
          <span className={styles.hidden}>Concluidas</span>
          <span className={styles.badge}>0</span>
        </div>
      </div>

      <div className={styles.separator}>
        <UnregisteredTasks />
      </div>
    </section>
  );
}