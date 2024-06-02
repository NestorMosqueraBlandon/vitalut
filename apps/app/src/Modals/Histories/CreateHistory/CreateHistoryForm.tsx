import { History, Patient } from '@vitalut/entities';
import { Button, Field, Input } from '@vitalut/design-system/web';
import { useCreateHistory, useForm, usePatients } from '@/hooks';
import { useNavigate } from 'react-router-dom';


const CreateHistoryForm = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const { patients } = usePatients();
  const { isCreating, createHistory } = useCreateHistory();

  const navigate = useNavigate();
  const { formState: history, handleChange } = useForm<Partial<History>>({
    reason: "",
    patientId: ""
  });

  const submit = () => {
    createHistory(history, { onSuccess(){
      onCloseModal?.()
      navigate("/historias")
    } })
  }

  return (
    <div>
      <form>
        <Field label='Motivo de la Consulta'>
          <Input name='reason' value={history.reason} placeholder='Consulta por ansiedad y estrés laboral' onChange={handleChange} />
        </Field>
        <Field label='Paciente' >
          <select style={{
            width: "100%"
          }} name="patientId" onChange={handleChange}>
            <option value="" >Seleccionar</option>
            {patients?.map((patient: Patient) => (
              <option value={patient.id}>{patient.firstname} {patient.lastname}</option>
            ))}
          </select>
        </Field>
      </form>

      <Button 
       variant='primary'
      style={{
        marginTop: 40,
        marginBottom: 20
      }} loading={isCreating} type='button' onClick={submit}>Guardar</Button>
    </div>
  );
};

export default CreateHistoryForm;
