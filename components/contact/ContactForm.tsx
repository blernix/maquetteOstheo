'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactFormSchema, type ContactFormData, CONTACT_REASONS } from '@/lib/validation';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulation d'envoi (pas de vraie API)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form data:', data);

      // Simuler un succès
      setSubmitStatus('success');
      setSubmitMessage('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
      reset();

      // Réinitialiser le message après 5 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Message de statut */}
      {submitStatus !== 'idle' && (
        <div
          className={`p-4 rounded-lg flex items-start gap-3 ${
            submitStatus === 'success'
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          {submitStatus === 'success' ? (
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
          ) : (
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          )}
          <p
            className={`text-sm ${
              submitStatus === 'success' ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {submitMessage}
          </p>
        </div>
      )}

      {/* Nom et Prénom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            {...register('firstName')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
              errors.firstName ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="Votre prénom"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
              errors.lastName ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="Votre nom"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email et Téléphone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
              errors.email ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="votre@email.fr"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
              errors.phone ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="06 12 34 56 78"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Motif de consultation */}
      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-neutral-700 mb-2">
          Motif de consultation <span className="text-red-500">*</span>
        </label>
        <select
          id="reason"
          {...register('reason')}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
            errors.reason ? 'border-red-500' : 'border-neutral-300'
          }`}
        >
          {CONTACT_REASONS.map((reason) => (
            <option key={reason.value} value={reason.value}>
              {reason.label}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p className="mt-1 text-sm text-red-600">{errors.reason.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
            errors.message ? 'border-red-500' : 'border-neutral-300'
          }`}
          placeholder="Décrivez votre demande..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Consentement RGPD */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('consent')}
            className={`mt-1 w-5 h-5 rounded border-neutral-300 text-primary-600 focus:ring-2 focus:ring-primary-500 ${
              errors.consent ? 'border-red-500' : ''
            }`}
          />
          <span className="text-sm text-neutral-700">
            J'accepte que mes données soient collectées pour répondre à ma demande de contact.{' '}
            <a
              href="/politique-confidentialite"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Lire la politique de confidentialité
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-sm text-red-600 ml-8">{errors.consent.message}</p>
        )}
      </div>

      {/* Bouton submit */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="mr-2 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={20} className="mr-2" />
              Envoyer ma demande
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-neutral-500">
        <span className="text-red-500">*</span> Champs obligatoires
      </p>
    </form>
  );
}
