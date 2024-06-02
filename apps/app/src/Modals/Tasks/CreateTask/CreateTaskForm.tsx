import { Patient, Task } from '@vitalut/entities';
import { Button, Field, Input, Textarea } from '@vitalut/design-system/web';
import {
  useCreateTask,
  useForm,
  usePatients,
} from '@/hooks';
import { useNavigate } from 'react-router-dom';
import styles from './Create.module.css';

const CreateTaskForm = ({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) => {
  const { patients } = usePatients();
  const { isCreating, createTask } = useCreateTask();

  const navigate = useNavigate();
  const { formState: task, handleChange } = useForm<
    Partial<Task>
  >({
    patientId: '',
    title: "",
    description: "",
    deadline: new Date(),
  });

  const submit = () => {
    createTask(task, {
      onSuccess() {
        onCloseModal?.();
        navigate('/tareas');
      },
    });
  };

  return (
    <div>
      <form >
        <div className={styles.form} >

        <Field label="Paciente">
          <select name="patientId" onChange={handleChange}>
            <option value="">Sin paciente</option>
            {patients?.map((patient: Patient) => (
              <option value={patient.id}>
                {patient.firstname} {patient.lastname}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Fecha límite">
          <Input name='deadline' onChange={handleChange} type="datetime-local" />
        </Field>

          <Field label="Prioridad">
          <select name="priority" onChange={handleChange}>
              <option value="">Seleccionar</option>
              <option value="low">Baja</option>
              <option value="medium">Medio</option>
              <option value="high">Alta</option>
              <option value="cancelled">Cancelada</option>
            </select>          </Field>
          <Field label="Estado">
            <select name="taskStatus" onChange={handleChange}>
              <option value="">Seleccionar</option>
              <option value="pending">Pendiente</option>
              <option value="completed">Completada</option>
              <option value="overdue">Atrasada</option>
              <option value="cancelled">Cancelada</option>
            </select>
          </Field>
        </div>
          <Field label='Titulo'>
            <Input name='title' onChange={handleChange} />
          </Field>

          <Field label='Descripción'>
            <Textarea name='description' onChange={handleChange} />
          </Field>
        
      </form>

      <Button
      variant='primary'
        style={{
          marginTop: 40,
          marginBottom: 20
        }}
        loading={isCreating}
        type="button"
        onClick={submit}>
        Guardar
      </Button>
    </div>
  );
};

export default CreateTaskForm;
