'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Train, Car, Euro } from 'lucide-react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { CABINET_INFO } from '@/lib/constants';

export default function InfoPratiques() {
  const infoCards = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: (
        <>
          <p className="text-neutral-700">{CABINET_INFO.address.street}</p>
          <p className="text-neutral-700">
            {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}
          </p>
          <p className="text-sm text-primary-600 mt-2">Métro : Alésia (ligne 4)</p>
        </>
      ),
      link: `https://www.google.com/maps/search/?api=1&query=${CABINET_INFO.address.coordinates.lat},${CABINET_INFO.address.coordinates.lng}`,
      linkText: 'Voir sur la carte',
    },
    {
      icon: Clock,
      title: 'Horaires d\'ouverture',
      content: (
        <>
          <div className="space-y-1 text-neutral-700">
            <p>Lundi - Vendredi : 9h - 19h</p>
            <p>Samedi : 9h - 13h</p>
            <p>Dimanche : Fermé</p>
          </div>
          <p className="text-sm text-primary-600 mt-2">Sur rendez-vous uniquement</p>
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Contact',
      content: (
        <>
          <a
            href={`tel:${CABINET_INFO.phone.replace(/\s/g, '')}`}
            className="block text-neutral-700 hover:text-primary-600 transition-colors mb-2"
          >
            {CABINET_INFO.phone}
          </a>
          <a
            href={`mailto:${CABINET_INFO.email}`}
            className="block text-neutral-700 hover:text-primary-600 transition-colors text-sm"
          >
            {CABINET_INFO.email}
          </a>
        </>
      ),
    },
    {
      icon: Euro,
      title: 'Tarifs et remboursements',
      content: (
        <>
          <p className="text-neutral-700 mb-2">
            Consultation adulte : 70€<br />
            Consultation enfant : 70€
          </p>
          <p className="text-sm text-neutral-600">
            Non remboursé par la Sécurité Sociale mais pris en charge par de nombreuses mutuelles.
          </p>
        </>
      ),
      link: '/tarifs',
      linkText: 'Voir tous les tarifs',
    },
  ];

  return (
    <Section background="gray" padding="lg">
      <SectionHeader
        subtitle="Informations pratiques"
        title="Comment venir au cabinet ?"
        description="Toutes les informations pour prendre rendez-vous et accéder au cabinet."
      />

      {/* Cartes d'informations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {infoCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card padding="lg" className="h-full">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <card.icon size={24} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-3">
                  {card.title}
                </h3>
                <div className="flex-grow mb-4">{card.content}</div>
                {card.link && (
                  <a
                    href={card.link}
                    target={card.link.startsWith('http') ? '_blank' : undefined}
                    rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {card.linkText} →
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Carte Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-2xl overflow-hidden shadow-medium"
      >
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
      </motion.div>

      {/* Accès transports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-xl p-6 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Train size={24} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Transports en commun</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Métro : Alésia (ligne 4) - 2 min à pied</li>
                <li>• Bus : Lignes 28, 38, 62, 68</li>
                <li>• Arrêt : Alésia - René Coty</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Car size={24} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">En voiture</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Parking Alésia : 5 min à pied</li>
                <li>• Places de stationnement payant dans la rue</li>
                <li>• Zone de stationnement résidentiel</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
