import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CABINET_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Contenu principal du footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Colonne 1 : À propos */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                SM
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-lg">
                  {CABINET_INFO.firstName} {CABINET_INFO.lastName}
                </span>
                <span className="text-sm text-primary-400">{CABINET_INFO.title}</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Cabinet d'ostéopathie à Paris. Spécialisée dans l'accompagnement des femmes enceintes,
              des nourrissons et des sportifs.
            </p>
            <div className="text-sm text-neutral-400 space-y-1">
              <p><strong className="text-white">N° RPPS :</strong> {CABINET_INFO.rpps}</p>
              <p><strong className="text-white">ARS :</strong> {CABINET_INFO.arsRegistration.region}</p>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Qui suis-je', href: '/qui-suis-je' },
                { name: 'Prestations', href: '/prestations' },
                { name: 'Tarifs', href: '/tarifs' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Informations pratiques */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Informations pratiques</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-400">
                  {CABINET_INFO.address.fullAddress}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${CABINET_INFO.phone.replace(/\s/g, '')}`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {CABINET_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${CABINET_INFO.email}`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {CABINET_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-neutral-400">
                  <p>Lun - Ven : 9h - 19h</p>
                  <p>Sam : 9h - 13h</p>
                  <p>Dim : Fermé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 4 : Assurance et informations légales */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Informations légales</h3>
            <div className="text-sm text-neutral-400 space-y-3">
              <div>
                <p className="text-white font-medium mb-1">Assurance RCP</p>
                <p>{CABINET_INFO.insurance.company}</p>
                <p>Police n° {CABINET_INFO.insurance.policyNumber}</p>
                <p className="text-xs mt-1">
                  Garanties : {CABINET_INFO.insurance.guarantees.perIncident} par sinistre
                </p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Diplôme</p>
                <p>{CABINET_INFO.diploma.school}</p>
                <p>Promotion {CABINET_INFO.diploma.year}</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/mentions-legales"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Mentions légales
                </Link>
                {' • '}
                <Link
                  href="/politique-confidentialite"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
            <p>
              © {currentYear} {CABINET_INFO.fullName} - Tous droits réservés
            </p>
            <div className="flex items-center gap-4">
              <p>
                Conformité RGPD et réglementation ostéopathie française
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
