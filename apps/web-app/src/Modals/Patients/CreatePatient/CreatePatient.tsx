import { Modal } from '@/containers'
import { Button } from '@vitalut/design-system/web'
import { List } from 'react-feather'
import CreatePatientForm from './CreatePatientForm'

const CreatePatient = ({text}: { text?: string }) => {
  return (
    <Modal>
         <Modal.Open opens="create-patient-form">
         <Button>
            <List size={16} color="#3B82F6" /> 

            {text ? (
              <h3>{text}</h3>
            ): (
  <div>
  <h3>Nuevo Paciente</h3>
  <p>Agrega rapidamente pacientes</p>
</div>

            )}
              
            </Button>     
            
        </Modal.Open>
      <Modal.Window width={850} title={'Nuevo Paciente'} name="create-patient-form">
       <CreatePatientForm />
      </Modal.Window>
    </Modal>
  )
}

export default CreatePatient