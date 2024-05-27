import styles from './Tasks.module.css';
import {
  Calendar,
  List,
} from 'react-feather';

const tasks = [
  {
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  }
]

const Tasks = () => {
  return (
      <div className={styles.content}>
        <div className={styles.sidebar} >
          <div className={styles.header}>
            <List size={16} color="#3B82F6" /> Tareas
          </div>
          <div className={styles.list}>
            {tasks.map((task) => (
              <div className={styles.task}>
                <div>
                <h4>{task.title}</h4>
                <p className={styles.date}><Calendar size={12} /> {task.date}</p>
                </div>
                <div className={styles.tag}>
                  <span style={{
                    backgroundColor: task.type.color
                  }} ></span>
                  <p>{task.type.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>

        </div>
      
      </div>
  );
};

export default Tasks;
