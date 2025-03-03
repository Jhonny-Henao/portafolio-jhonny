"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      name: 'Frontend',
      icon: '🖥️',
      color: 'bg-blue-500',
      skills: [
        { name: 'HTML 5', percentage: 90, icon: '🌐' },
        { name: 'CSS', percentage: 85, icon: '🎨' },
        { name: 'JavaScript', percentage: 88, icon: '📜' },
        { name: 'React', percentage: 85, icon: '⚛️' },
        { name: 'TypeScript', percentage: 80, icon: '📘' },
        { name: 'Tailwind CSS', percentage: 88, icon: '🌊' },
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      color: 'bg-green-600',
      skills: [
        { name: 'Django', percentage: 85, icon: '🎸' },
        { name: 'Laravel', percentage: 75, icon: '🔴' },
        { name: 'Nest.js', percentage: 70, icon: '🪺' },
        { name: 'PostgreSQL', percentage: 85, icon: '🐘' }
      ]
    },
    {
      name: 'Herramientas de Desarrollo',
      icon: '🛠️',
      color: 'bg-purple-600',
      skills: [
        { name: 'Git', percentage: 85, icon: '📊' },
        { name: 'Docker', percentage: 70, icon: '🐳' },
        { name: 'VS Code', percentage: 90, icon: '💻' },
        { name: 'Postman', percentage: 85, icon: '📮' },
        { name: 'GitHub', percentage: 80, icon: '🐙' }
      ]
    },
    {
      name: 'Habilidades Blandas',
      icon: '🧠',
      color: 'bg-yellow-500',
      skills: [
        { name: 'Solución de Problemas', percentage: 90, icon: '🧩' },
        { name: 'Trabajo en Equipo', percentage: 95, icon: '👥' },
        { name: 'Comunicación', percentage: 80, icon: '🗣️' },
        { name: 'Adaptabilidad', percentage: 94, icon: '🔄' }
      ]
    }
  ];

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

  return (
    <motion.div
      className="p-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        variants={itemVariants}
      >
        Mis Habilidades Profesionales
      </motion.h2>
      
      <div className="space-y-10">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex} 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
            </div>
            
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className="mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.2 * skillIndex, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">{skill.icon}</span>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{skill.percentage}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className={`h-2.5 rounded-full ${category.color}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.1),
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-12 text-center"
        variants={itemVariants}
      >
        <p className="text-sm text-gray-600 italic">
          Constantemente mejorando mis habilidades para ofrecer soluciones de alta calidad.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Skills;