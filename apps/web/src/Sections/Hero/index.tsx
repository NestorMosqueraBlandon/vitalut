import React from 'react'
import styles from "./Hero.module.css"
import Link from 'next/link'
import { Star } from "react-feather"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.section} >
        <div className={styles.container} >
            <Link href="/" className={styles.cta}>
                <span><Star size={16} /> Nuevo</span>
                Vitalut.com lanzamiento 1.0
            </Link>
        <h1>Una manera más humana de gestionar tus pacientes</h1>
        <p>Te facilitamos y mejoramos el cuidado de las personas, permitiendote gestionar historiales clínicos, realizar evaluaciones, planificar tratamientos y hacer seguimiento del progreso de sus pacientes de manera eficiente y segura. Ideal para psicólogos, terapeutas y otros especialistas.</p>
        <div className={styles.buttons} >
          <button>Registrate Gratis</button>
          <button>Más Información</button>
        </div>
        </div>
        <div className={styles.image_container} >
        <Image className={styles.image} objectFit='contain' src="/hero-v.jpeg" width={1200} height={700} alt='Vitalut' />

        </div>
    </section>
  )
}

export default Hero