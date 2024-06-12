import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
        <nav className={styles.nav} >
            <Link href="/" >
                <Image  src="/logo-tip.png" width={120} height={25} alt='Logo Vitalut' />
            </Link>
            <ul>
            <li><Link href="/" >Funcionalidades</Link></li>
                <li><Link href="/" >Precios</Link></li>
                <li><Link href="/" >Blog</Link></li>
            </ul>
            <Link href="/" className={styles.btn} >Iniciar sesión</Link>
        </nav>
    </header>
  )
}

export default Header