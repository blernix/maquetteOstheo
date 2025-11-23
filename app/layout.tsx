import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RGPDConsent from '@/components/shared/RGPDConsent';
import { CABINET_INFO } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `Cabinet d'Ostéopathie ${CABINET_INFO.fullName} à Paris | Ostéopathe D.O.`,
    template: `%s | ${CABINET_INFO.fullName} - Ostéopathe`,
  },
  description: `Ostéopathe D.O. à Paris 14ème. Consultations pour adultes, enfants, nourrissons, femmes enceintes et sportifs. ${CABINET_INFO.experience.years} ans d'expérience. Prise de RDV en ligne.`,
  keywords: [
    'ostéopathe Paris',
    'ostéopathie Paris 14',
    'ostéopathe D.O.',
    'ostéopathie nourrisson Paris',
    'ostéopathie sportive Paris',
    'ostéopathe femme enceinte Paris',
    'mal de dos Paris',
    'ostéopathe pédiatrique',
  ],
  authors: [{ name: CABINET_INFO.fullName }],
  creator: CABINET_INFO.fullName,
  publisher: CABINET_INFO.fullName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://osteo-sophie-martin.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://osteo-sophie-martin.fr',
    title: `Cabinet d'Ostéopathie ${CABINET_INFO.fullName} à Paris`,
    description: `Ostéopathe D.O. à Paris. Spécialisée en ostéopathie périnatale, pédiatrique et sportive. ${CABINET_INFO.experience.years} ans d'expérience.`,
    siteName: `Cabinet ${CABINET_INFO.fullName}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${lora.variable}`}>
      <head>
        {/* JSON-LD Schema.org pour SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Physician',
              name: CABINET_INFO.fullName,
              jobTitle: CABINET_INFO.title,
              url: 'https://osteo-sophie-martin.fr',
              telephone: CABINET_INFO.phone,
              email: CABINET_INFO.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: CABINET_INFO.address.street,
                addressLocality: CABINET_INFO.address.city,
                postalCode: CABINET_INFO.address.postalCode,
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: CABINET_INFO.address.coordinates.lat,
                longitude: CABINET_INFO.address.coordinates.lng,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '13:00',
                },
              ],
              priceRange: '€€',
              medicalSpecialty: 'Osteopathy',
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <RGPDConsent />
      </body>
    </html>
  );
}
