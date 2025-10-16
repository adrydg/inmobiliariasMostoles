import { MetadataRoute } from 'next';
import { agencies } from '@/data/agencies';
import { neighborhoods } from '@/data/neighborhoods';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.inmobiliariasmostoles.es';

  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/comparador`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/barrios`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Páginas dinámicas de agencias
  const agencyPages = agencies.map((agency) => ({
    url: `${baseUrl}/comparador/${agency.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Páginas dinámicas de barrios (URLs limpias sin /barrios/)
  const neighborhoodPages = neighborhoods.map((neighborhood) => ({
    url: `${baseUrl}/${neighborhood.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...agencyPages, ...neighborhoodPages];
}
