import { useState } from 'react';
import styles from './Patients.module.css';
import {
  User,
} from 'react-feather';

const patients = [
  {
    name: "Paul Hancock",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Jacob Ortiz",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Heather Mendoza",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Christopher Ramos",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Kendra Hudson",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "April Greene",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Paul Spence",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Stephanie Conner",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "April Tapia",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Amy Adams",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Zoe Peters",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Mark Wilson",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Joy Hall",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  },
  {
    name: "Miguel Sheppard",
    title: "Disability forms",
    date: "Abril 04",
    type: {
      color: "#2CD4BF",
      name: "Papelería"
    }
  }
]

const Patients = () => {
  const [search, setSearch] = useState("");
  return (
      <div className={styles.content}>
        <div className={styles.sidebar} >
          <div className={styles.header}>
            <div>
              <User size={16} color="#3B82F6" /> Pacientes <span>{patients.length}</span>
            </div>
            <input type="text" onChange={({ target }) => setSearch(target.value)} placeholder='Buscar paciente' />
          </div>
          <div className={styles.list}>
            {patients.filter((patient) => patient.name.toLowerCase().includes(search.toLowerCase())).map((task) => (
              <div className={styles.patient}>
                 <h4>{task.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div>

        </div>
      
      </div>
  );
};

export default Patients;
