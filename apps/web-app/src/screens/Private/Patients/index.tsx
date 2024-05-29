import { useState } from 'react';
import styles from './Patients.module.css';
import {
  Trash,
  User,
} from 'react-feather';
import { useDeletePatient, usePatients } from '@/hooks';
import { Patient } from '@vitalut/entities';
import { Button, Loader } from '@vitalut/design-system/web';
import { CreatePatient } from '@/Modals/Patients';

const Patients = () => {
  const [selectedPatient, setSelectedPatient] = useState<Partial<Patient | null>>(null);
  const [search, setSearch] = useState("");

  const { isDeleting, deletePatient } = useDeletePatient();
  const { isLoading, count, patients } = usePatients();
  
  if(isLoading){
    return <Loader />
  }
  
  return (
      <div className={styles.content}>
        <div className={styles.sidebar} >
          <div className={styles.header}>
            <div>
              <User size={16} color="#3B82F6" /> Pacientes <span>{count}</span>
            </div>
            <input type="text" onChange={({ target }) => setSearch(target.value)} placeholder='Buscar paciente' />
          </div>
          <div className={styles.list}>
            {patients.filter((patient: Patient) => patient.firstname.toLowerCase().includes(search.toLowerCase())).map((patient: Patient) => (
              <div onClick={() => setSelectedPatient(patient)} key={patient.id} className={styles.patient}>
                 <h4>{patient.firstname} {patient.lastname} </h4>
              </div>
            ))}
          </div>
        </div>
        {selectedPatient == null ? (
          <div className={styles.empty_container} >
            <div className={styles.empty_card} >
              <User size={35} color="#9333EA" />
              <h3>¡Tiene {patients.length} pacientes!</h3>
              <p></p>
              <CreatePatient text='Nuevo Paciente' />
              {/* <Button><Plus size={16} color='rgba(0,0,0,0.5)' /> Nuevo Paciente</Button> */}
            </div>
          </div>
      ): (
        <div>
        <div className={styles.details_header} >
        <div className={styles.initial} >{selectedPatient.firstname?.charAt(0)}{selectedPatient.lastname?.charAt(0)}</div>
          <h4>{selectedPatient.firstname} {selectedPatient.lastname}</h4>
          <Button style={{
            marginLeft: 20
          }} variant="danger" loading={isDeleting} onClick={() => deletePatient(selectedPatient.id || "", {
            onSuccess(){
              setSelectedPatient(null)
            }
          })}  ><Trash size={15} /> Eliminar Paciente</Button>
        </div>
      <div className={styles.container_details} >
          <div className={styles.details} >
            <div className={styles.info_header} >
              <h3>{selectedPatient.firstname} {selectedPatient.lastname}</h3>
              <div className={styles.info} >
                <span className={styles.gender} >{translateGender(selectedPatient.gender)}</span>
                <span className={styles.age} title='Edad' >{calculateAge(selectedPatient.dateOfBirth?.toString())}</span>
              </div>
            </div>
              <div className={styles.notes} >
                <h4>Información de Contacto</h4>
                
                <ul className={styles.list_info}>
                  <li><p>Correo: </p>{selectedPatient.contactInfo?.email}</li>
                  <li><p>Teléfono: </p>{selectedPatient.contactInfo?.phone}</li>
                  <li><p>Dirección: </p>{selectedPatient.contactInfo?.address}</li>
                  <li><p>Ciudad: </p>{selectedPatient.contactInfo?.city}</li>
                  <li><p>País: </p>{selectedPatient.contactInfo?.country}</li>

                </ul>
              </div>

              <div className={styles.notes} >
                <h4>Contacto de Emergencia</h4>
                
                <ul className={styles.list_info}>
                  <li><p>Nombre: </p>{selectedPatient.emergencyContact?.name}</li>
                  <li><p>Parentesco: </p>{selectedPatient.emergencyContact?.relationship}</li>
                  <li><p>Teléfono: </p>{selectedPatient.emergencyContact?.phone}</li>
                </ul>
              </div>

         

            
          </div>
      </div>   
      </div>

      )}
      
      </div>
  );
};

export default Patients;

function calculateAge(birthDateString?: string): number {

  if(!birthDateString)
    return 0
  
  const birthDate = new Date(birthDateString);
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  // Si el cumpleaños no ha ocurrido aún este año, resta 1 de la edad.
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
  }

  return age;
}

const genderTranslationMap: { [key: string]: string } = {
  male: 'Masculino',
  female: 'Femenino',
  other: 'Otro',
  nonbinary: 'No binario',
  genderqueer: 'Queer',
  transgender: 'Transgénero'
};

function translateGender(gender?: string): string {
  if (gender === undefined) {
      return 'Desconocido';
  }
  return genderTranslationMap[gender.toLowerCase()] || 'Desconocido';
}