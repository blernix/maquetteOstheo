'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CABINET_INFO } from '@/lib/constants';

const MAX_LENGTH = 60;

export interface ProspectIdentity {
  nom: string | null;
  ville: string | null;
  prenom: string | null;
}

const DEFAULT_IDENTITY: ProspectIdentity = {
  nom: null,
  ville: null,
  prenom: null,
};

const ProspectIdentityContext = createContext<ProspectIdentity>(DEFAULT_IDENTITY);

function clean(value: string | null): string | null {
  if (!value) return null;
  const trimmed = value.trim().replace(/\s+/g, ' ');
  if (!trimmed) return null;
  return trimmed.slice(0, MAX_LENGTH);
}

export function useProspectIdentity(): ProspectIdentity {
  return useContext(ProspectIdentityContext);
}

export function ProspectPersonalization({ children }: { children?: React.ReactNode }) {
  const [identity, setIdentity] = useState<ProspectIdentity>(DEFAULT_IDENTITY);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next: ProspectIdentity = {
      nom: clean(params.get('nom')),
      ville: clean(params.get('ville')),
      prenom: clean(params.get('prenom')),
    };

    setIdentity(next);

    if (!next.nom && !next.ville) return;

    const name = next.nom ?? CABINET_INFO.fullName;
    const city = next.ville ?? CABINET_INFO.address.city;

    document.title = `Cabinet d'Ostéopathie ${name} à ${city} | Ostéopathe D.O.`;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        `Ostéopathe D.O. à ${city}. Consultations pour adultes, enfants, nourrissons, femmes enceintes et sportifs. ${CABINET_INFO.experience.years} ans d'expérience. Prise de RDV en ligne.`
      );
    }
  }, []);

  return (
    <ProspectIdentityContext.Provider value={identity}>
      {children}
    </ProspectIdentityContext.Provider>
  );
}

export function ProspectName({ fallback }: { fallback: string }) {
  const { nom } = useProspectIdentity();
  return <>{nom ?? fallback}</>;
}

export function ProspectCity({ fallback }: { fallback: string }) {
  const { ville } = useProspectIdentity();
  return <>{ville ?? fallback}</>;
}

export function ProspectFirstName({ fallback }: { fallback: string }) {
  const { prenom } = useProspectIdentity();
  return <>{prenom ?? fallback}</>;
}

export function ProspectInitials({ fallback }: { fallback: string }) {
  const { nom } = useProspectIdentity();

  if (!nom) return <>{fallback}</>;

  const initials = nom
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);

  return <>{initials || fallback}</>;
}

export function ProspectText({ text }: { text: string }) {
  const { nom, ville } = useProspectIdentity();

  let value = text;

  if (ville) {
    value = value.split(CABINET_INFO.address.city).join(ville);
  }
  if (nom) {
    value = value.split(CABINET_INFO.fullName).join(nom);
  }

  return <>{value}</>;
}
