import { z } from 'zod';

// Schéma de validation pour le formulaire de contact
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères'),

  lastName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),

  email: z
    .string()
    .min(1, 'L\'email est requis')
    .email('Adresse email invalide'),

  phone: z
    .string()
    .min(1, 'Le téléphone est requis')
    .regex(
      /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{2}){4}$/,
      'Numéro de téléphone invalide (format : 0612345678 ou +33612345678)'
    ),

  reason: z
    .string()
    .min(1, 'Veuillez sélectionner un motif de consultation'),

  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),

  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Vous devez accepter la politique de confidentialité pour continuer',
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Motifs de consultation pour le dropdown
export const CONTACT_REASONS = [
  { value: '', label: 'Sélectionnez un motif' },
  { value: 'general', label: 'Consultation générale (adulte)' },
  { value: 'pediatric', label: 'Ostéopathie pédiatrique (nourrisson/enfant)' },
  { value: 'perinatal', label: 'Grossesse ou post-partum' },
  { value: 'sport', label: 'Ostéopathie sportive' },
  { value: 'senior', label: 'Consultation senior' },
  { value: 'info', label: 'Demande d\'information' },
  { value: 'other', label: 'Autre' },
];
