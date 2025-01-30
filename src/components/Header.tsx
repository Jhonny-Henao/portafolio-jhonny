"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          transition: { 
            type: "spring", 
            stiffness: 100,
            damping: 20
          }
        }}
        className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 shadow-lg backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-4 w-full py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Título y subtítulo */}
            <motion.div className="text-center md:text-left">
              <motion.h1 
                whileHover={{ scale: 1.05 }}
                className="text-white font-bold text-2xl md:text-3xl"
              >
                Jhonny Alejandro Henao
              </motion.h1>
              
              <motion.div className="text-gray-100 mt-1 text-base md:text-lg">
                Desarrollador Web 
              </motion.div>
            </motion.div>

            {/* Menú hamburguesa - solo visible en móvil */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden mt-4 text-white p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="w-6 h-0.5 bg-white mb-1.5 transition-transform"
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0
                }}
              />
              <motion.div 
                className="w-6 h-0.5 bg-white mb-1.5 transition-opacity"
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <motion.div 
                className="w-6 h-0.5 bg-white transition-transform"
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0
                }}
              />
            </motion.button>

            {/* Navegación */}
            <nav className={`
              ${isMenuOpen ? 'flex' : 'hidden md:flex'}
              flex-col md:flex-row 
              gap-4
              mt-4 md:mt-0
              w-full md:w-auto
              items-center
            `}>
              {['inicio', 'proyectos', 'contacto'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="
                    bg-gradient-to-r from-gray-700 to-gray-800
                    hover:from-gray-800 hover:to-gray-900
                    text-gray-100
                    font-medium 
                    py-2 px-6
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-gray-400 
                    transition-all 
                    duration-300
                    w-full md:w-auto
                    text-center
                    shadow-lg
                    border border-gray-600/30
                  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Espacio para compensar el header fijo */}
      <div className="mt-32" />

      {/* Resto del contenido igual */}
      <motion.section
        id="inicio"
        className="bg-white shadow-lg rounded-2xl p-4 md:p-8 max-w-7xl mx-auto my-6 md:my-10 mt-16 md:mt-24"
      >
        {/* ... resto del contenido igual ... */}
        <motion.div
          className="grid md:grid-cols-[3fr_1fr] gap-4 md:gap-6 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Bienvenidos a mi portafolio
            </motion.h2>
            <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6">
              Soy Tecnólogo en Análisis y Desarrollo de Software, graduado del
              SENA (Servicio Nacional de Aprendizaje), con experiencia en
              desarrollo full-stack.
            </div>
            <div className="text-base md:text-lg text-gray-800 leading-relaxed">
              Poseo dominio en tecnologías modernas como React, Python y Next.js,
              especializado en construir soluciones escalables.
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-4 md:space-y-6 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-gray-50 p-4 rounded-xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-center font-semibold text-lg text-gray-800 mb-4">
                Tecnologías
              </h3>
              <div className="flex justify-center space-x-6">
                {[
                  { icon: faReact, color: "text-blue-500", label: "React" },
                  { icon: faPython, color: "text-yellow-600", label: "Python" },
                  { icon: faCode, color: "text-green-600", label: "Next.js" },
                ].map(({ icon, color, label }) => (
                  <motion.div
                    key={label}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      size="2x"
                      className={color}
                    />
                    <span className="text-sm mt-2">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Header;