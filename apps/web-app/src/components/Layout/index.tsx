import Header from "../Header"
import { Outlet } from 'react-router-dom'
import styles from "./Layout.module.css"
import Sidebar from "../Sidebar"

const Layout = () => {
  return (
    <div className={styles.container}>
        <Sidebar />
        <div>
        <Header />
        <Outlet />
        </div>
    </div>
  )
}

export default Layout