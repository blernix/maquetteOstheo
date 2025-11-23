'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { CABINET_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Qui suis-je', href: '/qui-suis-je' },
  { name: 'Prestations', href: '/prestations' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Détecter le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar avec infos de contact (desktop uniquement) */}
      <div className="hidden lg:block bg-primary-600 text-white py-2">
        <div className="container">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${CABINET_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-primary-100 transition-colors"
              >
                <Phone size={16} />
                <span>{CABINET_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CABINET_INFO.email}`}
                className="flex items-center gap-2 hover:text-primary-100 transition-colors"
              >
                <Mail size={16} />
                <span>{CABINET_INFO.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Lun - Ven : 9h - 19h | Sam : 9h - 13h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        )}
      >
        <nav className="container" aria-label="Navigation principale">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl transition-transform group-hover:scale-105">
                SM
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-xl text-neutral-900">
                  {CABINET_INFO.firstName} {CABINET_INFO.lastName}
                </span>
                <span className="text-sm text-primary-600">{CABINET_INFO.title}</span>
              </div>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-2',
                    pathname === item.href
                      ? 'text-primary-600'
                      : 'text-neutral-700 hover:text-primary-600'
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Bouton */}
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" size="md">
                Prendre RDV
              </Button>
            </div>

            {/* Bouton menu mobile */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}
