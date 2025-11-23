'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart, TrendingUp } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CABINET_INFO } from '@/lib/constants';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Écoute et bienveillance',
      description: 'Chaque patient est unique. Je prends le temps de comprendre vos besoins.',
    },
    {
      icon: Award,
      title: 'Formation continue',
      description: 'Je me forme régulièrement aux dernières avancées de l\'ostéopathie.',
    },
    {
      icon: TrendingUp,
      title: 'Approche préventive',
      description: 'Accompagnement dans la prévention et l\'optimisation de votre bien-être.',
    },
  ];

  return (
    <Section background="gradient" padding="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image / Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Placeholder pour la photo de l'ostéopathe */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-primary-200 to-secondary-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-white/50 rounded-full flex items-center justify-center">
                  <span className="text-5xl font-serif font-bold text-primary-600">
                    {CABINET_INFO.firstName[0]}{CABINET_INFO.lastName[0]}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm">Photo professionnelle</p>
              </div>
            </div>
          </div>

          {/* Badge flottant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-medium p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <GraduationCap size={32} className="text-primary-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-600">
                  {CABINET_INFO.experience.years}+
                </p>
                <p className="text-sm text-neutral-600">
                  Années<br />d'expérience
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contenu texte */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-3">
            Qui suis-je ?
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 mb-6">
            {CABINET_INFO.fullName}
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            {CABINET_INFO.experience.description}
          </p>

          {/* Diplôme et certification */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">
                  {CABINET_INFO.diploma.title}
                </p>
                <p className="text-sm text-neutral-600">
                  {CABINET_INFO.diploma.school}
                </p>
                <p className="text-sm text-neutral-600">
                  Promotion {CABINET_INFO.diploma.year}
                </p>
                <p className="text-xs text-primary-600 mt-2">
                  N° RPPS : {CABINET_INFO.rpps}
                </p>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div className="space-y-4 mb-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{value.title}</h4>
                  <p className="text-sm text-neutral-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Button href="/qui-suis-je" variant="primary" size="lg">
            En savoir plus sur mon parcours
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
