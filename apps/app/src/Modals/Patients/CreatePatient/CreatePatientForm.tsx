import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import styles from './Create.module.css';
import { Patient } from '@vitalut/entities';
import { Button, Field, Input } from '@vitalut/design-system/web';
import { useCreatePatient, useForm } from '@/hooks';
import TagsInput from '@/components/TagsInput';
import { Trash } from 'react-feather';

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const CreatePatientForm = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const [value, setValue] = useState(0);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [medications, setMedications] = useState<string[]>([]);
  const [medicalConditions, setMedicalConditions] = useState<string[]>([]);
  const [surgeries, setSurgeries] = useState<string[]>([]);
  const [schoolHistory, setSchoolHistory] = useState([
    { schoolName: '', yearsAttended: '' },
  ]);
  const [jobHistory, setJobHistory] = useState([{ companyName: '', jobTitle: '', yearsWorked: '' }]);
  const [socialActivities, setSocialActivities] = useState<string[]>([]);

  
  const [significantEvents, setSignificantEvents] = useState<string[]>([]);

  const handleHobbiesChanged = (newHobbies: string[]) => {
    setHobbies(newHobbies);
  };

  const handleAllergiesChanged = (newAllergies: string[]) => {
    setAllergies(newAllergies);
  };

  const handleMedicationsChanged = (newMedications: string[]) => {
    setMedications(newMedications);
  };

  const handleMedicalConditionsChanged = (newMedicalConditions: string[]) => {
    setMedicalConditions(newMedicalConditions);
  };

  const handleSurgeriesChanged = (newSurgeries: string[]) => {
    setSurgeries(newSurgeries);
  };

  const handleSignificantEventsChanged = (newEvents: string[]) => {
    setSignificantEvents(newEvents);
  };

  const handleSocialActivitiesChanged = (newActivities: string[]) => {
    setSocialActivities(newActivities);
  };
  const { isCreating, createPatient } = useCreatePatient();

  const handleChangeTab = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    console.log(event);
    setValue(newValue);
  };
  const { formState: patient, handleChange } = useForm<Partial<Patient>>({
    firstname: '',
    lastname: '',
    personalHistory: {
      hobbies: [],
      lifestyle: '',
      significantEvents: [],
    },
    medicalHistory: {
      allergies: [],
      medications: [],
      medicalConditions: [],
      surgeries: [],
      familyHistory: '',
    },
    socialHistory: {
      socialActivities: [],
      supportNetwork: "",
      socialConcerns: ""
    },
    dateOfBirth: new Date(),
  });

  const handleSchoolHistoryChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    const updatedSchoolHistory = schoolHistory.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry,
    );
    setSchoolHistory(updatedSchoolHistory);
  };

  const handleAddSchool = () => {
    setSchoolHistory([...schoolHistory, { schoolName: '', yearsAttended: '' }]);
  };

  const handleRemoveSchool = (index: number) => {
    setSchoolHistory(schoolHistory.filter((_, i) => i !== index));
  };

  const handleJobHistoryChange = (index: number, field: string, value: string) => {
    const updatedJobHistory = jobHistory.map((entry, i) => 
      i === index ? { ...entry, [field]: value } : entry
    );
    setJobHistory(updatedJobHistory);
  };


  const handleAddJob = () => {
    setJobHistory([...jobHistory, { companyName: '', jobTitle: '', yearsWorked: '' }]);
  };

  const handleRemoveJob = (index: number) => {
    setJobHistory(jobHistory.filter((_, i) => i !== index));
  };
  const submit = () => {
    createPatient(
      {
        ...patient,
        personalHistory: {
          ...patient.personalHistory,
          hobbies,
          significantEvents,
        },
        medicalHistory: {
          ...patient.medicalHistory,
          allergies: allergies,
          medications: medications,
          medicalConditions: medicalConditions,
          surgeries: surgeries,
          
        },
        educationalHistory: {
          ...patient.educationalHistory,
          schoolHistory: schoolHistory
        },
        socialHistory: {
          ...patient.socialHistory,
          socialActivities
        }
      },
      {
        onSuccess() {
          onCloseModal?.();
        },
      },
    );
  };


  return (
    <div>
      <Tabs
        variant="scrollable"
        allowScrollButtonsMobile
        scrollButtons="auto"
        className={styles.tabs}
        value={value}
        onChange={handleChangeTab}
        aria-label="Patient tabs">
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Información Personal"
        />
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Contacto"
        />
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Historial Médico"
        />
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Historial Personal"
        />
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Historial Educativo"
        />
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Historial de Trabajo"
        />
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Historial Social"
        />
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Historial Sexual"
        />
        <Tab
          style={{
            fontSize: 12,
          }}
          label="Contacto de Emergencia"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <form>
          <div className={styles.container}>
            <Field label="Nombre">
              <Input
                name="firstname"
                placeholder="Camilo"
                value={patient.firstname}
                onChange={handleChange}
              />
            </Field>
            <Field label="Apellido">
              <Input
                name="lastname"
                placeholder="Suarez"
                value={patient.lastname}
                onChange={handleChange}
              />
            </Field>
            <Field label="Fecha de Nacimiento">
              <Input name="dateOfBirth" type="date" onChange={handleChange} />
            </Field>
            <Field label="Género">
              <select
                name="gender"
                value={patient.gender}
                onChange={handleChange}>
                <option value="">Seleccionar</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </Field>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form>
          <div className={styles.container}>
            <Field label="Correo Electrónico">
              <Input
                name="contactInfo.email"
                placeholder="email@example.com"
                value={patient.contactInfo?.email}
                onChange={handleChange}
              />
            </Field>
            <Field label="Teléfono">
              <Input
                name="contactInfo.phone"
                placeholder="123456789"
                value={patient.contactInfo?.phone}
                onChange={handleChange}
              />
            </Field>
            <Field label="Dirección">
              <Input
                name="contactInfo.address"
                placeholder="123 Main St"
                value={patient.contactInfo?.address}
                onChange={handleChange}
              />
            </Field>
            <Field label="Ciudad">
              <Input
                name="contactInfo.city"
                placeholder="Ciudad"
                value={patient.contactInfo?.city}
                onChange={handleChange}
              />
            </Field>
            <Field label="Departamento">
              <Input
                name="contactInfo.state"
                placeholder="Estado"
                value={patient.contactInfo?.state}
                onChange={handleChange}
              />
            </Field>
            <Field label="País">
              <Input
                name="contactInfo.country"
                placeholder="País"
                value={patient.contactInfo?.country}
                onChange={handleChange}
              />
            </Field>
            <Field label="Código Postal">
              <Input
                name="contactInfo.zipCode"
                placeholder="Código Postal"
                value={patient.contactInfo?.zipCode}
                onChange={handleChange}
              />
            </Field>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.container}>
          <Field
            label="Alergias"
            tip='Escribe el pasatiempo y presiona la tecla "enter" para agregar'>
            <TagsInput
              placeholder="Polen, Polvo"
              onChanged={handleAllergiesChanged}
            />
          </Field>
          <Field
            label="Medicamentos"
            tip='Escribe el pasatiempo y presiona la tecla "enter" para agregar'>
            <TagsInput
              placeholder="Paracetamol, Ibuprofeno"
              onChanged={handleMedicationsChanged}
            />
          </Field>
          <Field
            label="Condiciones Médicas"
            tip='Escribe el pasatiempo y presiona la tecla "enter" para agregar'>
            <TagsInput
              placeholder="Hipertensión, Diabetes"
              onChanged={handleMedicalConditionsChanged}
            />
          </Field>
          <Field
            label="Cirugías"
            tip='Escribe el pasatiempo y presiona la tecla "enter" para agregar'>
            <TagsInput
              placeholder="Apendicectomía, Cirugía de rodilla"
              onChanged={handleSurgeriesChanged}
            />
          </Field>
          <Field label="Historial Familiar">
            <Input
              name="medicalHistory.familyHistory"
              placeholder="Antecedentes de depresión en la familia"
              value={patient.medicalHistory?.familyHistory}
              onChange={handleChange}
            />
          </Field>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={styles.container}>
          <Field
            label="Pasatiempos"
            tip='Escribe el pasatiempo y presiona la tecla "enter" para agregar'>
            <TagsInput
              placeholder="Leer, Correr, Pintar"
              onChanged={handleHobbiesChanged}
            />
          </Field>
          <Field label="Estilo de Vida">
            <Input
              name="personalHistory.lifestyle"
              placeholder="Activo, No fuma, Bebe ocasionalmente"
              value={patient.emergencyContact?.relationship}
              onChange={handleChange}
            />
          </Field>
          <Field
            label="Eventos Significativos"
            tip='Escribe el pasatiempo y presiona la tecla "enter" para agregar'>
            <TagsInput
              placeholder="Mudanza, Ruptura amorosa"
              onChanged={handleSignificantEventsChanged}
            />
          </Field>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
          <div className={styles.container}>
            <Field label="Nivel Educativo">
              <Input
                name="educationalHistory.highestLevel"
                placeholder="Licenciatura, Maestría, Doctorado"
                value={patient.educationalHistory?.highestLevel}
                onChange={handleChange}
              />
            </Field>
            <Field label="Estado Educativo Actual">
              <Input
                name="educationalHistory.currentStatus"
                placeholder="Estudiando, Graduado, Abandonó"
                value={patient.educationalHistory?.currentStatus}
                onChange={handleChange}
              />
            </Field>
            <Field label="Historial Edutativo">
              <div className={styles.list} >

              {schoolHistory.map((entry, index) => (
                <div className={styles.col} key={index}>
                  <Input
                    type="text"
                    placeholder="Nombre de la escuela"
                    value={entry.schoolName}
                    onChange={(e) =>
                      handleSchoolHistoryChange(
                        index,
                        'schoolName',
                        e.target.value,
                      )
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Años asistidos"
                    value={entry.yearsAttended}
                    onChange={(e) =>
                      handleSchoolHistoryChange(
                        index,
                        'yearsAttended',
                        e.target.value,
                      )
                    }
                  />
                  <Button type='button' onClick={() => handleRemoveSchool(index)} > <Trash size={18} /> </Button>

                </div>
              ))}
              </div>

              <div className={styles.btn} >

              <Button type="button" onClick={handleAddSchool}>
                Añadir otra institución
              </Button>
              </div>

            </Field>
          </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
          <div className={styles.container}>
            <Field label="Ocupación Actual">
              <Input
                name="workHistory.currentOccupation"
                placeholder="Psicólogo Clínico"
                value={patient.workHistory?.currentOccupation}
                onChange={handleChange}
              />
            </Field>
            <Field label="Estado Laboral Actual">
              <Input
                name="workHistory.employmentStatus"
                placeholder="Empleado, Desempleado, Freelance"
                value={patient.workHistory?.employmentStatus}
                onChange={handleChange}
              />
            </Field>
            <Field label="Historial de Trabajo">
             <div className={styles.list} >
             {jobHistory.map((entry, index) => (
          <div className={styles.grid} key={index}>
            <Input
              type="text"
              placeholder="Nombre de la empresa"
              value={entry.companyName}
              onChange={(e) => handleJobHistoryChange(index, 'companyName', e.target.value)}
            />
            <Input
              type="text"
              placeholder="Título del trabajo"
              value={entry.jobTitle}
              onChange={(e) => handleJobHistoryChange(index, 'jobTitle', e.target.value)}
            />
            <Input
              type="text"
              placeholder="Años trabajados"
              value={entry.yearsWorked}
              onChange={(e) => handleJobHistoryChange(index, 'yearsWorked', e.target.value)}
            />
            <Button type='button'  onClick={() => handleRemoveJob(index)} > <Trash size={18} /> </Button>
          </div>
        ))}

             </div>
             <div className={styles.btn} >
             <Button type="button" onClick={handleAddJob}>Añadir otro trabajo</Button>

             </div>

            </Field>
          </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
          <div className={styles.container}>
            <Field label="Actividades Sociales"
            tip='Escribe el pasatiempo y presiona la tecla "enter" para agregar'>
            <TagsInput
              placeholder="Voluntariado, Club de lectura"
              onChanged={handleSocialActivitiesChanged}
            />
            </Field>
            <Field label="Descripcion de la red de Apoyo">
              <Input
                name="socialHistory.supportNetwork"
                placeholder="Familia cercana, Amigos íntimos"
                value={patient.socialHistory?.supportNetwork}
                onChange={handleChange}
              />
            </Field>
            <Field label="Preocupaciones Sociales">
              <Input
                name="socialHistory.socialConcerns"
                placeholder="Dificultad para hacer amigos"
                value={patient.socialHistory?.socialConcerns}
                onChange={handleChange}
              />
            </Field>
          </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <div className={styles.container}>
          <Field label="Orientación Sexual">
            <Input
              name="sexualHistory.sexualOrientation"
              placeholder="Heterosexual, Homosexual, Bisexual"
              value={patient.sexualHistory?.sexualOrientation}
              onChange={handleChange}
            />
          </Field>
          <Field label="Actividad Sexual">
            <Input
              name="sexualHistory.sexualActivity"
              placeholder="Sexualmente activo, No activo"
              value={patient.sexualHistory?.sexualActivity}
              onChange={handleChange}
            />
          </Field>
          <Field label="Preocupaciones Sexuales">
            <Input
              placeholder="Ansiedad sexual, Problemas de desempeño"
              value={patient.sexualHistory?.sexualConcerns}
              onChange={handleChange}
            />
          </Field>
        </div>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <div className={styles.container}>
          <Field label="Nombre">
            <Input
              name="emergencyContact.name"
              placeholder="Camilo Banderas"
              value={patient.emergencyContact?.name}
              onChange={handleChange}
            />
          </Field>
          <Field label="Parentesto">
            <Input
              name="emergencyContact.relationship"
              placeholder="Padre, Madre, Amigo"
              value={patient.emergencyContact?.relationship}
              onChange={handleChange}
            />
          </Field>
          <Field label="Teléfono">
            <Input
              name="emergencyContact.phone"
              placeholder="32124322432"
              value={patient.emergencyContact?.phone}
              onChange={handleChange}
            />
          </Field>
        </div>
      </TabPanel>

      <Button 
      variant='primary'
      style={{
        marginTop: 20,
        marginBottom: 20
      }}
      loading={isCreating} type="button" onClick={submit}>
        Guardar
      </Button>
    </div>
  );
};

export default CreatePatientForm;
