
import { PlusCircleIcon } from '@phosphor-icons/react';
import styles from './NewTask.module.css';
import { Input } from './Input';
import { Button } from './Button';
import { UnregisteredTasks } from './UnregisteredTasks';
import { useState } from 'react';
import { Card } from './Card';

export type UUID = ReturnType<typeof crypto.randomUUID>;
export interface TasksType {
  id: UUID;
  taskName: string;
  isFinished: boolean;
}

export function NewTask() {
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [newTask, setNewTask] = useState('');
  console.log(tasks);

  const handleNewTaskChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => setNewTask(event.target.value);

  const handleAddNewTaskClick = () => {
    setTasks(
      [
        ...tasks, {
          id: crypto.randomUUID(),
          taskName: newTask,
          isFinished: false,
        }
      ]
    );
    setNewTask('');
  };

  const finishedTask = (id: UUID, isFinishedTask: boolean) => {
    const result = tasks.map(task => {
      if (task.id === id) {
        return {id: task.id, taskName: task.taskName, isFinished: isFinishedTask};
      }
      return task;
    });
    setTasks(result);
  };

  const deleteTask = (id: UUID) => {
    const resultWithoutDeletedTask = tasks.filter((task) => task.id !== id);
    setTasks(resultWithoutDeletedTask);
  };

  const renderFinishedTasksCount = () => {
    let sumTasksFinished = 0;
    
    for (const task of tasks) {
      if (task.isFinished === true) {
        sumTasksFinished += 1;
      }
    }
    return sumTasksFinished;
  };

  const isInputEmpty = newTask.length === 0;

  return (
    <>
      <div className={styles.wrapper}>
        <Input
          type="text"
          name="newTask"
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <Button
          onClick={handleAddNewTaskClick}
          disabled={isInputEmpty}
        >
          Criar <PlusCircleIcon size={18}/>
        </Button>
      </div>

      <section className={styles.wrapperTasks}>

        <div className={styles.tasksCounter}>
          <div>
            <span className={tasks.length > 0 ? styles.visible : styles.hidden}>Tarefas criadas</span>
            <span className={styles.badge}>{tasks.length}</span>
          </div>

          <div>
            <span className={tasks.length > 0 ? styles.visible : styles.hidden}>Concluidas</span>
            <span className={styles.badge}>{`${renderFinishedTasksCount()} de ${tasks.length}`}</span>
          </div>
        </div>

        <div className={styles.separator}>
          {tasks.length > 0 ? 
            (
              tasks.map(task => (
                <Card
                  key={task.id}
                  id={task.id}
                  taskName={task.taskName}
                  isFinished={task.isFinished}
                  onFinishedTask={finishedTask}
                  onDeleteTask={deleteTask}
                />
              ))
            ) : 
            (
              <UnregisteredTasks />
            )
          }
        </div>
      </section>
    </>
  );
}