"use client";

import React, { useEffect, useState } from "react";
import ModalMundiHuellas from "@/components/ModalMundiHuellas";
import ModalCrmCobro from '@/components/ModalCrmCobro';
import ModalHaulerPro from "@/components/ModalHaulerPro";

export const Proyectos: React.FC = () => {
  const [isModalMundiHuellas, setIsModalMundiHuellas] = useState(false);
  const [isModalCrmCobro, setIsModalCrmCobro] = useState(false);
  const [isModalHaulerPro, setIsModalHaulerPro] = useState(false);

  // Para abrir y cerrar el modal de mundi huellas
  const abrirModalMundiHuellas = () => {
    setIsModalMundiHuellas(true);
  }

  const cerrarModalMundiHuellas = () => {
    setIsModalMundiHuellas(false);
  }

  // Para abrir y cerrar el modal de Crm cobro
  const abrirModalCrmCobro = () => {
    setIsModalCrmCobro(true);
  } 

  const cerrarModalCrmCobro = () => {
    setIsModalCrmCobro(false);
  }

  // Para abrir y cerrar el modal de HaulerPro
  const abrirModalHaulerPro = () => {
    setIsModalHaulerPro(true);
  } 

  const cerrarModalHaulerPro = () => {
    setIsModalHaulerPro(false);
  }

  useEffect(() => {
    if (isModalMundiHuellas || isModalCrmCobro || isModalHaulerPro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = 'hidden';
    }
  }, [isModalMundiHuellas, isModalCrmCobro, isModalHaulerPro])

  return (
    <div 
      id="proyectos" 
      className="bg-gray-400 min-h-screen flex justify-center flex-col text-3xl font-medium pb-5"
    >
      <h1 className="text-white text-4xl h-10 w-full flex justify-center mb-4">Proyectos</h1>
  
      {/* Contenido de los proyectos */}
      <div className="w-full min-h-[90vh] grid grid-cols-1 md:grid-cols-3 gap-6 p-5 place-items-center">
        {/* Container proyecto 1 */}
        <div className="bg-white rounded-2xl w-full max-w-[400px] h-[95vh] flex flex-col  items-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden hover:scale-105">
          <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4 tracking-wider">Mundi Huellas</h1>
          <div className="bg-gray-50 p-4 rounded-xl w-[90%] text-center shadow-inner">
            <p className="text-gray-700 leading-relaxed text-base">
              Este proyecto fue desarrollado para ofrecer un servicio integral a una veterinaria. La plataforma permite a los administradores publicar y vender productos relacionados con el cuidado de mascotas. Además, los clientes pueden registrarse e iniciar sesión, lo que les permite agendar servicios como baños o visitas con el veterinario, todo a través de una interfaz fácil de usar.
            </p>
          </div>
          <div className="w-[150px] h-[200px] mt-6 mb-4 border-2 border-gray-200 rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img 
              src="/img/logomundihuellas.png" 
              alt="Logo Mundi Huellas" 
              className="w-full h-full object-cover rounded-lg" 
            />
          </div>

          {/* Lenguajes */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 text-neutral-800 text-base flex w-full items-center justify-around p-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="cursor-pointer font-semibold relative group hover:text-neutral-950">
              JavaScript
              <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p className="cursor-pointer font-semibold relative group hover:text-neutral-950">
              PHP
              <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>
          
          {/* Botón Ver Proyecto MundiHuellas */}
          <div className="flex-col flex items-center pb-6 mt-5 bg-gray-600 justify-center w-full">
            <button 
              onClick={abrirModalMundiHuellas}
              className="bg-gray-500 text-white rounded-lg py-3 px-8 mt-5 text-lg font-semibold hover:bg-white hover:text-gray-600 transition-all duration-300 hover:scale-105"
            >
              Ver Proyecto
            </button>
          </div>
        </div>

        {/* Container proyecto 2 */}
        <div className="bg-white rounded-2xl w-full max-w-[400px] h-[95vh] flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden hover:scale-105">
          <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4 tracking-wider">HaulerPro</h1>
          <div className="bg-gray-50 p-4 rounded-xl w-[90%] text-center shadow-inner">
            <p className="text-gray-700 leading-relaxed text-base">
              Este fue mi primer desarrollo web y parte de mi proyecto de grado en el SENA. Creé un software para conectar conductores de carga con clientes que necesitan transporte, permitiendo que los conductores acepten viajes y los clientes soliciten transporte según sus necesidades.
            </p>
          </div>
          <div className="w-[230px] h-[200px] mt-6 mb-4 border-2 border-gray-200 rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img 
              src="/img/haulerpro.jpg" 
              alt="Logo HaulerPro" 
              className="w-full h-full object-cover rounded-lg" 
            />
          </div>
          {/* Lenguajes */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 text-neutral-800 text-base flex w-full items-center justify-around p-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="cursor-pointer font-semibold relative group hover:text-neutral-950">
              JavaScript
              <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p className="cursor-pointer font-semibold relative group hover:text-neutral-950">
              PHP
              <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>
          {/* Botón Ver Proyecto */}
          <div className="flex-col flex items-center pb-6 mt-5 bg-gray-600 justify-center w-full">
            <button 
              onClick={abrirModalHaulerPro}
              className="bg-gray-500 text-white rounded-lg py-3 px-8 mt-5 text-lg font-semibold hover:bg-white hover:text-gray-600 transition-all duration-300 hover:scale-105"
              >
              Ver Proyecto
            </button>
          </div>
        </div>

        {/* Container proyecto 3 */}
        <div className="bg-white rounded-2xl w-full max-w-[400px] h-[95vh] flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden hover:scale-105">
          <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4 tracking-wider">CRM Cobro</h1>
          <div className="bg-gray-50 p-4 rounded-xl w-[90%] text-center shadow-inner">
            <p className="text-gray-700 leading-relaxed text-base">
              Participé en el desarrollo de un CRM para gestionar deudores, facilitando el seguimiento y cobro de deudas. El sistema automatizó el contacto con clientes morosos, permitiendo registrar interacciones, pagos y recordatorios, además de generar reportes detallados, mejorando la eficiencia en la recuperación de deudas y la toma de decisiones estratégicas.
            </p>
          </div>
          <div className="w-[150px] h-[200px] mt-6 mb-4 border-2 border-gray-200 rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img 
              src="/img/CRM.png" 
              alt="Logo CRM Cobro" 
              className="w-full h-full object-cover rounded-lg" 
            />
          </div>
          {/* Lenguajes */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 text-neutral-800 text-base flex w-full items-center justify-around p-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="font-semibold text-neutral-600 transform transition-all duration-200 hover:text-neutral-900 hover:scale-105 cursor-pointer relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-0.5 after:bg-neutral-500 after:transition-all after:duration-300 hover:after:w-full">
              React
            </p>
            <p className="font-semibold text-neutral-600 transform transition-all duration-200 hover:text-neutral-900 hover:scale-105 cursor-pointer relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-0.5 after:bg-neutral-500 after:transition-all after:duration-300 hover:after:w-full">
              Next.js
            </p>
            <p className="font-semibold text-neutral-600 transform transition-all duration-200 hover:text-neutral-900 hover:scale-105 cursor-pointer relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-0.5 after:bg-neutral-500 after:transition-all after:duration-300 hover:after:w-full">
              TypeScript
            </p>
          </div>
          {/* Botón Ver Proyecto */}
          <div className="flex-col flex items-center pb-6 mt-5 bg-gray-600 justify-center w-full">
            <button 
              onClick={abrirModalCrmCobro}
              className="bg-gray-500 text-white rounded-lg py-3 px-8 mt-5 text-lg font-semibold hover:bg-white hover:text-gray-600 transition-all duration-300 hover:scale-105"
              >
              Ver Proyecto
            </button>
          </div>
        </div>
      </div>
      {/* Modal MundiHuellas */}
      <ModalMundiHuellas isOpen={isModalMundiHuellas} onClose={cerrarModalMundiHuellas} />
      {/* Modal CRM Cobro */}
      <ModalCrmCobro isOpenCrm={isModalCrmCobro} onCloseCrm={cerrarModalCrmCobro} />
      {/* Modal HaulerPro */}
      <ModalHaulerPro isOpenHuaulerPro={isModalHaulerPro} onCloseHaulerPro={cerrarModalHaulerPro} />
    </div>
  )
}

export default Proyectos;