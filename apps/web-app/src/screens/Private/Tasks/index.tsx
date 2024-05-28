import { useState } from 'react';
import styles from './Tasks.module.css';
import { Calendar, List, Plus } from 'react-feather';
import { Button } from '@vitalut/design-system/web';

const tasks = [
  {
    title: 'Disability forms',
    date: 'Abril 04',
    type: {
      color: '#2CD4BF',
      name: 'Papelería',
    },
  },
];

const Tasks = () => {

  const [selectedTask, setSelectedTask] = useState(null)
  return (
    <div className={styles.content}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <List size={16} color="#3B82F6" /> Tareas
        </div>
        <div className={styles.list}>
          {tasks.map((task) => (
            <div className={styles.task} onClick={() => setSelectedTask(task)}>
              <div>
                <h4>{task.title}</h4>
                <p className={styles.date}>
                  <Calendar size={12} /> {task.date}
                </p>
              </div>
              <div className={styles.tag}>
                <span
                  style={{
                    backgroundColor: task.type.color,
                  }}></span>
                <p>{task.type.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedTask == null ? (
          <div className={styles.empty_container} >
            <div className={styles.empty_card} >
              <List size={35} color="#3B82F6" />
              <h3>¡Tiene {tasks.length} tareas para hoy!</h3>
              <p></p>
              <Button><Plus size={16} color='rgba(0,0,0,0.5)' /> Nueva Tarea</Button>
            </div>
          </div>
      ): (
      <div className={styles.container_details} >
          <div className={styles.details} >
              <h3>{selectedTask.title}</h3>
              <div className={styles.info} >
                <p>Relacionado con:</p>
                <h4><span>BS</span> Brian Stone</h4>
                <span className={styles.gender} >Mujer</span>
                <span className={styles.age} >34</span>
              </div>

              <div className={styles.note_box}>
                <input type="text" placeholder='Deja un comentario' />
                <Button>Enviar</Button>
              </div>

              <div className={styles.footer} >
                <Button>Completar</Button>
              </div>
          </div>
      </div>    
      )}
      <div>
      </div>
    </div>
  );
};

export default Tasks;
