"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ModalMundiHuellas from "@/components/ModalMundiHuellas";
import ModalCrmCobro from '@/components/ModalCrmCobro';
import ModalHaulerPro from "@/components/ModalHaulerPro";

export const Proyectos: React.FC = () => {
  const [isModalMundiHuellas, setIsModalMundiHuellas] = useState(false);
  const [isModalCrmCobro, setIsModalCrmCobro] = useState(false);
  const [isModalHaulerPro, setIsModalHaulerPro] = useState(false);

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    if (isModalMundiHuellas || isModalCrmCobro || isModalHaulerPro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalMundiHuellas, isModalCrmCobro, isModalHaulerPro]);

  const projects = [
    {
      title: "Mundi Huellas",
      description: "Este proyecto fue desarrollado para ofrecer un servicio integral a una veterinaria. La plataforma permite a los administradores publicar y vender productos relacionados con el cuidado de mascotas. Además, los clientes pueden registrarse e iniciar sesión, lo que les permite agendar servicios como baños o visitas con el veterinario, todo a través de una interfaz fácil de usar.",
      image: "/img/logomundihuellas.png",
      imageWidth: "180px",
      technologies: ["JavaScript", "PHP"],
      onOpen: () => setIsModalMundiHuellas(true)
    },
    {
      title: "HaulerPro",
      description: "Este fue mi primer desarrollo web y parte de mi proyecto de grado en el SENA. Creé un software para conectar conductores de carga con clientes que necesitan transporte, permitiendo que los conductores acepten viajes y los clientes soliciten transporte según sus necesidades.",
      image: "/img/haulerpro.jpg",
      imageWidth: "218px",
      technologies: ["JavaScript", "PHP"],
      onOpen: () => setIsModalHaulerPro(true)
    },
    {
      title: "CRM Cobro",
      description: "Participé en el desarrollo de un CRM para gestionar deudores, facilitando el seguimiento y cobro de deudas. El sistema automatizó el contacto con clientes morosos, permitiendo registrar interacciones, pagos y recordatorios, además de generar reportes detallados, mejorando la eficiencia en la recuperación de deudas y la toma de decisiones estratégicas.",
      image: "/img/CRM.png",
      imageWidth: "180px",
      technologies: ["React", "Next.js", "TypeScript"],
      onOpen: () => setIsModalCrmCobro(true)
    }
  ];

  const deployedProjects = [
    {
      title: "Movie App",
      description: "Aplicación web de películas que permite a los usuarios explorar un catálogo extenso de películas, ver detalles, calificaciones y descripciones. Desarrollada con Next.js y la API de TMDB, ofrece una experiencia fluida y moderna para los amantes del cine.",
      image: "/img/movie-app.png",
      imageWidth: "400px",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      link: "https://movie-app-git-main-jhonny-henaos-projects.vercel.app/page?page=1"
    },
    {
      title: "Cubatas Licorera",
      description: "Plataforma de e-commerce para una licorera, que permite a los usuarios explorar un catálogo de bebidas, ver detalles de productos y realizar pedidos. Diseñada con una interfaz moderna y amigable para mejorar la experiencia de compra online.",
      image: "/img/cubatas.png",
      imageWidth: "400px",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      link: "https://cubatas-licorera.vercel.app/"
    }
  ];

  return (
    <div 
      id="proyectos" 
      className="min-h-screen bg-gradient-to-b from-gray-400 to-gray-500 py-12"
    >
      <motion.h1 
        className="text-4xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyectos
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-800 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h2>

            <motion.div 
              className="bg-gray-50 p-4 rounded-xl mb-6"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-gray-700 text-base">
                {project.description}
              </p>
            </motion.div>

            <motion.div 
              className="flex justify-center mb-6"
              variants={imageVariants}
              whileHover="hover"
            >
              <div 
                className="rounded-lg overflow-hidden"
                style={{ width: project.imageWidth }}
              >
                <motion.img 
                  src={project.image}
                  alt={`Logo ${project.title}`}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-xl p-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-center gap-4">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="text-gray-600 font-medium"
                    whileHover={{ scale: 1.1, color: "#374151" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.button
              onClick={project.onOpen}
              className="w-full bg-gray-600 text-white rounded-lg py-3 text-lg font-medium hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Proyecto
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Sección de proyectos desplegados */}
      <div className="max-w-7xl mx-auto mt-12">
        <motion.h2 
          className="text-3xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Proyectos Desplegados
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {deployedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-800 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                {project.title}
              </motion.h2>

              <motion.div 
                className="bg-gray-50 p-4 rounded-xl mb-6"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-gray-700 text-base">
                  {project.description}
                </p>
              </motion.div>

              <motion.div 
                className="flex justify-center mb-6"
                variants={imageVariants}
                whileHover="hover"
              >
                <div 
                  className="rounded-lg overflow-hidden"
                  style={{ width: project.imageWidth }}
                >
                  <motion.img 
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="bg-gray-50 rounded-xl p-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center gap-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-gray-600 font-medium"
                      whileHover={{ scale: 1.1, color: "#374151" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-600 text-white rounded-lg py-3 text-lg font-medium hover:bg-gray-700 transition-colors text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visitar Sitio
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>

      <ModalMundiHuellas isOpen={isModalMundiHuellas} onClose={() => setIsModalMundiHuellas(false)} />
      <ModalCrmCobro isOpenCrm={isModalCrmCobro} onCloseCrm={() => setIsModalCrmCobro(false)} />
      <ModalHaulerPro isOpenHuaulerPro={isModalHaulerPro} onCloseHaulerPro={() => setIsModalHaulerPro(false)} />
    </div>
  );
};

export default Proyectos;