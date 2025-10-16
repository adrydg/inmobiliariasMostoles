import { Metadata } from 'next';

export const siteConfig = {
  name: 'Inmobiliarias Móstoles - Vende tu Piso con las Mejores Condiciones',
  description: 'Vende tu piso en Móstoles con las mejores condiciones. Compara ofertas de las mejores agencias inmobiliarias sin salir de casa. Valoración gratuita, sin compromiso y ahorra hasta un 30% en comisiones.',
  url: 'https://www.inmobiliariasmostoles.es',
  ogImage: '/og-image.jpg',
  keywords: [
    // Keywords locales principales
    'inmobiliarias móstoles',
    'agencias inmobiliarias móstoles',
    'comparador inmobiliarias móstoles',
    'ranking inmobiliarias móstoles 2025',

    // Marcas específicas (SEO branded)
    'tecnocasa móstoles',
    'redpiso móstoles',
    'mb gestion inmobiliaria móstoles',
    'hogares group móstoles',

    // Intención de búsqueda - Compra
    'comprar piso móstoles',
    'comprar casa móstoles',
    'pisos en venta móstoles',
    'casas en venta móstoles',
    'viviendas móstoles',
    'pisos baratos móstoles',

    // Intención de búsqueda - Venta
    'vender piso móstoles',
    'vender casa móstoles',
    'vender vivienda móstoles',
    'vender piso rapido móstoles',
    'tasación vivienda móstoles',
    'valoración piso móstoles',
    'valoracion gratuita móstoles',

    // Intención de búsqueda - Alquiler
    'alquilar piso móstoles',
    'pisos alquiler móstoles',
    'alquiler móstoles',

    // Servicios específicos
    'mejores inmobiliarias móstoles',
    'inmobiliarias baratas móstoles',
    'agente inmobiliario móstoles',
    'inmobiliaria sin comisiones móstoles',
    'inmobiliaria comision 0 móstoles',

    // Long-tail keywords
    'comparar agencias inmobiliarias móstoles',
    'opiniones inmobiliarias móstoles',
    'inmobiliarias móstoles centro',
    'inmobiliarias zona sur madrid',

    // Keywords por barrios (SEO hiperlocal)
    'inmobiliarias centro móstoles',
    'pisos el soto móstoles',
    'inmobiliarias villafontana móstoles',
    'pisos parque coimbra móstoles',
    'chalets parque coimbra móstoles',
    'inmobiliarias móstoles sur',
    'pisos universidad rey juan carlos móstoles',
    'inmobiliarias estoril móstoles',
    'pisos móstoles este',
    'inmobiliarias móstoles oeste',
    'pisos parque guadarrama móstoles',
    'inmobiliarias xanadú móstoles',
    'pisos pradillo móstoles',

    // Servicios
    'tasación gratuita móstoles',
    'valoración gratis móstoles',
    'asesor inmobiliario móstoles',
    'home staging móstoles',

    // Intención comercial
    'primera vivienda móstoles',
    'pisos obra nueva móstoles',
    'chalets móstoles',
    'locales comerciales móstoles',
  ],
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | Inmobiliarias Móstoles`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Inmobiliarias Móstoles' }],
  creator: 'Inmobiliarias Móstoles',
  publisher: 'Inmobiliarias Móstoles',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    title: 'Vende tu Piso en Móstoles con las Mejores Condiciones',
    description: 'Compara ofertas de las mejores agencias inmobiliarias de Móstoles. Ahorra hasta un 30% en comisiones. Valoración gratuita desde tu sofá.',
    siteName: 'Inmobiliarias Móstoles',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vende tu Piso en Móstoles con las Mejores Agencias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vende tu Piso en Móstoles - Mejores Condiciones',
    description: 'Compara ofertas de agencias inmobiliarias. Ahorra hasta 30% en comisiones. Valoración gratuita desde casa.',
    images: [siteConfig.ogImage],
    creator: '@inmomostoles',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Agregar después de verificar en Search Console
  },
  category: 'Real Estate',
};
