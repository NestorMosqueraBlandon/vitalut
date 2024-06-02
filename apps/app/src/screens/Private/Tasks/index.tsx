import { useState } from 'react';
import styles from './Tasks.module.css';
import { Button, Field, Input, Loader, Textarea } from '@vitalut/design-system/web';
import { useTasks, useUpdateTask } from '@/hooks';
import { Task, TaskWithPatient } from '@vitalut/entities';
import { List } from 'react-feather';

const Tasks = () => {
  const [selectedTask, setSelectedTask] = useState<TaskWithPatient | null>(null);
  const [note, setNote] = useState<string>("");

  const { isLoading, count, tasks } = useTasks();
  const { isUpdating, updateTask } = useUpdateTask();

  const submitNote = () => {
    let notes = []
    if(selectedTask?.notes){
      notes = [...selectedTask.notes, { text: note, date: new Date() }]
    }else{
      notes = [{text: note, date: new Date()}]
    }

    const appoint = { ...selectedTask, patientId: selectedTask?.patientId } as unknown as Task
    const task = { ...appoint, notes } ;
    updateTask(task, {
      onSuccess(data) {
        setSelectedTask((prev) => ({
          ...prev,
          notes: data.notes,
        }) as TaskWithPatient);
        setNote("")
      }
    })
  }
  if(isLoading){
    return <Loader />
  }

  console.log(selectedTask)

  return (
    <div className={styles.content}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <List size={16} color="#3B82F6" /> Tareas {count}
        </div>
        <div className={styles.list}>
          {tasks.map((task: TaskWithPatient) => (
            <div  className={styles.task} onClick={() => setSelectedTask(task)}>
              <div>
                <h4>{task.title}</h4>
                <p className={styles.date}>
                  {/* <Calendar size={12} /> {task.date} */}
                </p>
              </div>
              <div className={styles.tag}>
                <span
                  style={{
                    backgroundColor: "#2CD4BF",
                  }}></span>
                  <p>{translateStatus(task.priority)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedTask == null ? (
          <div className={styles.empty_container} >
            <div className={styles.empty_card} >
              {/* <List size={35} color="#3B82F6" /> */}
              <h3>¡Tiene {tasks.length} tareas!</h3>
              <p></p>
              {/* <Button><Plus size={16} color='rgba(0,0,0,0.5)' /> Nueva Tarea</Button> */}
            </div>
          </div>
      ): (
      <div className={styles.container_details} >
          <div className={styles.details} >
              {/* <h3>{selectedTask.title}</h3> */}
              <div className={styles.info} >
                <p>Relacionado con:</p>
                <h4 className={styles.name}><span className={styles.initial} >{selectedTask.patientId.firstname.charAt(0)}{selectedTask.patientId.lastname.charAt(0)}</span> {selectedTask.patientId.firstname} {selectedTask.patientId.lastname} </h4>
                <span className={styles.gender} >{translateGender(selectedTask.patientId.gender)}</span>
                <span className={styles.age} >{calculateAge(selectedTask.patientId.dateOfBirth.toString())}</span>
              </div>

              <Field label='Titulo'>
                <Input defaultValue={selectedTask.title}  />
              </Field>


              <Field label='Descripción'>
                <Textarea defaultValue={selectedTask.description} />
              </Field>

              <div className={styles.notes} >
                <h4>Notas</h4>

                {selectedTask.notes?.map((note: { text: string, date: Date }) => (
                  <p className={styles.note} >{note.text} <span className={styles.date} >{note.date.toString().substring(0, 10)}</span> </p>
                ))}
              </div>

              <div className={styles.note_box}>
                <input  value={note} type="text" onChange={({target}) => setNote(target.value)} placeholder='Deja una nota' />
                <Button variant='primary' loading={isUpdating} onClick={submitNote} >Enviar</Button>
              </div>
{/* 
              <div className={styles.footer} >
                <Button>Completar</Button>
              </div> */}
          </div>
      </div>    
      )}
      <div>
      </div>
    </div>
  );
};

export default Tasks;

const statusTranslationMap: { [key: string]: string } = {
  low: 'Baja',
  medium: 'Media',
  high: 'Alta',
};

function translateStatus(gender?: string): string {
  if (gender === undefined) {
      return 'Sin Prioridad';
  }
  return statusTranslationMap[gender.toLowerCase()] || 'Sin Prioridad';
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
