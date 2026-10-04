'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone as PhoneIcon } from 'lucide-react';
import { CABINET_INFO } from '@/lib/constants';
import {
  EMPTY_PROSPECT_IDENTITY,
  resolveProspectContact,
  type ProspectContact,
  type ProspectIdentity,
} from '@/lib/prospect-contact';

export type { ProspectContact, ProspectIdentity } from '@/lib/prospect-contact';

const MAX_LENGTH = 60;

export const DEFAULT_IDENTITY: ProspectIdentity = EMPTY_PROSPECT_IDENTITY;

const ProspectIdentityContext = createContext<ProspectIdentity>(DEFAULT_IDENTITY);

function clean(value: string | null): string | null {
  if (!value) return null;
  const trimmed = value.trim().replace(/\s+/g, ' ');
  if (!trimmed) return null;
  return trimmed.slice(0, MAX_LENGTH);
}

function replaceAll(input: string, search: string, replacement: string): string {
  if (!search) return input;
  return input.split(search).join(replacement);
}

/**
 * Personnalise un texte du décor : nom du praticien, ville, adresse et code
 * postal. Sans paramètre correspondant, le texte d'origine est conservé.
 */
function personalizeText(text: string, identity: ProspectIdentity): string {
  let value = text;

  if (identity.adresse) {
    value = replaceAll(value, CABINET_INFO.address.street, identity.adresse);
  }
  if (identity.code_postal) {
    value = replaceAll(value, CABINET_INFO.address.postalCode, identity.code_postal);
  }
  if (identity.ville) {
    value = replaceAll(
      value,
      `${CABINET_INFO.address.city} dans le 14ème arrondissement`,
      identity.ville
    );
    // Meta « à Paris 14ème » et mots-clés « ostéopathe Paris 14 » : on ne
    // laisse jamais traîner un arrondissement parisien sur une page d'une
    // autre ville (ex. « Nantes 14ème »).
    value = replaceAll(value, `${CABINET_INFO.address.city} 14ème`, identity.ville);
    value = replaceAll(value, `${CABINET_INFO.address.city} 14`, identity.ville);
    value = replaceAll(value, CABINET_INFO.address.city, identity.ville);
  }
  if (identity.nom) {
    value = replaceAll(value, CABINET_INFO.fullName, identity.nom);
    // Évite « Cabinet d'Ostéopathie Cabinet Mieulet » quand le nom fourni
    // contient déjà « Cabinet ».
    value = replaceAll(value, "Cabinet d'Ostéopathie Cabinet", 'Cabinet');
  }

  return value;
}

const META_SELECTORS = [
  'meta[name="description"]',
  'meta[name="author"]',
  'meta[name="creator"]',
  'meta[name="publisher"]',
  'meta[name="keywords"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:site_name"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
];

export function useProspectIdentity(): ProspectIdentity {
  return useContext(ProspectIdentityContext);
}

export function ProspectPersonalization({ children }: { children?: React.ReactNode }) {
  const [identity, setIdentity] = useState<ProspectIdentity>(DEFAULT_IDENTITY);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next = {
      nom: clean(params.get('nom')),
      ville: clean(params.get('ville')),
      prenom: clean(params.get('prenom')),
      email: clean(params.get('email')),
      adresse: clean(params.get('adresse')),
      code_postal: clean(params.get('cp') ?? params.get('code_postal')),
      tel: clean(params.get('tel')),
      acces: clean(params.get('acces')),
    };

    const active = Object.values(next).some((value) => value !== null);
    if (!active) return;

    setIdentity({ ...next, active: true });
  }, []);

  useEffect(() => {
    if (!identity.active) return;

    const apply = () => {
      const nextTitle = personalizeText(document.title, identity);
      if (document.title !== nextTitle) {
        document.title = nextTitle;
      }

      META_SELECTORS.forEach((selector) => {
        const element = document.querySelector(selector);
        const content = element?.getAttribute('content');
        if (!element || !content) return;
        const nextContent = personalizeText(content, identity);
        if (content !== nextContent) {
          element.setAttribute('content', nextContent);
        }
      });

      // Données structurées : on ne régénère pas de <script> supplémentaire
      // (risque de doublon à l'hydratation), on met à jour ceux rendus par le
      // serveur (le layout peut en émettre plusieurs).
      document
        .querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
        .forEach((schemaElement) => {
          if (!schemaElement.textContent) return;
          try {
            const data = JSON.parse(schemaElement.textContent);
            if (identity.nom) data.name = identity.nom;
            if (identity.email) {
              data.email = identity.email;
            } else if (identity.active) {
              delete data.email;
            }
            if (identity.active) {
              delete data.url;
              // Coordonnées GPS de démonstration : jamais sur une page
              // personnalisée (elles pointent sur Paris).
              delete data.geo;
            }
            // Téléphone : celui fourni, sinon masqué sur une page personnalisée.
            if (identity.tel) {
              data.telephone = identity.tel;
            } else if (identity.active) {
              delete data.telephone;
            }
            // Adresse : construite uniquement à partir de ce qui est connu.
            if (identity.adresse || identity.ville || identity.code_postal) {
              data.address = data.address ?? {};
              if (identity.adresse) data.address.streetAddress = identity.adresse;
              if (identity.ville) data.address.addressLocality = identity.ville;
              if (identity.code_postal) data.address.postalCode = identity.code_postal;
            } else if (identity.active) {
              delete data.address;
            }
            const nextSchema = JSON.stringify(data);
            if (schemaElement.textContent !== nextSchema) {
              schemaElement.textContent = nextSchema;
            }
          } catch {
            // JSON-LD illisible : on laisse le contenu d'origine.
          }
        });
    };

    apply();

    // Next.js peut réinjecter le <title> et les meta par défaut après
    // l'hydratation : on réapplique (opération idempotente) tant que le head
    // change.
    const observer = new MutationObserver(apply);
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    });
    const frame = window.requestAnimationFrame(apply);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [identity]);

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
  const identity = useProspectIdentity();
  return <>{personalizeText(text, identity)}</>;
}

/**
 * Adresse email du prospect.
 *
 * - `?email=` fourni : adresse affichée et cliquable (mailto).
 * - Aucun `?email=` mais page personnalisée : libellé neutre « Nous écrire »
 *   pointant vers le formulaire de contact, jamais d'adresse inventée.
 * - Aucun paramètre : adresse de démonstration d'origine, contenu intact.
 */
export function ProspectEmail({
  className,
  withIcon = false,
  iconClassName,
}: {
  className?: string;
  withIcon?: boolean;
  iconClassName?: string;
}) {
  const identity = useProspectIdentity();
  const icon = withIcon ? <Mail className={iconClassName} aria-hidden="true" /> : null;

  if (identity.email) {
    return (
      <a href={`mailto:${identity.email}`} className={className} data-prospect-email="">
        {icon}
        {identity.email}
      </a>
    );
  }

  if (identity.active) {
    return (
      <Link href="/contact" className={className} data-prospect-email="neutral">
        {icon}
        Nous écrire
      </Link>
    );
  }

  return (
    <a
      href={`mailto:${CABINET_INFO.email}`}
      className={className}
      data-prospect-email="fallback"
    >
      {icon}
      {CABINET_INFO.email}
    </a>
  );
}

/**
 * Coordonnées résolues (adresse, téléphone, accès, lien carte) selon l'URL.
 */
export function useProspectContact(): ProspectContact {
  return resolveProspectContact(useProspectIdentity(), {
    street: CABINET_INFO.address.street,
    postalCode: CABINET_INFO.address.postalCode,
    city: CABINET_INFO.address.city,
    phone: CABINET_INFO.phone,
  });
}

/**
 * Adresse postale (bloc multi-lignes). Masquée si aucune adresse ni ville
 * exploitable n'est disponible sur une page personnalisée.
 */
export function ProspectAddress({ className }: { className?: string }) {
  const { showAddress, addressLines } = useProspectContact();
  if (!showAddress) return null;

  return (
    <address className={className} data-prospect-address="">
      {addressLines.map((line, index) => (
        <React.Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </React.Fragment>
      ))}
    </address>
  );
}

/**
 * Adresse sur une seule ligne (« 12 rue X, 31000 Toulouse » ou « Lyon »).
 */
export function ProspectAddressInline() {
  const { showAddress, addressOneLine } = useProspectContact();
  if (!showAddress || !addressOneLine) return null;
  return <>{addressOneLine}</>;
}

/** Affiche `children` uniquement si une adresse (ou une ville) est connue. */
export function IfProspectAddress({ children }: { children: React.ReactNode }) {
  const { showAddress } = useProspectContact();
  if (!showAddress) return null;
  return <>{children}</>;
}

/** Affiche `children` uniquement si un numéro de téléphone est disponible. */
export function IfProspectPhone({ children }: { children: React.ReactNode }) {
  const { phone } = useProspectContact();
  if (!phone) return null;
  return <>{children}</>;
}

/** Affiche `children` uniquement si un accès (métro / bus / parking) est fourni. */
export function IfProspectAcces({ children }: { children: React.ReactNode }) {
  const { acces } = useProspectContact();
  if (!acces) return null;
  return <>{children}</>;
}

/** Affiche `children` uniquement sur la version d'origine (aucun paramètre). */
export function IfNoProspect({ children }: { children: React.ReactNode }) {
  const { active } = useProspectContact();
  if (active) return null;
  return <>{children}</>;
}

/** Affiche `children` uniquement sur une page personnalisée. */
export function IfActive({ children }: { children: React.ReactNode }) {
  const { active } = useProspectContact();
  if (!active) return null;
  return <>{children}</>;
}

/** Numéro de téléphone cliquable. Masqué si aucun numéro n'est disponible. */
export function ProspectPhone({
  className,
  withIcon = false,
  iconClassName,
}: {
  className?: string;
  withIcon?: boolean;
  iconClassName?: string;
}) {
  const { phone, phoneHref } = useProspectContact();
  if (!phone || !phoneHref) return null;

  const icon = withIcon ? <PhoneIcon className={iconClassName} aria-hidden="true" /> : null;

  return (
    <a href={phoneHref} className={className} data-prospect-phone="">
      {icon}
      {phone}
    </a>
  );
}

/**
 * Ligne « Accès » issue du paramètre `?acces=`. Rien si absent.
 */
export function ProspectAcces({ className }: { className?: string }) {
  const { acces } = useProspectContact();
  if (!acces) return null;
  return <p className={className} data-prospect-acces="">{acces}</p>;
}

/**
 * Lien d'itinéraire Google Maps déduit de l'adresse affichée. Rend `null` si
 * aucune localisation n'est connue.
 */
export function ProspectMapLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { mapHref } = useProspectContact();
  if (!mapHref) return null;

  return (
    <a
      href={mapHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-prospect-map=""
    >
      {children}
    </a>
  );
}
