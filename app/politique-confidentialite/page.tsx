import React from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { CABINET_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de protection des données personnelles (RGPD)',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-neutral-600">Dernière mise à jour : 16 novembre 2024</p>
        </div>
      </Section>

      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2>1. Responsable du traitement des données</h2>
          <p><strong>Nom :</strong> {CABINET_INFO.fullName}</p>
          <p><strong>Cabinet d'ostéopathie :</strong> Cabinet {CABINET_INFO.fullName}</p>
          <p><strong>Adresse :</strong> {CABINET_INFO.address.fullAddress}</p>
          <p><strong>Email :</strong> {CABINET_INFO.email}</p>
          <p><strong>Téléphone :</strong> {CABINET_INFO.phone}</p>

          <h2>2. Données collectées et finalités</h2>

          <h3>2.1 Via le formulaire de contact</h3>
          <p><strong>Données collectées :</strong></p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Message</li>
          </ul>

          <p><strong>Finalité :</strong> Répondre à votre demande de contact ou de prise de rendez-vous.</p>
          <p><strong>Base légale :</strong> Consentement (Art. 6.1.a RGPD)</p>
          <p><strong>Durée de conservation :</strong> 3 ans maximum après le dernier contact.</p>

          <h3>2.2 Dossier patient (cabinet uniquement)</h3>
          <p><strong>Données collectées :</strong></p>
          <ul>
            <li>État civil</li>
            <li>Coordonnées</li>
            <li>Informations de santé (antécédents, motif de consultation, examens, traitements)</li>
            <li>Numéro de sécurité sociale (si facturation)</li>
          </ul>

          <p><strong>Finalité :</strong> Assurer votre suivi ostéopathique, garantir la continuité des soins et répondre aux obligations légales.</p>
          <p><strong>Base légale :</strong> Obligation légale (Art. 6.1.c RGPD) + Intérêt public dans le domaine de la santé (Art. 9.2.h RGPD)</p>
          <p><strong>Durée de conservation :</strong> <strong>20 ans</strong> à compter de la dernière consultation (ou jusqu'à vos 28 ans si vous êtes mineur).</p>

          <h2>3. Destinataires des données</h2>
          <p>Vos données personnelles ne sont communiquées à aucun tiers, sauf :</p>
          <ul>
            <li><strong>Obligation légale :</strong> autorités sanitaires, autorités judiciaires sur réquisition</li>
            <li><strong>Coordination des soins :</strong> avec votre consentement explicite, échange avec d'autres professionnels de santé (médecin traitant, kinésithérapeute, etc.)</li>
            <li><strong>Hébergement :</strong> hébergeur du site web {CABINET_INFO.hosting.company} (soumis à obligation de confidentialité)</li>
          </ul>

          <h2>4. Sécurité des données</h2>
          <p>Conformément au RGPD, nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :</p>
          <ul>
            <li>La perte</li>
            <li>Le vol</li>
            <li>L'accès non autorisé</li>
            <li>La divulgation</li>
          </ul>

          <p><strong>Mesures appliquées :</strong></p>
          <ul>
            <li>Accès aux données sécurisé par mot de passe</li>
            <li>Chiffrement des données sensibles</li>
            <li>Sauvegardes régulières</li>
            <li>Hébergement en France</li>
          </ul>

          <p>En cas de violation de données, vous serez informé dans les 72 heures et la CNIL sera notifiée.</p>

          <h2>5. Vos droits (RGPD)</h2>
          <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>

          <h3>Droit d'accès (Art. 15)</h3>
          <p>Vous pouvez demander l'accès à vos données personnelles. Délai de réponse : maximum 8 jours, minimum 48 heures.</p>

          <h3>Droit de rectification (Art. 16)</h3>
          <p>Vous pouvez demander la correction de données inexactes ou incomplètes.</p>

          <h3>Droit à la limitation du traitement (Art. 18)</h3>
          <p>Vous pouvez demander le gel temporaire de vos données en cas de contestation.</p>

          <h3>Droit d'opposition (Art. 21)</h3>
          <p>Vous pouvez vous opposer au traitement de vos données (sauf obligation légale).</p>

          <h3>⚠️ Droit à l'effacement</h3>
          <p><strong>Le droit à l'effacement ne s'applique PAS aux dossiers médicaux</strong> en raison de l'obligation légale de conservation (20 ans) et de l'intérêt public dans le domaine de la santé publique (Art. 17.3 RGPD).</p>

          <h3>Exercer vos droits</h3>
          <p>Pour exercer vos droits, contactez-nous :</p>
          <ul>
            <li><strong>Par email :</strong> <a href={`mailto:${CABINET_INFO.email}`}>{CABINET_INFO.email}</a></li>
            <li><strong>Par courrier :</strong> {CABINET_INFO.address.fullAddress}</li>
          </ul>

          <p>Une réponse vous sera apportée dans un délai maximum d'un mois.</p>

          <h3>Réclamation auprès de la CNIL</h3>
          <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la <strong>CNIL</strong> :</p>
          <ul>
            <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">https://www.cnil.fr</a></li>
            <li>Adresse : 3 Place de Fontenoy, 75007 Paris</li>
          </ul>

          <h2>6. Cookies et traceurs</h2>

          <h3>Cookies strictement nécessaires</h3>
          <p>Ces cookies sont indispensables au fonctionnement du site (navigation, sécurité). Ils ne nécessitent pas votre consentement.</p>

          <h3>Cookies analytiques (Google Analytics)</h3>
          <p>Nous utilisons Google Analytics pour analyser l'audience du site (pages visitées, durée, provenance).</p>
          <p><strong>Votre consentement est requis.</strong> Vous pouvez accepter ou refuser via le bandeau cookies.</p>
          <p><strong>Durée de conservation :</strong> 13 mois maximum.</p>

          <h3>Gestion de vos préférences</h3>
          <p>Vous pouvez modifier vos préférences cookies à tout moment via le lien "Gérer mes cookies" en bas de page.</p>

          <h2>7. Secret professionnel</h2>
          <p>Conformément aux articles 226-13 et 226-14 du Code pénal et à l'article L1110-4 du Code de la Santé Publique, toutes les informations vous concernant sont couvertes par le <strong>secret professionnel</strong>.</p>

          <h2>8. Transfert de données hors UE</h2>
          <p>Vos données personnelles ne sont <strong>jamais transférées</strong> en dehors de l'Union Européenne.</p>

          <h2>9. Modifications de la politique</h2>
          <p>Cette politique de confidentialité peut être modifiée à tout moment. La date de dernière mise à jour figure en haut de cette page.</p>

          <h2>10. Contact</h2>
          <p>Pour toute question relative à la protection de vos données :</p>
          <p><strong>Email :</strong> <a href={`mailto:${CABINET_INFO.email}`}>{CABINET_INFO.email}</a></p>
          <p><strong>Téléphone :</strong> {CABINET_INFO.phone}</p>
          <p><strong>Adresse :</strong> {CABINET_INFO.address.fullAddress}</p>
        </div>
      </Section>
    </>
  );
}
