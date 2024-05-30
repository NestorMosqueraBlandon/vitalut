import { Calendar, Plus } from 'react-feather';
import styles from './Appointments.module.css';
import { useState } from 'react';
import { Button, Loader } from '@vitalut/design-system/web';
import { useAppointments, useUpdateAppointment } from '@/hooks';
import { Appointment, AppointmentWithPatient } from '@vitalut/entities';

const Appointments = () => {
  const [selectedTask, setSelectedTask] = useState<AppointmentWithPatient | null>(null)
  const { isLoading, appointments } = useAppointments();
  const { isUpdating, updateAppointment } = useUpdateAppointment();
  const [note, setNote] = useState("");

  const submitNote = () => {
    let notes = []
    if(selectedTask?.notes){
      notes = [...selectedTask.notes, note]
    }else{
      notes = [note]
    }

    const appoint = { ...selectedTask, patientId: selectedTask?.patientId } as unknown as Appointment
    const appointment = { ...appoint, notes } ;
    updateAppointment(appointment, {
      onSuccess(data) {
        setSelectedTask((prev) => ({
          ...prev,
          notes: data.notes,
        }) as AppointmentWithPatient);
        setNote("")
      }
    })
  }
  if(isLoading)
    return <Loader />


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
            {appointments.map((appointment: AppointmentWithPatient) => (
              <div
                style={{
                  height: `${minutesToRem(appointment.duration)}rem`,
                }}
                className={styles.appointment}
                onClick={() => setSelectedTask(appointment)}
                >
                <span className={styles.indicator} />
                <div>
                  <h4>{appointment.patientId.firstname} {appointment.patientId.lastname}</h4>
                  <div className={styles.tag}>
                    <span
                      style={{
                        backgroundColor: "#2CD4BF",
                      }}></span>
                    <p>{appointment.location}</p>
                  </div>
                </div>
                <p className={styles.date}>{extractTime(appointment?.dateTime?.toString())}</p>
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
          <h4>{formatDateTime(selectedTask.dateTime.toString())}</h4>
          <span>{selectedTask.location}</span>
        </div>
      <div className={styles.container_details} >
          <div className={styles.details} >
            <div className={styles.info_header} >
            <span className={styles.initial} >{selectedTask?.patientId?.firstname?.charAt(0)}{selectedTask?.patientId?.lastname?.charAt(0)}</span>
              <h3>{selectedTask.patientId?.firstname} {selectedTask.patientId?.lastname}</h3>
              <div className={styles.info} >
                <span className={styles.gender} >{translateGender(selectedTask.patientId.gender)}</span>
                <span className={styles.age} >{calculateAge(selectedTask.patientId.dateOfBirth?.toString())}</span>
              </div>
            </div>
              <div className={styles.notes} >
                <h4>Notas</h4>

                {selectedTask.notes?.map((note: string) => (
                  <p className={styles.note} >{note}</p>
                ))}
              </div>

              <div className={styles.note_box}>
                <input value={note} type="text" onChange={({target}) => setNote(target.value)} placeholder='Deja una nota' />
                <Button type='button' loading={isUpdating} onClick={submitNote}>Enviar</Button>
              </div>

              {/* <div className={styles.footer} >
                <Button>Completar</Button>
              </div> */}
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

function extractTime(datetimeLocalValue: string): string {
  // Convierte el valor a un objeto Date
  const date = new Date(datetimeLocalValue);
  
  // Extrae la hora y los minutos
  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  // Formatea la hora y los minutos para que siempre tengan dos dígitos
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
  return formattedTime;
}



function calculateAge(birthDateString?: string): number {

  if(!birthDateString)
    return 0
  
  const birthDate = new Date(birthDateString);
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  // Si el cumpleaños no ha ocurrido aún este año, resta 1 de la edad.
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
  }

  return age;
}

const genderTranslationMap: { [key: string]: string } = {
  male: 'Masculino',
  female: 'Femenino',
  other: 'Otro',
  nonbinary: 'No binario',
  genderqueer: 'Queer',
  transgender: 'Transgénero'
};

function translateGender(gender?: string): string {
  if (gender === undefined) {
      return 'Desconocido';
  }
  return genderTranslationMap[gender.toLowerCase()] || 'Desconocido';
}

function formatDateTime(datetimeLocalValue: string): string {
  // Convierte el valor a un objeto Date
  const date = new Date(datetimeLocalValue);

  // Extrae los componentes de la fecha
  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses empiezan en 0
  const year = date.getFullYear();

  // Extrae los componentes de la hora
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Formatea los componentes para que siempre tengan dos dígitos
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  // Construye la cadena con el formato deseado
  const formattedDateTime = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;

  return formattedDateTime;
}