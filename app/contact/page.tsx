'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';
import { CABINET_INFO } from '@/lib/constants';

export default function ContactPage() {
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
            Contactez-moi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            Une question ? Besoin d'un rendez-vous ? Je suis à votre écoute.
          </motion.p>
        </div>
      </Section>

      {/* Formulaire de contact + Infos */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              Envoyez-moi un message
            </h2>
            <ContactForm />
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
              Informations de contact
            </h3>

            <Card padding="md">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Adresse</p>
                  <p className="text-sm text-neutral-600">{CABINET_INFO.address.fullAddress}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${CABINET_INFO.address.coordinates.lat},${CABINET_INFO.address.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:text-primary-700 mt-1 inline-block"
                  >
                    Voir sur la carte →
                  </a>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Téléphone</p>
                  <a
                    href={`tel:${CABINET_INFO.phone.replace(/\s/g, '')}`}
                    className="text-sm text-neutral-600 hover:text-primary-600"
                  >
                    {CABINET_INFO.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Email</p>
                  <a
                    href={`mailto:${CABINET_INFO.email}`}
                    className="text-sm text-neutral-600 hover:text-primary-600 break-all"
                  >
                    {CABINET_INFO.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Horaires</p>
                  <div className="text-sm text-neutral-600 space-y-1">
                    <p>Lun - Ven : 9h - 19h</p>
                    <p>Sam : 9h - 13h</p>
                    <p>Dim : Fermé</p>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">Sur rendez-vous uniquement</p>
                </div>
              </div>
            </Card>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <p className="text-sm text-neutral-700">
                <strong className="text-neutral-900">Réponse rapide :</strong> Je réponds à toutes les
                demandes sous 24h (jours ouvrés).
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Carte */}
      <Section background="gray" padding="lg">
        <SectionHeader title="Comment venir au cabinet ?" />

        <div className="rounded-2xl overflow-hidden shadow-medium mb-8">
          <iframe
            title="Localisation du cabinet"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.3!2d${CABINET_INFO.address.coordinates.lng}!3d${CABINET_INFO.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card padding="lg">
            <h3 className="font-serif font-semibold text-lg text-neutral-900 mb-4">
              Transports en commun
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Métro :</strong> Alésia (ligne 4) - 2 min à pied</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Bus :</strong> Lignes 28, 38, 62, 68</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Arrêt :</strong> Alésia - René Coty</span>
              </li>
            </ul>
          </Card>

          <Card padding="lg">
            <h3 className="font-serif font-semibold text-lg text-neutral-900 mb-4">
              En voiture
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Parking :</strong> Parking Alésia - 5 min à pied</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Stationnement :</strong> Places payantes dans la rue</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Zone :</strong> Stationnement résidentiel</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
