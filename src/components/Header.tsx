"use client"; // Para asegurar que el código se ejecute solo en el lado del cliente

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython  } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Cambia el estado del scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calcula el progreso del scroll
    const scrollProgress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    setScrollProgress(scrollProgress);

    if (scrollPosition > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Efectos de sombra y opacidad dinámicos
  const getShadowIntensity = () => {
    return isScrolled 
      ? `shadow-xl` 
      : `shadow-md hover:shadow-2xl`;
  };

  const getOpacityEffect = () => {
    return isScrolled 
      ? 'bg-opacity-95' 
      : 'bg-opacity-70 hover:bg-opacity-100';
  };

  // Detecta cuando el usuario hace scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Limpia el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para desplazarse suavemente a la sección correspondiente
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "inicio") {
      // Si el id es "home", desplazamos al inicio de la página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Si no es "home", desplazamos a la sección específica
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header
        className={`
          bg-gray-500 
          flex flex-col items-center 
          py-6 rounded-b-3xl 
          transition-all duration-300 
          ${getShadowIntensity()}
          ${getOpacityEffect()}
          ${isScrolled ? 'py-4 sticky top-0 z-10' : 'relative'}
        `}
      >
        {/* Barra de progreso de scroll */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-gray-200 transition-all duration-200" 
          style={{ 
            width: `${scrollProgress}%`, 
            opacity: isScrolled ? 1 : 0.5 
          }}
        />
        
        <div 
          className={`
            text-white font-semibold mt-2 
            transition-all duration-300 
            transform 
            ${isScrolled ? 'text-xl scale-95' : 'text-3xl scale-100'}
          `}
        >
          Jhonny Alejandro Henao
        </div>
        
        <p 
          className={`
            text-lg text-gray-200 mb-4 
            transition-all duration-300 
            ${isScrolled ? 'text-xs opacity-70' : 'text-lg opacity-100'}
          `}
        >
          Desarrollador Web | Backend
        </p>

        <nav className="flex gap-6 mt-6">
          {['inicio', 'proyectos', 'contacto'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className={`
                bg-gray-600 
                hover:bg-white hover:text-gray-600 
                text-white font-semibold 
                py-2 px-6 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                focus:ring-gray-400 
                transition-all 
                duration-300 
                ${isScrolled ? 'text-sm scale-95' : 'text-lg scale-100'}
                hover:scale-105
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      <section id="inicio" className="bg-white shadow-lg rounded-2xl p-8 max-w-7xl mx-auto my-10 mt-24">
        <div className="grid md:grid-cols-[3fr_1fr] gap-6 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Bienvenidos a mi portafolio
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              Soy Tecnólogo en Análisis y Desarrollo de Software, graduado del SENA (Servicio Nacional de Aprendizaje), con experiencia en desarrollo full-stack. Mi enfoque está centrado en crear soluciones tecnológicas avanzadas y eficientes que resuelvan necesidades reales.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Poseo dominio en tecnologías modernas como React, Python y Next.js, con experiencia en el desarrollo de aplicaciones interactivas y la creación de APIs robustas. Me especializo en construir soluciones escalables, optimizando el rendimiento y mejorando la experiencia del usuario en cada etapa del desarrollo.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-gray-50 p-4 rounded-xl w-full">
              <h3 className="text-center font-semibold text-lg text-gray-800 mb-4">
                Tecnologías
              </h3>
              <div className="flex justify-center space-x-4">
                <div className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition-colors">
                  <FontAwesomeIcon icon={faReact} size="2x" className='text-blue-500 hover:scale-110 duration-100'/>
                  <span className="text-sm mt-2">React</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 hover:text-yellow-600 transition-colors">
                  <FontAwesomeIcon icon={faPython} size="2x" className='text-yellow-600 hover:scale-110 duration-100' />
                  <span className="text-sm mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 hover:text-green-600 transition-colors">
                  <FontAwesomeIcon icon={faCode } size="2x" className='text-green-600 hover:scale-110 duration-100' />
                  <span className="text-sm mt-2">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
