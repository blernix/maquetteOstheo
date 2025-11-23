'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CABINET_INFO } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 via-white to-neutral-50 overflow-hidden">
      {/* Motifs décoratifs en arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300 rounded-full blur-3xl" />
      </div>

      <div className="container relative py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-700">
                Consultations disponibles
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight"
            >
              Cabinet d'Ostéopathie{' '}
              <span className="text-primary-600">
                {CABINET_INFO.firstName} {CABINET_INFO.lastName}
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed"
            >
              Votre ostéopathe D.O. à Paris pour toute la famille : nourrissons, sportifs,
              femmes enceintes, seniors. Une approche globale et personnalisée pour votre bien-être.
            </motion.p>

            {/* Points clés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                `${CABINET_INFO.experience.years} ans d'expérience`,
                'Diplômée D.O. agréée',
                'Formation continue',
                'Approche bienveillante',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-soft"
                >
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  <span className="text-sm font-medium text-neutral-700">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                <Calendar size={20} className="mr-2" />
                Prendre rendez-vous
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href={`tel:${CABINET_INFO.phone.replace(/\s/g, '')}`}
                variant="outline"
                size="lg"
              >
                <Phone size={20} className="mr-2" />
                {CABINET_INFO.phone}
              </Button>
            </motion.div>

            {/* Informations complémentaires */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-neutral-200"
            >
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-neutral-600">
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Adresse</p>
                  <p>{CABINET_INFO.address.fullAddress}</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Horaires</p>
                  <p>Lun - Ven : 9h - 19h</p>
                  <p>Sam : 9h - 13h</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            {/* Placeholder pour l'image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-100 flex items-center justify-center">
                {/* Image placeholder - à remplacer par une vraie photo */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 bg-white/50 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-serif font-bold text-primary-600">SM</span>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    Photo professionnelle<br />du cabinet
                  </p>
                </div>
              </div>
            </div>

            {/* Carte flottante - Avis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-medium p-6 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-neutral-900">5.0</span>
              </div>
              <p className="text-sm text-neutral-600 mb-2">
                "Ostéopathe très professionnelle et à l'écoute. Je recommande vivement !"
              </p>
              <p className="text-xs text-neutral-500">
                Marie D. - <span className="text-primary-600">Google</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
