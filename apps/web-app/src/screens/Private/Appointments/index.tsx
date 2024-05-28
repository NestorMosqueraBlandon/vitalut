import { Calendar, Plus } from 'react-feather';
import styles from './Appointments.module.css';
import { useState } from 'react';
import { Button } from '@vitalut/design-system/web';

const appointments = [
  {
    title: 'William Larsen',
    date: '8:00 am',
    time: 10,
    type: "Revisión",

  },
  {
    title: 'Robin Smith',
    date: '8:10 am',
    time: 50,
    type: "Revisión",
  },
];

const Appointments = () => {
  const [selectedTask, setSelectedTask] = useState(null)

  return (
    <div className={styles.content}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <Calendar size={16} color="#9333EA" /> Citas 
        </div>
        <div className={styles.sidebar_info}>
          <div className={styles.dates}>
            <p>8:00</p>
            <p>8:30</p>
            <p>9:00</p>
            <p>9:30</p>
            <p>10:00</p>
            <p>10:30</p>
            <p>11:00</p>
            <p>11:30</p>
            <p>12:00</p>
            <p>12:30</p>
          </div>
          <div className={styles.list}>
            {appointments.map((appointment) => (
              <div
                style={{
                  height: `${minutesToRem(appointment.time)}rem`,
                }}
                className={styles.appointment}
                onClick={() => setSelectedTask(appointment)}
                >
                <span className={styles.indicator} />
                <div>
                  <h4>{appointment.title}</h4>
                  <div className={styles.tag}>
                    <span
                      style={{
                        backgroundColor: "#2CD4BF",
                      }}></span>
                    <p>{appointment.type}</p>
                  </div>
                </div>
                <p className={styles.date}>{appointment.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedTask == null ? (
          <div className={styles.empty_container} >
            <div className={styles.empty_card} >
              <Calendar size={35} color="#9333EA" />
              <h3>¡Tiene {appointments.length} citas!</h3>
              <p></p>
              <Button><Plus size={16} color='rgba(0,0,0,0.5)' /> Nueva Cita</Button>
            </div>
          </div>
      ): (
        <div>
        <div className={styles.details_header} >
          <h4>{selectedTask.date}</h4>
          <span>{selectedTask.type}</span>
        </div>
      <div className={styles.container_details} >
          <div className={styles.details} >
            <div className={styles.info_header} >
            <span className={styles.initial} >BS</span>
              <h3>{selectedTask.title}</h3>
              <div className={styles.info} >
                <span className={styles.gender} >Ella/su</span>
                <span className={styles.gender} >Mujer</span>
                <span className={styles.age} >34</span>
              </div>
            </div>
              <div className={styles.notes} >
                <h4>Notas</h4>
              </div>

              <div className={styles.note_box}>
                <input type="text" placeholder='Deja una nota' />
                <Button>Enviar</Button>
              </div>

              <div className={styles.footer} >
                <Button>Completar</Button>
              </div>
          </div>
      </div>   
      </div>

      )}
    </div>
  );
};

export default Appointments;

function minutesToRem(minutes: number) {
  const remPerMinute = 15 / 30; // La equivalencia de 1 minuto en rem
  return minutes * remPerMinute;
}
