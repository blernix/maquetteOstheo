'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Euro, Clock, CreditCard, FileText, CheckCircle } from 'lucide-react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SERVICES, PAYMENT_METHODS, INSURANCE_PARTNERS, CANCELLATION_POLICY, LEGAL_NOTICES } from '@/lib/constants';

export default function TarifsPage() {
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
            Tarifs des consultations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            Découvrez les tarifs de mes consultations et les modalités de remboursement.
          </motion.p>
        </div>
      </Section>

      {/* Tarifs des consultations */}
      <Section background="white" padding="lg">
        <SectionHeader title="Tarifs des consultations" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover padding="lg" className="h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Euro size={24} className="text-primary-600" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary-600">{service.price}€</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mb-6">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="mt-auto">
                    <Button href="/contact" variant="outline" size="sm" className="w-full">
                      Réserver
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Moyens de paiement */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Moyens de paiement acceptés" />

          <Card padding="lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard size={24} className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Paiements acceptés
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PAYMENT_METHODS.map((method, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 rounded-lg text-sm text-neutral-700"
                    >
                      <CheckCircle size={16} className="text-green-600" />
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText size={24} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Politique d'annulation
                  </h3>
                  <p className="text-neutral-700">{CANCELLATION_POLICY}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Remboursement */}
      <Section background="white" padding="lg">
        <SectionHeader
          title="Remboursement par les mutuelles"
          description={LEGAL_NOTICES.noRefund}
        />

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6 text-center">
            Exemples de prises en charge
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INSURANCE_PARTNERS.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card padding="md" className="h-full">
                  <h4 className="font-semibold text-neutral-900 mb-2">{partner.name}</h4>
                  <p className="text-sm text-neutral-600">{partner.reimbursement}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-primary-50 border border-primary-200 rounded-xl p-6">
            <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
              <FileText size={20} className="text-primary-600" />
              Feuille de soins
            </h4>
            <p className="text-neutral-700">
              Une note d'honoraires vous sera remise à l'issue de chaque consultation pour permettre
              le remboursement par votre mutuelle.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-6">
            Prêt(e) à réserver votre consultation ?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Contactez-moi pour prendre rendez-vous ou pour toute question sur les tarifs.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Prendre rendez-vous
          </Button>
        </div>
      </Section>
    </>
  );
}
