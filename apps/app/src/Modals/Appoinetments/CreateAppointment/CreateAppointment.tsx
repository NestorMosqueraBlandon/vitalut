import { Modal } from '@/containers'
import { Button } from '@vitalut/design-system/web'
import { Inbox } from 'react-feather'
import CreatePatientForm from './CreateAppointmentForm'

const CreateAppointment = ({ text }: { text?: string }) => {
  return (
    <Modal>
         <Modal.Open opens="create-appointment-form">
         <Button>
            <Inbox size={16} color="#9333EA" /> 
            {text ? (
              <h3>{text}</h3>
            ) : (
              <div>
              <h3>Nueva Cita</h3>
              <p>Agrega o programa</p>
          </div>
            )}
               

            </Button>     
            
        </Modal.Open>
      <Modal.Window width={850} title={'Nueva Cita'} name="create-appointment-form">
       <CreatePatientForm />
      </Modal.Window>
    </Modal>
  )
}

export default CreateAppointment