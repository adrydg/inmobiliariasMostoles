import { Agency } from '@/types/agency';

// Schema.org para SEO estructurado
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Inmobiliarias Móstoles',
    description: 'Comparador de agencias inmobiliarias en Móstoles. Encuentra las mejores inmobiliarias para comprar, vender o alquilar tu vivienda.',
    url: 'https://www.inmobiliariasmostoles.es',
    logo: 'https://www.inmobiliariasmostoles.es/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Móstoles',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    areaServed: {
      '@type': 'City',
      name: 'Móstoles',
      containedIn: {
        '@type': 'AdministrativeArea',
        name: 'Madrid',
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['Spanish', 'es'],
    },
    sameAs: [
      'https://www.facebook.com/inmobiliarias.mostoles',
      'https://www.twitter.com/inmomostoles',
    ],
  };
}

export function generateRealEstateAgencySchema(agency: Agency) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: agency.name,
    description: agency.description,
    url: agency.website,
    telephone: agency.contactPhone,
    email: agency.contactEmail,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: agency.rating,
      reviewCount: agency.reviewsCount,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: agency.coverage.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
