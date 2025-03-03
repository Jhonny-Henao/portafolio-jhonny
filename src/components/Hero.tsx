"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faArrowDown, faBrain, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Función para desplazarse a la sección de proyectos
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para descargar el CV
  const downloadCV = () => {
    // Crear un enlace para descargar el archivo
    const link = document.createElement('a');
    link.href = '/pdf/Hoja de Vida Jhonny Henao.pdf'; // Ruta al archivo en la carpeta public
    link.download = 'Hoja de Vida Jhoony Henao.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animación para el texto
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const title = "Desarrollador Full Stack";

  // Generar datos de decoración solo del lado del cliente
  const decorationItems = useRef(Array.from({ length: 120 }).map(() => ({
    initialOpacity: 0.1,
    initialScale: 0.1 + 0.3 * 0.5, // Valor medio para evitar discrepancias
    animateOpacity: [0.1, 0.2, 0.1],
    animateScale: [0.1 + 0.3 * 0.5, 0.2 + 0.4 * 0.5, 0.1 + 0.3 * 0.5],
    duration: 4 + 2.5 // Valor medio para evitar discrepancias
  }))).current;
  
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden mt-3">
      {/* Elementos decorativos de fondo - solo renderizar del lado del cliente */}
      {isMounted && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
            {decorationItems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-700 rounded-full"
                initial={{ opacity: item.initialOpacity, scale: item.initialScale }}
                animate={{ 
                  opacity: item.animateOpacity, 
                  scale: item.animateScale
                }}
                transition={{ 
                  duration: item.duration, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          ref={ref}
          className="flex flex-col items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Animación de nombre */}
          <motion.div 
            className="mb-4"
            variants={{ 
              hidden: { opacity: 0, scale: 0.8 }, 
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } } 
            }}
          >
          </motion.div>

          {/* Título animado letra por letra */}
          <motion.h1 
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-center mb-8 text-gray-800"
            variants={textVariants}
          >
            {title.split('').map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Descripción */}
          <motion.p 
            className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-12"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } }
            }}
          >
            Construyendo soluciones digitales modernas, escalables y de alto impacto.
          </motion.p>

          {/* Botones de acción */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } }
            }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="flex-1 py-4 px-8 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-xl font-medium transition-all shadow-xl shadow-gray-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Proyectos
            </motion.button>
            <motion.button
              onClick={downloadCV}
              className="flex-1 py-4 px-8 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl font-medium backdrop-blur-sm transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Descargar CV
            </motion.button>
          </motion.div>

          {/* Sobre Mí */}
          <motion.div 
            className="w-full max-w-4xl bg-white rounded-2xl p-8 border border-gray-100 shadow-2xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.8 } }
            }}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Sobre Mí</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    size="lg"
                    className="text-gray-700"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-gray-800">Tecnólogo</h4>
                <p className="text-gray-600">
                  Análisis y Desarrollo de Software graduado del SENA con 
                  experiencia en desarrollo full-stack.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  <FontAwesomeIcon
                    icon={faBrain}
                    size="lg"
                    className="text-gray-700"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-gray-800">Aprendizaje</h4>
                <p className="text-gray-600">
                  Apasionado por aprender constantemente nuevas tecnologías y
                  mejorar mis habilidades cada día.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="lg"
                    className="text-gray-700"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-gray-800">Desafíos</h4>
                <p className="text-gray-600">
                  Busco constantemente nuevos retos que me permitan crecer
                  profesionalmente y desarrollar soluciones innovadoras.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Flecha hacia abajo - solo mostrar del lado del cliente */}
          {isMounted && (
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ 
                y: [0, 10, 0], 
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
              onClick={scrollToProjects}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon 
                icon={faArrowDown} 
                size="lg" 
                className="text-gray-400" 
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;