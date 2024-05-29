import { Patient } from '@vitalut/entities';
import { Button, Field } from '@vitalut/design-system/web';
import { useCreateHistory, useForm, usePatients } from '@/hooks';
import { useNavigate } from 'react-router-dom';


const CreateHistoryForm = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const { patients } = usePatients();
  const { isCreating, createHistory } = useCreateHistory();

  const navigate = useNavigate();
  const { formState: history, handleChange } = useForm<Partial<Patient>>({
    firstname: "",
    lastname: "",
    dateOfBirth: new Date(),
  });

  const submit = () => {
    createHistory(history,{ onSuccess(){
      onCloseModal?.()
      navigate("/historias")
    } })
  }

  return (
    <div>
      <form action="">
        <Field label='Paciente' >
          <select name="patientId" onChange={handleChange}>
            <option value="" >Seleccionar</option>
            {patients?.map((patient: Patient) => (
              <option value={patient.id}>{patient.firstname} {patient.lastname}</option>
            ))}
          </select>
        </Field>
      </form>

      <Button style={{
        marginTop: 20
      }} loading={isCreating} type='button' onClick={submit}>Guardar</Button>
    </div>
  );
};

export default CreateHistoryForm;
