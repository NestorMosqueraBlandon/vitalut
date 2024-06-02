import { Button, Subtitle } from '@vitalut/design-system/web';
import {  X, Zap } from 'react-feather';
import styles from './New.module.css';
import { useState } from 'react';
import { CreateAppointment } from '@/Modals/Appoinetments';
import { CreateHistory, CreatePatient } from '@/Modals';
import { CreateTask } from '@/Modals/Tasks';

const New = () => {
  const close = () => setOpenName('');
  // const ref = useOutsideClick<HTMLDivElement>({
  //   handler: close,
  //   listenCapturing: true,
  // });

  const [openName, setOpenName] = useState('');

  return (
    <>
      <Button onClick={() => setOpenName('modal')}>
        <Zap size={16} /> Nuevo...
      </Button>
      {openName == 'modal' && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <Subtitle
                text={
                  screen
                    ? 'Nuevo precio de venta'
                    : 'Administrar tarifas de venta'
                }
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Button onClick={close} variant="third">
                  <X size={15} />
                </Button>
              </div>
            </div>

            <div className={styles.container}>
              <CreateAppointment />
              <CreatePatient />
              <CreateHistory />
              <CreateTask />
            </div>
            <div className={styles.footer}></div>
          </div>
        </div>
      )}
    </>
    // <ModalDest>
    //      <ModalDest.Open opens="new-form">
    //
    //   </ModalDest.Open>
    //   <ModalDest.Window width={850} title={'Crear un nuevo...'} name="new-form">

    //   </ModalDest.Window>
    // </ModalDest>
  );
};

export default New;
