import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalut.com'),
  title: {
    default: 'Software para el cuidado de las personas | Vitalut',
    template: '%s | Vitalut'
  },
  description: 'Nuestro software facilita y mejora el cuidado de las personas, permitiendo a los profesionales de la salud gestionar historiales clínicos, realizar evaluaciones, planificar tratamientos y hacer seguimiento del progreso de sus pacientes de manera eficiente y segura. Ideal para psicólogos, terapeutas y otros especialistas.',
  applicationName: 'Vitalut',
  keywords: ['Historiales clínicos', 'tratamientos', 'Psicólogos', "Terapeutas"],
  authors: [ { name: 'Nevobit', url: 'https://nevobit.io'} ],
  creator: 'Nevobit Software',
  publisher: 'Nevobit Software',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    }
  },
  openGraph: {
    title: 'Software para el cuidado de las personas | Vitalut',
    description:'Nuestro software facilita y mejora el cuidado de las personas, permitiendo a los profesionales de la salud gestionar historiales clínicos, realizar evaluaciones, planificar tratamientos y hacer seguimiento del progreso de sus pacientes de manera eficiente y segura. Ideal para psicólogos, terapeutas y otros especialistas.',
    url: 'https://template.com',
    siteName: 'Vitalut',
    type: 'website',
    locale: 'es-ES',
  },
  twitter: {
    title: 'Software para el cuidado de las personas | Vitalut',
    description:'Nuestro software facilita y mejora el cuidado de las personas, permitiendo a los profesionales de la salud gestionar historiales clínicos, realizar evaluaciones, planificar tratamientos y hacer seguimiento del progreso de sus pacientes de manera eficiente y segura. Ideal para psicólogos, terapeutas y otros especialistas.',
    creator: '@nevobitsoftware',
    site: 'Vitalut',
    card: 'summary_large_image',
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
