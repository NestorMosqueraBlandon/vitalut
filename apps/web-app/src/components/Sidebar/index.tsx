import styles from './Sidebar.module.css'
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Clock,
  Zap,
  Calendar,
  List,
  Inbox,
  User,
  CreditCard,
} from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Button } from '@vitalut/design-system/web';

const Sidebar = () => {
    return (
      <aside className={styles.sidebar}>
      <div className={styles.side_header}>
        <h3>vitalut</h3>
        <div className={styles.controls}>
          <button>
            <ArrowLeft size={16} />
          </button>
          <button>
            <ArrowRight size={16} />
          </button>
          <button>
            <Clock size={16} />
          </button>
        </div>
      </div>

      <div className={styles.options}>
        <Button>
          <Search size={16} />
        </Button>
        <Button>
          <Zap size={16} /> Nuevo...
        </Button>
      </div>
      <ul className={styles.list}>
        <li>
          <NavLink to="/citas">
            <Calendar size={16} color="#9333EA" /> Citas
          </NavLink>
        </li>
        <li>
        <NavLink to="/tareas">

          <List size={16} color="#3B82F6" /> Tareas
          </NavLink>

        </li>
        <li>       <NavLink to="/mensajes">

          <Inbox size={16} color="#6366F1" /> Mensajes
          </NavLink>

        </li>
        <li>
        <NavLink to="/pacientes">

          <User size={16} color="#14B8A6" /> Pacientes
          </NavLink>

        </li>
        <li>
        <NavLink to="/facturacion">
          <CreditCard size={16} color="#0EA5E9" /> Facturacion
          </NavLink>

        </li>
      </ul>
    </aside>
  )
}

export default Sidebar