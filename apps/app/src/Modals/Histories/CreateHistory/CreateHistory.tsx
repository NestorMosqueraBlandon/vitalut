import { Modal } from '@/containers'
import { Button } from '@vitalut/design-system/web'
import { Inbox } from 'react-feather'
import CreatePatientForm from './CreateHistoryForm'

const CreateHistory = ({ text }: { text?: string }) => {
  return (
    <Modal>
         <Modal.Open opens="create-history-form">
         <Button>
            <Inbox size={16} color="#3B82F6" /> 
            {text ? (
              <h3>{text}</h3>
            ) : (
              <div>
              <h3>Nueva Historia</h3>
              <p>Agrega historias rapidamente</p>
          </div>
            )}
               

            </Button>     
            
        </Modal.Open>
      <Modal.Window width={850} title={'Nueva Historia Clínica'} name="create-history-form">
       <CreatePatientForm />
      </Modal.Window>
    </Modal>
  )
}

export default CreateHistory