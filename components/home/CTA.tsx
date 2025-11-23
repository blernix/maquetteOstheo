'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CABINET_INFO } from '@/lib/constants';

export default function CTA() {
  return (
    <Section background="primary" padding="lg" className="relative overflow-hidden">
      {/* Motifs décoratifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">
              Nouvelle consultation disponible
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
          >
            Prêt(e) à prendre soin de vous ?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée.
            Je suis à votre écoute pour répondre à vos besoins et vous accompagner vers un mieux-être durable.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="group shadow-lg"
            >
              <Calendar size={20} className="mr-2" />
              Prendre rendez-vous
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href={`tel:${CABINET_INFO.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-medium text-lg hover:bg-white/90 transition-all btn-hover-lift shadow-lg"
            >
              <Phone size={20} className="mr-2" />
              {CABINET_INFO.phone}
            </a>
          </motion.div>

          {/* Informations supplémentaires */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 pt-10 border-t border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Réponse rapide</p>
                <p>Confirmation sous 24h</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Flexibilité</p>
                <p>Horaires adaptés à votre emploi du temps</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Accessibilité</p>
                <p>Métro Alésia (ligne 4)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
