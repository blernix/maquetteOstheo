'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart, Users, BookOpen, Target } from 'lucide-react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { CABINET_INFO } from '@/lib/constants';
import type { Metadata } from 'next';

export default function QuiSuisJePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
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
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
              {CABINET_INFO.fullName}
            </h1>
            <p className="text-xl text-primary-600 font-medium mb-6">
              {CABINET_INFO.title}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                </div>
                <p className="text-neutral-700">
                  <strong className="text-neutral-900">N° RPPS :</strong> {CABINET_INFO.rpps}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                </div>
                <p className="text-neutral-700">
                  <strong className="text-neutral-900">Enregistrement ARS :</strong>{' '}
                  {CABINET_INFO.arsRegistration.region}, le {CABINET_INFO.arsRegistration.date}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                </div>
                <p className="text-neutral-700">
                  <strong className="text-neutral-900">Expérience :</strong>{' '}
                  {CABINET_INFO.experience.years} ans de pratique
                </p>
              </div>
            </div>

            <Button href="/contact" variant="primary" size="lg">
              Prendre rendez-vous
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Mon parcours */}
      <Section background="white" padding="lg">
        <SectionHeader title="Mon parcours" centered={false} />
        <div className="prose max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            {CABINET_INFO.experience.description}
          </p>

          <Card padding="lg" className="mb-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} className="text-primary-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  Formation et diplômes
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-neutral-900">{CABINET_INFO.diploma.title}</p>
                    <p className="text-neutral-600">{CABINET_INFO.diploma.school}</p>
                    <p className="text-sm text-neutral-500">Promotion {CABINET_INFO.diploma.year}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Formation continue</p>
                    <p className="text-neutral-600">{CABINET_INFO.continuousEducation}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
            Mes spécialisations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {CABINET_INFO.experience.specializations.map((spec, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2" />
                <p className="text-neutral-700">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Ma philosophie */}
      <Section background="gray" padding="lg">
        <SectionHeader
          title={CABINET_INFO.philosophy.title}
          description={CABINET_INFO.philosophy.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CABINET_INFO.philosophy.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover padding="lg" className="h-full">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  {index === 0 && <Heart size={28} className="text-primary-600" />}
                  {index === 1 && <BookOpen size={28} className="text-primary-600" />}
                  {index === 2 && <Target size={28} className="text-primary-600" />}
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-6">
            Envie d'en savoir plus ?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Me contacter
            </Button>
            <Button href="/prestations" variant="outline" size="lg">
              Voir mes prestations
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
