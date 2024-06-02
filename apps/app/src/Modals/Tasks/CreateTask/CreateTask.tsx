import { Modal } from '@/containers'
import { Button } from '@vitalut/design-system/web'
import { User } from 'react-feather'
import CreatePatientForm from './CreateTaskForm'

const CreateTask = ({ text }: { text?: string }) => {
  return (
    <Modal>
         <Modal.Open opens="create-task-form">
         <Button>
         <User size={16} color="#14B8A6" /> 
            {text ? (
              <h3>{text}</h3>
            ) : (
              <div>
              <h3>Nueva Tarea</h3>
              <p>Hacer algo</p>
          </div>
            )}
               

            </Button>     
            
        </Modal.Open>
      <Modal.Window width={850} title={'Nueva Tarea'} name="create-task-form">
       <CreatePatientForm />
      </Modal.Window>
    </Modal>
  )
}

export default CreateTask