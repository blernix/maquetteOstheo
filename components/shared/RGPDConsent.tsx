'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function RGPDConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Afficher le bandeau après un petit délai
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container max-w-6xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie size={24} className="text-primary-600" />
                  </div>

                  {/* Contenu */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-2">
                      Respect de votre vie privée
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser
                      le trafic. Les cookies analytiques nécessitent votre consentement.{' '}
                      <a
                        href="/politique-confidentialite"
                        className="text-primary-600 hover:text-primary-700 underline"
                      >
                        En savoir plus
                      </a>
                    </p>

                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={handleAccept}
                        variant="primary"
                        size="sm"
                      >
                        Accepter
                      </Button>
                      <Button
                        onClick={handleDecline}
                        variant="outline"
                        size="sm"
                      >
                        Refuser
                      </Button>
                      <a
                        href="/politique-confidentialite"
                        className="text-sm text-neutral-600 hover:text-neutral-900 underline self-center"
                      >
                        Gérer mes préférences
                      </a>
                    </div>
                  </div>

                  {/* Bouton fermer */}
                  <button
                    onClick={handleDecline}
                    className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors flex-shrink-0"
                    aria-label="Fermer"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
