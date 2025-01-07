import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons'; // Iconos de GitHub, WhatsApp y Google (Gmail)
import { Briefcase } from 'lucide-react';

export const Contactos = () => {
  return (
    <div id="contacto" className="bg-gray-100 h-[70vh] w-full flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contáctame</h1>

      {/* Contenedor para los iconos de contacto */}
      <div className="flex space-x-8 text-4xl">

        {/* GitHub */}
        <a
          href="https://github.com/Jhonny-Henao"  // Cambia esto por tu enlace de GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition-all duration-100 hover:scale-110"
        >
          <FontAwesomeIcon icon={faGithub} /> {/* Icono de GitHub */}
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/3118228988"  // Cambia esto por tu enlace de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition-all duration-100 hover:scale-110"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> {/* Icono de WhatsApp */}
        </a>

        {/* Gmail */}
        <a
          href="mailto:jnony100@gmail.com"  // Cambia esto por tu correo electrónico
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-500 transition-all duration-100 hover:scale-110"
        >
          <FontAwesomeIcon icon={faGoogle} /> {/* Icono de Gmail */}
        </a>

      </div>

       {/* Optional: Additional contact information */}
      <div className="mt-6 text-center text-gray-600">
        <p className="flex items-center justify-center text-lg">
          Espero ser parte de tu equipo de trabajo.
          <Briefcase size={34} className="ml-2 hover:scale-105 text-black hover:text-amber-900 duration-100" /> 
        </p>
      </div>

    </div>
  );
};

export default Contactos;
