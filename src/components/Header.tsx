"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollProgress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    setScrollProgress(scrollProgress);
    setIsScrolled(scrollPosition > 50);
  };

  useEffect(() => {
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

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`
          bg-gray-500/95 backdrop-blur-sm
          flex flex-col items-center 
          py-4 md:py-6 
          transition-all duration-300 
          ${isScrolled ? 'sticky top-0 z-50 shadow-xl' : 'relative shadow-md'}
        `}
      >
        {/* Barra de progreso */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          className="absolute bottom-0 left-0 h-1 bg-blue-400"
        />
        
        {/* Nombre y título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.h1 
            className={`
              text-white font-bold
              transition-all duration-300 
              ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}
            `}
          >
            Jhonny Alejandro Henao
          </motion.h1>
          
          <motion.p 
            className={`
              text-gray-200 mt-2
              transition-all duration-300 
              ${isScrolled ? 'text-sm' : 'text-base md:text-lg'}
            `}
          >
            Desarrollador Web | Backend
          </motion.p>
        </motion.div>

        {/* Menú hamburguesa para móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-4 top-4 text-white p-2"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Navegación */}
        <AnimatePresence>
          <motion.nav 
            className={`
              ${isMenuOpen ? 'flex' : 'hidden md:flex'}
              flex-col md:flex-row 
              gap-4 md:gap-6 
              mt-4 md:mt-6
              w-full md:w-auto
              items-center
            `}
          >
            {['inicio', 'proyectos', 'contacto'].map((section, i) => (
              <motion.a
                key={section}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`
                  bg-gray-600 
                  hover:bg-white hover:text-gray-600 
                  text-white font-medium 
                  py-2 px-6 
                  rounded-lg 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-gray-400 
                  transition-all 
                  duration-300
                  w-[80%] md:w-auto
                  text-center
                  ${isScrolled ? 'text-sm' : 'text-base'}
                `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </motion.nav>
        </AnimatePresence>
      </motion.header>

      {/* Sección de inicio */}
      <motion.section
        id="inicio"
        className="bg-white shadow-lg rounded-2xl p-4 md:p-8 max-w-7xl mx-auto my-6 md:my-10 mt-16 md:mt-24"
      >
        <motion.div
          className="grid md:grid-cols-[3fr_1fr] gap-4 md:gap-6 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Texto principal */}
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
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6">
              Soy Tecnólogo en Análisis y Desarrollo de Software, graduado del
              SENA (Servicio Nacional de Aprendizaje), con experiencia en
              desarrollo full-stack.
            </motion.p>
            <motion.p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Poseo dominio en tecnologías modernas como React, Python y Next.js,
              especializado en construir soluciones escalables.
            </motion.p>
          </motion.div>

          {/* Tecnologías */}
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