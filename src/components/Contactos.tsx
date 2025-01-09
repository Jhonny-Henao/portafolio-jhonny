"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Briefcase, Instagram, Mail, MapPin } from 'lucide-react';
import { motion } from "framer-motion";

export const Contactos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const contactLinks = [
    {
      href: "https://github.com/Jhonny-Henao",
      icon: faGithub,
      color: "border-gray-800",
      hoverColor: "hover:bg-gray-800",
      textColor: "text-gray-800",
      hoverTextColor: "group-hover:text-white",
      label: "GitHub",
    },
    {
      href: "https://wa.me/3118228988",
      icon: faWhatsapp,
      color: "border-green-500",
      hoverColor: "hover:bg-green-500",
      textColor: "text-green-500",
      hoverTextColor: "group-hover:text-white",
      label: "WhatsApp",
    },
    {
      href: "mailto:jnony100@gmail.com",
      icon: faGoogle,
      color: "border-red-500",
      hoverColor: "hover:bg-red-500",
      textColor: "text-red-500",
      hoverTextColor: "group-hover:text-white",
      label: "Gmail",
    }
  ];

  const infoCards = [
    {
      icon: <Instagram className="w-6 h-6 cursor-pointer"  />, // Asegúrate de usar el ícono adecuado
      title: "Instagram",
      description: "Contáctame en Instagram",
      onClick: () => window.open("https://www.instagram.com/jhonny_henaoh?igsh=MW12czRvd3h1c2F4cQ%3D%3D&utm_source=qr", "_blank")
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      description: "Marinilla, Colombia"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "jnony100@gmail.com"
    }
  ];

  return (
    <motion.div
      id="contacto"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Contáctame</h2>
          <p className="text-xl text-gray-600">Estoy disponible para nuevas oportunidades</p>
        </motion.div>

        {/* Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-100 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={card.onClick} // Añadir onClick aquí
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Links */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center p-6 rounded-lg border-2 ${link.color} ${link.hoverColor} transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className={`text-3xl mb-2 ${link.textColor} ${link.hoverTextColor} transition-colors duration-300`} 
                />
                <p className={`font-medium ${link.textColor} ${link.hoverTextColor} transition-colors duration-300`}>
                  {link.label}
                </p>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer  */}
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-white border border-gray-100 rounded-lg p-8"
            whileHover={{ scale: 1.02 }}
          >
            <motion.p 
              className="flex items-center justify-center text-xl text-gray-700 gap-3"
            >
              Espero ser parte de tu equipo de trabajo
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase size={28} className="text-gray-800 hover:text-amber-900" />
              </motion.div>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contactos;