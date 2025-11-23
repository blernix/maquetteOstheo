'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import { CABINET_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
}

export default function MobileNav({ open, onClose, navigation }: MobileNavProps) {
  const pathname = usePathname();

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            {/* Header du menu */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">
                  SM
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-semibold text-lg text-neutral-900">
                    Dr. {CABINET_INFO.lastName}
                  </span>
                  <span className="text-xs text-primary-600">{CABINET_INFO.title}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6" aria-label="Navigation mobile">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'block px-4 py-3 rounded-lg font-medium transition-colors',
                        pathname === item.href
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Informations de contact */}
            <div className="px-6 py-4 border-t border-neutral-200">
              <h3 className="font-serif font-semibold text-lg text-neutral-900 mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${CABINET_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-primary-600" />
                  </div>
                  <span className="text-sm">{CABINET_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${CABINET_INFO.email}`}
                  className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-primary-600" />
                  </div>
                  <span className="text-sm">{CABINET_INFO.email}</span>
                </a>

                <div className="flex items-start gap-3 text-neutral-700">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-primary-600" />
                  </div>
                  <span className="text-sm">{CABINET_INFO.address.fullAddress}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 border-t border-neutral-200">
              <Button href="/contact" variant="primary" size="lg" className="w-full">
                Prendre rendez-vous
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
