import { Button } from '@vitalut/design-system/web';
import styles from './Home.module.css';
import { Search, ArrowLeft, ArrowRight, Clock, Zap, Calendar, List, Inbox, User, CreditCard } from "react-feather";

const Home = () => {
  return (
    <div className={styles.container}>
    <aside className={styles.sidebar}>
      <div className={styles.side_header}>
        <h3>vitalut</h3>
        <div className={styles.controls}>
          <button><ArrowLeft size={16} /></button>
          <button><ArrowRight size={16} /></button>
          <button><Clock size={16} /></button>
        </div>
      </div>

      <div className={styles.options} >
        <Button><Search size={16} /></Button>
        <Button><Zap size={16} /> Nuevo...</Button>
      </div>
      <ul className={styles.list} >
        <li><Calendar size={16} color='#9333EA' /> Appointments</li>
        <li><List size={16} color='#3B82F6' /> Tareas</li>
        <li><Inbox size={16} color='#6366F1' /> Mensajes</li>
        <li><User size={16} color='#14B8A6' /> Pacientes</li>
        <li><CreditCard size={16} color='#0EA5E9'  /> Facturacion</li>
      </ul>
    </aside>
    <div>
      <header className={styles.header}>
        <p>Appointments</p>
        <div className={styles.profile}>
            <picture>
                <span className={styles.badge} ></span>
                <img src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </picture>
        </div>
      </header>
      <div className={styles.content} >

      </div>
    </div>
  </div>
  )
}

export default Home