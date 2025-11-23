'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { TESTIMONIALS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

export default function Testimonials() {
  return (
    <Section background="white" padding="lg">
      <SectionHeader
        subtitle="Témoignages"
        title="Ils m'ont fait confiance"
        description="Découvrez les avis de mes patients sur leur expérience au cabinet."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover padding="lg" className="h-full">
              <div className="flex flex-col h-full">
                {/* Icône quote */}
                <div className="mb-4">
                  <Quote size={32} className="text-primary-200" />
                </div>

                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Commentaire */}
                <p className="text-neutral-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.comment}"
                </p>

                {/* Auteur et source */}
                <div className="pt-4 border-t border-neutral-100">
                  <p className="font-semibold text-neutral-900 mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {formatDate(testimonial.date)} • {' '}
                    <span className="text-primary-600 font-medium">
                      {testimonial.source}
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Note globale et sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-6 bg-white rounded-2xl shadow-soft px-8 py-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-neutral-900">5.0</span>
            </div>
            <p className="text-sm text-neutral-600">
              Note moyenne sur Google et Doctolib
            </p>
          </div>
          <div className="h-12 w-px bg-neutral-200" />
          <div className="text-left">
            <p className="text-2xl font-bold text-neutral-900 mb-1">150+</p>
            <p className="text-sm text-neutral-600">Avis patients</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
