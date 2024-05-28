import { Modal } from '@/containers'
import { Button } from '@vitalut/design-system/web'
import { Calendar, List, User, Zap } from 'react-feather'
import styles from "./New.module.css"

const New = () => {
  return (
    <Modal>
         <Modal.Open opens="new-form">
        <Button><Zap size={16} /> Nuevo...</Button>
      </Modal.Open>
      <Modal.Window width={850} title={'Crear un nuevo...'} name="new-form">
        <div className={styles.container} >
            <Button>
            <Calendar size={16} color="#9333EA" /> 
            <div>

                <h3>Nueva Cita</h3>
                <p>Agrega o programa</p>
                </div>

            </Button>
            <Button>
            <List size={16} color="#3B82F6" /> 
                <div>
                    <h3>Nuevo Paciente</h3>
                    <p>Agrega rapidamente pacientes</p>
                </div>

            </Button>
            <Button>
            <User size={16} color="#14B8A6" />
            <div>

                <h3>Nueva Tarea</h3>
                <p>Hacer algo</p>
                </div>

            </Button>
        </div>
      </Modal.Window>
    </Modal>
  )
}

export default New