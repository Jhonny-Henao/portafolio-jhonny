import React from 'react'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import Proyectos from '@/components/Proyectos'
import Contactos from '@/components/Contactos'
import Skills from '@/components/Skills'

export default function Portafolio() {
  return(
    <>
      <Header/>
      <Hero/>
      <Skills />
      <Proyectos/>
      <Contactos/>
    </>
  )
}