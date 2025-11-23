'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { COMMON_REASONS } from '@/lib/constants';

export default function Prestations() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Section id="prestations" background="white" padding="lg">
      <SectionHeader
        subtitle="Motifs de consultation"
        title="Pourquoi consulter un ostéopathe ?"
        description="L'ostéopathie s'adresse à tous les âges et traite une grande variété de troubles fonctionnels. Voici les principaux motifs de consultation."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {COMMON_REASONS.map((reason) => {
          // Dynamically get the icon component from lucide-react
          const IconComponent = (LucideIcons as any)[reason.icon] || LucideIcons.Circle;

          return (
            <motion.div key={reason.id} variants={item}>
              <Link href="/prestations" className="block h-full">
                <Card hover padding="lg" className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Icône */}
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent size={28} className="text-primary-600" />
                    </div>

                    {/* Titre */}
                    <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-2">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
                      {reason.description}
                    </p>

                    {/* Lien "En savoir plus" */}
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <span className="text-sm text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        En savoir plus
                        <LucideIcons.ArrowRight size={16} className="transition-transform" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Link
          href="/prestations"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
        >
          Voir toutes les prestations
          <LucideIcons.ArrowRight size={20} />
        </Link>
      </motion.div>
    </Section>
  );
}
