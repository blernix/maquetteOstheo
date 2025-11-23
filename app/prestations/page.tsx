'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SERVICES, LEGAL_NOTICES } from '@/lib/constants';

export default function PrestationsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6"
          >
            Mes prestations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            L'ostéopathie s'adresse à tous les âges de la vie. Découvrez mes différentes consultations
            adaptées à vos besoins spécifiques.
          </motion.p>
        </div>
      </Section>

      {/* Notice importante sur les limites de compétence */}
      <Section background="white" padding="md">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
            <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
              <LucideIcons.Info size={20} className="text-primary-600" />
              Important : Champ de compétences
            </h3>
            <p className="text-sm text-neutral-700">
              {LEGAL_NOTICES.competenceLimits}
            </p>
            <p className="text-sm text-neutral-700 mt-2">
              {LEGAL_NOTICES.referralCases}
            </p>
          </div>
        </div>
      </Section>

      {/* Liste des prestations */}
      <Section background="gray" padding="lg">
        <div className="space-y-16">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Circle;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                id={service.slug}
              >
                <Card padding="lg">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne gauche : Icon + info de base */}
                    <div>
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent size={32} className="text-primary-600" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
                        {service.name}
                      </h2>
                      <p className="text-neutral-600 mb-4">{service.description}</p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <LucideIcons.Clock size={16} className="text-primary-600" />
                          <span className="text-neutral-700">
                            <strong>Durée :</strong> {service.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <LucideIcons.Euro size={16} className="text-primary-600" />
                          <span className="text-neutral-700">
                            <strong>Tarif :</strong> {service.price}€
                          </span>
                        </div>
                      </div>

                      <Button href="/contact" variant="primary" size="md" className="w-full">
                        Prendre rendez-vous
                      </Button>
                    </div>

                    {/* Colonne droite : Détails */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Motifs de consultation */}
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                          <LucideIcons.CheckCircle size={20} className="text-primary-600" />
                          Motifs de consultation
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.motifs.map((motif, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2" />
                              <span className="text-neutral-700 text-sm">{motif}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Déroulement */}
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                          <LucideIcons.FileText size={20} className="text-primary-600" />
                          Déroulement de la séance
                        </h3>
                        <p className="text-neutral-700 leading-relaxed">
                          {service.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-6">
            Besoin d'une consultation ?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Contactez-moi pour discuter de vos besoins et prendre rendez-vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Prendre rendez-vous
            </Button>
            <Button href="/tarifs" variant="outline" size="lg">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
