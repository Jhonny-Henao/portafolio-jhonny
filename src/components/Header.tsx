"use client";

import React, { useEffect, useState } from 'react';
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
    
    // Función auxiliar para realizar scroll suave
    const smoothScroll = (targetPosition: number) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duración en milisegundos (1 segundo)
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Función de easing para hacer el movimiento más suave
        const easeInOutCubic = (t: number) => 
          t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;

        window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    if (sectionId === "inicio") {
      smoothScroll(0);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
        smoothScroll(targetPosition);
      }
    }
  };
  
  return (
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
      className={`
        fixed top-0 w-full z-50 
        bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 
        shadow-lg backdrop-blur-lg
        transition-all duration-300
        ${isScrolled ? 'py-2' : 'py-4'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
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
  );
};

export default Header;