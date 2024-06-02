import { useAppointments, useTasks, useUser } from '@/hooks';
import styles from './Home.module.css';
import { CreateAppointment } from '@/modals/Appoinetments';
import { CreatePatient } from '@/modals';
import { CreateTask } from '@/modals/Tasks';
import { Calendar, List } from 'react-feather';
import { AppointmentWithPatient, TaskWithPatient } from '@vitalut/entities';

const Home = () => {
  const { user } = useUser();
  const { count, appointments } = useAppointments();
  const { count: countTasks, tasks } = useTasks();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>
            Bienvenid@, {user?.name} {user?.lastname}
          </h2>
          <p>
            <span>{getCurrentFormattedDateDay()}</span>{' '}
            {getCurrentFormattedDate()}
          </p>
        </div>
        <div className={styles.buttons}>
          <CreateAppointment />
          <CreatePatient />
          <CreateTask />
        </div>
      </div>

      <div className={styles.grid} >
        <div>
        <div>
          <h3 className={styles.title}>
          <List color='#14B8A6' size={20} />
          Tareas <span>{countTasks}</span> 
          </h3>

          <ul className={styles.list} >
            {tasks?.map((task: TaskWithPatient) => (
              <li>{task.title}</li>
            ))}
          </ul>
        </div>
        </div>
        <div>
          <h3 className={styles.title} >
          <Calendar color='#9333EA' size={18} />
          Citas <span>{count}</span>
          </h3>

          <ul className={styles.list} >
            {appointments?.map((appointment: AppointmentWithPatient) => (
              <li>{appointment.patientId.firstname} {appointment.patientId.lastname}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function getCurrentFormattedDate() {
  // Nombres de los días de la semana y los meses en español
  const monthsOfYear = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  // Obtener la fecha actual
  const today = new Date();

  // Obtener el día de la semana, el mes y el día del mes
  const month = monthsOfYear[today.getMonth()];
  const dayOfMonth = today.getDate();

  // Formatear la fecha como "Día de la semana, Mes, Día"
  return `${month}, ${dayOfMonth}`;
}

function getCurrentFormattedDateDay() {
  // Nombres de los días de la semana y los meses en español
  const daysOfWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  // Obtener la fecha actual
  const today = new Date();

  // Obtener el día de la semana, el mes y el día del mes
  const dayOfWeek = daysOfWeek[today.getDay()];

  // Formatear la fecha como "Día de la semana, Mes, Día"
  return `${dayOfWeek}, `;
}

export default Home;
