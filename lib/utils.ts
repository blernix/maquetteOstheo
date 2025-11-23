import { type ClassValue, clsx } from 'clsx';

// Fonction utilitaire pour merger les classes Tailwind
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Formater un numéro de téléphone (format FR)
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{2})(?=\d)/g, '$1 ');
}

// Formater une date en français
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Générer un slug à partir d'un titre
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Valider un email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Valider un numéro de téléphone français
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^0[1-9][0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Tronquer un texte
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Calculer le temps de lecture (basé sur 200 mots/minute)
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Obtenir les initiales d'un nom
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
