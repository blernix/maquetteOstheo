import React from 'react';
import Section from '@/components/ui/Section';
import { CABINET_INFO, REGULATIONS } from '@/lib/constants';

export const metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du cabinet d\'ostéopathie',
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Mentions Légales
          </h1>
        </div>
      </Section>

      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2>Identification du cabinet</h2>
          <p><strong>Nom du praticien :</strong> {CABINET_INFO.fullName}</p>
          <p><strong>Titre professionnel :</strong> {CABINET_INFO.title}</p>
          <p><strong>Numéro RPPS :</strong> {CABINET_INFO.rpps}</p>
          <p><strong>Enregistrement ARS :</strong> {CABINET_INFO.arsRegistration.region}, le {CABINET_INFO.arsRegistration.date}</p>

          <p><strong>Forme juridique :</strong> {CABINET_INFO.legal.businessType}</p>
          <p><strong>SIRET :</strong> {CABINET_INFO.legal.siret}</p>
          <p><strong>TVA :</strong> {CABINET_INFO.legal.tva}</p>

          <p><strong>Adresse du cabinet :</strong><br />{CABINET_INFO.address.fullAddress}</p>
          <p><strong>Téléphone :</strong> {CABINET_INFO.phone}</p>
          <p><strong>Email :</strong> {CABINET_INFO.email}</p>

          <h2>Diplômes et formation</h2>
          <p><strong>Diplôme d'ostéopathie :</strong> {CABINET_INFO.diploma.school}, obtenu en {CABINET_INFO.diploma.year}</p>
          <p><strong>Formation continue :</strong> {CABINET_INFO.continuousEducation}</p>

          <h2>Assurance Responsabilité Civile Professionnelle</h2>
          <p><strong>Compagnie d'assurance :</strong> {CABINET_INFO.insurance.company}</p>
          <p><strong>Adresse :</strong> {CABINET_INFO.insurance.address}</p>
          <p><strong>Numéro de police :</strong> {CABINET_INFO.insurance.policyNumber}</p>
          <p><strong>Téléphone :</strong> {CABINET_INFO.insurance.phone}</p>

          <p><strong>Plafonds de garantie :</strong></p>
          <ul>
            <li>{CABINET_INFO.insurance.guarantees.perIncident} par sinistre</li>
            <li>{CABINET_INFO.insurance.guarantees.perYear} par année d'assurance</li>
          </ul>
          <p>Conformément au décret n°2014-1347 du 10 novembre 2014.</p>

          <h2>Hébergement du site</h2>
          <p><strong>Hébergeur :</strong> {CABINET_INFO.hosting.company}</p>
          <p><strong>Adresse :</strong> {CABINET_INFO.hosting.address}</p>
          <p><strong>Téléphone :</strong> {CABINET_INFO.hosting.phone}</p>

          <h2>Réglementation applicable</h2>
          <p>La profession d'ostéopathe est réglementée par :</p>
          <ul>
            {REGULATIONS.map((reg, index) => (
              <li key={index}><strong>{reg.name}</strong> : {reg.description}</li>
            ))}
          </ul>

          <h3>Limites de compétences</h3>
          <p>Les ostéopathes sont autorisés à pratiquer des manipulations ayant pour seul but de prévenir ou de remédier à des troubles fonctionnels du corps humain, à l'exclusion des pathologies organiques nécessitant une intervention thérapeutique, médicale, chirurgicale, médicamenteuse ou par agents physiques.</p>

          <p>L'ostéopathe réfère le patient vers un médecin dans les cas suivants :</p>
          <ul>
            <li>Symptômes nécessitant un diagnostic ou un traitement médical</li>
            <li>Persistance ou aggravation des symptômes</li>
            <li>Troubles excédant son champ de compétences</li>
          </ul>

          <h2>Secret professionnel</h2>
          <p>Conformément aux articles 226-13 et 226-14 du Code pénal, l'ostéopathe est soumis au secret professionnel.</p>

          <h2>Propriété intellectuelle</h2>
          <p>Le contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de {CABINET_INFO.fullName}, sauf mention contraire.</p>
          <p>Toute reproduction ou utilisation sans autorisation préalable est strictement interdite.</p>

          <h2>Crédits</h2>
          <p><strong>Conception et développement :</strong> Site de démonstration Next.js</p>
          <p><strong>Icônes :</strong> Lucide React</p>
        </div>
      </Section>
    </>
  );
}
