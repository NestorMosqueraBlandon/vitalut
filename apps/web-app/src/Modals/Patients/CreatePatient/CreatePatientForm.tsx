import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import styles from './Create.module.css';
import { Patient } from '@vitalut/entities';
import { Button, Field, Input } from '@vitalut/design-system/web';
import { useCreatePatient, useForm } from '@/hooks';

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const CreatePatientForm = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const [value, setValue] = React.useState(0);

  const { isCreating, createPatient } = useCreatePatient();

  const handleChangeTab = (event: React.ChangeEvent<unknown>, newValue: number) => {
    console.log(event)
    setValue(newValue);
  };
  const { formState: patient, handleChange } = useForm<Partial<Patient>>({
    firstname: "",
    lastname: "",
    dateOfBirth: new Date(),
  });


  const submit = () => {
    createPatient(patient,{ onSuccess(){
      onCloseModal?.()
    } })
  }

  return (
    <div>
      <Tabs value={value} onChange={handleChangeTab} aria-label="Patient tabs">
        <Tab style={{
          fontSize: 12
        }} label="Información Personal" />
        <Tab style={{
          fontSize: 12
        }} label="Contacto" />
        <Tab style={{
          fontSize: 12
        }} label="Historial Médico" />
        <Tab style={{
          fontSize: 12
        }} label="Contacto de Emergencia" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <form>
          <div className={styles.container}>
            <Field label="Nombre">
              <Input
                name='firstname'
                placeholder="Camilo"
                value={patient.firstname}
                onChange={handleChange}
              />
            </Field>
            <Field label="Apellido">
              <Input
                 name='lastname'
                placeholder="Suarez"
                value={patient.lastname}
                onChange={handleChange}
              />
            </Field>
            <Field label="Fecha de Nacimiento">
              <Input
              name='dateOfBirth'
                type="date"
                onChange={handleChange}
              />
            </Field>
            <Field label="Género">
              <select
              name='gender'
                value={patient.gender}
                onChange={handleChange}
              >
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
              name='contactInfo.email'
                placeholder="email@example.com"
                value={patient.contactInfo?.email}
                onChange={handleChange}
              />
            </Field>
            <Field label="Teléfono">
              <Input
              name='contactInfo.phone'
                placeholder="123456789"
                value={patient.contactInfo?.phone}
                onChange={handleChange}
              />
            </Field>
            <Field label="Dirección">
              <Input
              name='contactInfo.address'
                placeholder="123 Main St"
                value={patient.contactInfo?.address}
                onChange={handleChange}
              />
            </Field>
            <Field label="Ciudad">
              <Input
              name='contactInfo.city'
                placeholder="Ciudad"
                value={patient.contactInfo?.city}
                onChange={handleChange}
              />
            </Field>
            <Field label="Departamento">
              <Input
              name='contactInfo.state'
                placeholder="Estado"
                value={patient.contactInfo?.state}
                onChange={handleChange}
              />
            </Field>
            <Field label="País">
              <Input
              name='contactInfo.country'
                placeholder="País"
                value={patient.contactInfo?.country}
                onChange={handleChange}
              />
            </Field>
            <Field label="Código Postal">
              <Input
              name='contactInfo.zipCode'
                placeholder="Código Postal"
                value={patient.contactInfo?.zipCode}
                onChange={handleChange}
              />
            </Field>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form>
          <div className={styles.container}>
            <Field label="Alergias">
              <Input
              name='medicalHistory.allergies'
                placeholder="Alergias"
                value={patient.medicalHistory?.allergies.join(', ')}
                onChange={handleChange}
              />
            </Field>
            <Field label="Medicamentos">
              <Input
              name='medicalHistory.medications'
                placeholder="Medicamentos"
                value={patient.medicalHistory?.medications.join(', ')}
                onChange={handleChange}
              />
            </Field>
            <Field label="Condiciones Médicas">
              <Input
              name='medicalHistory.medicalConditions'
                placeholder="Condiciones Médicas"
                value={patient.medicalHistory?.medicalConditions.join(', ')}
                onChange={handleChange}
              />
            </Field>
            <Field label="Cirugías">
              <Input
              name='medicalHistory.surgeries'
                placeholder="Cirugías"
                value={patient.medicalHistory?.surgeries.join(', ')}
                onChange={handleChange}
              />
            </Field>
            <Field label="Historial Familiar">
              <Input
                placeholder="Historial Familiar"
                value={patient.medicalHistory?.familyHistory}
                onChange={handleChange}
              />
            </Field>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <form>
          <div className={styles.container}>
            <Field label="Nombre">
              <Input
              name='emergencyContact.name'
                placeholder="Camilo Banderas"
                value={patient.emergencyContact?.name}
                onChange={handleChange}
              />
            </Field>
            <Field label="Parentesto">
              <Input
              name='emergencyContact.relationship'
                placeholder="Hermano"
                value={patient.emergencyContact?.relationship}
                onChange={handleChange}
              />
            </Field>
            <Field label="Teléfono">
              <Input
                placeholder="32124322432"
                value={patient.emergencyContact?.phone}
                onChange={handleChange}
              />
            </Field>
          </div>
        </form>
      </TabPanel>

      <Button loading={isCreating} type='button' onClick={submit}>Guardar</Button>
    </div>
  );
};

export default CreatePatientForm;
