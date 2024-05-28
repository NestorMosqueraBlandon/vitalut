import Layout from '@/components/Layout';
import {  Route, Routes } from 'react-router-dom';
import Appointments from './Appointments';
import Tasks from './Tasks';
import Patients from './Patients';

const Private = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='citas' element={<Appointments />} />
            <Route path='tareas' element={<Tasks />} />
            <Route path='mensajes' element={<Appointments />} />
            <Route path='pacientes' element={<Patients />} />
        </Route>
    </Routes>
  )
}

export default Private