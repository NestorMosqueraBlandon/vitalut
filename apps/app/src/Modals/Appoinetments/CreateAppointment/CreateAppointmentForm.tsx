import { Appointment, Patient } from '@vitalut/entities';
import { Button, Field, Input } from '@vitalut/design-system/web';
import {
  useCreateAppointment,
  useForm,
  usePatients,
} from '@/hooks';
import { useNavigate } from 'react-router-dom';
import styles from './Create.module.css';

const CreateAppoitmentForm = ({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) => {
  const { patients } = usePatients();
  const { isCreating, createAppointment } = useCreateAppointment();

  const navigate = useNavigate();
  const { formState: appointment, handleChange } = useForm<
    Partial<Appointment>
  >({
    patientId: '',
    dateTime: new Date(),
    duration: 0,
    location: '',
    appointmentStatus: 'scheduled',
  });

  const submit = () => {
    createAppointment(appointment, {
      onSuccess() {
        onCloseModal?.();
        navigate('/citas');
      },
    });
  };

  return (
    <div>
      <form className={styles.form}>
        <Field label="Paciente">
          <select name="patientId" onChange={handleChange}>
            <option value="">Seleccionar</option>
            {patients?.map((patient: Patient) => (
              <option value={patient.id}>
                {patient.firstname} {patient.lastname}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Fecha y Hora">
          <Input name='dateTime' onChange={handleChange} type="datetime-local" />
        </Field>

        <div className={styles.form}>
          <Field label="Duración">
            <Input name='duration' onChange={handleChange} type="number" placeholder="Ejemplo 20" />
          </Field>
          <Field label="Frecuencia">
            <select name="">
              <option value="">Seleccionar</option>
              <option value="minutos">Minutos</option>
              <option value="horas">Horas</option>
            </select>
          </Field>
        </div>

        <Field label="Ubicación">
          <Input
          onChange={handleChange}
            name='location'
            type="text"
            placeholder="Por ejemplo, consultorio, teleconferencia"
          />
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

export default CreateAppoitmentForm;
