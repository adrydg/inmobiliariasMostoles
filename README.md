# Comparador Inmobiliario - Next.js

Plataforma web para comparar agencias inmobiliarias y captar leads, optimizada para SEO y conversión.

## Características

- **SEO Optimizado**: Metadata completa, Schema.org, sitemap.xml, robots.txt
- **Captación de Leads**: Formulario optimizado para convertir visitantes
- **Responsive**: Diseño adaptado a todos los dispositivos
- **Performance**: Next.js 14 con App Router para máximo rendimiento
- **TypeScript**: Tipado fuerte para mejor mantenibilidad

## Estructura del Proyecto

```
src/
├── app/                    # Páginas de la aplicación (App Router)
│   ├── layout.tsx         # Layout principal con metadata SEO
│   ├── page.tsx           # Página de inicio
│   ├── comparador/        # Página del comparador
│   ├── contacto/          # Página de contacto con formulario
│   ├── sitemap.ts         # Sitemap dinámico
│   └── robots.ts          # Configuración de robots.txt
├── components/            # Componentes reutilizables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AgencyCard.tsx     # Tarjeta de agencia
│   └── LeadForm.tsx       # Formulario de captación
├── data/                  # Datos de ejemplo
│   └── agencies.ts        # Lista de agencias
├── lib/                   # Utilidades y configuración
│   ├── metadata.ts        # Configuración SEO base
│   └── schema.ts          # Schemas de Schema.org
└── types/                 # Definiciones de TypeScript
    └── agency.ts          # Tipos de datos
```

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **SEO**: Metadata API, Schema.org
- **Formularios**: React Hook Form (implementación futura)

## Comenzar

### Instalación

```bash
cd comparador-inmobiliarias
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
npm run build
npm start
```

## Configuración SEO

### 1. Actualizar dominio

Edita los siguientes archivos con tu dominio real:

- `src/lib/metadata.ts` → `siteConfig.url`
- `src/app/sitemap.ts` → `baseUrl`
- `src/app/robots.ts` → `baseUrl`

### 2. Google Search Console

1. Registra tu sitio en [Google Search Console](https://search.google.com/search-console)
2. Copia el código de verificación
3. Actualiza `src/lib/metadata.ts` → `verification.google`

### 3. Meta Tags Sociales

Actualiza en `src/lib/metadata.ts`:
- `twitter.creator` → Tu usuario de Twitter
- `sameAs` en `src/lib/schema.ts` → Tus redes sociales

### 4. Google Analytics (opcional)

Agrega tu código de Google Analytics en `src/app/layout.tsx`

## Optimización SEO Implementada

### Metadata
- ✅ Title templates dinámicos
- ✅ Meta descriptions únicas por página
- ✅ Keywords relevantes
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs

### Schema.org
- ✅ Organization schema
- ✅ RealEstateAgent schema
- ✅ BreadcrumbList schema
- ✅ FAQPage schema
- ✅ AggregateRating schema

### Técnico
- ✅ Sitemap.xml dinámico
- ✅ Robots.txt configurado
- ✅ HTML semántico (h1, h2, nav, main, footer)
- ✅ Imágenes con alt text
- ✅ Links internos optimizados
- ✅ Idioma español configurado

### Performance
- ✅ Server Components por defecto
- ✅ Fuentes optimizadas (Google Fonts)
- ✅ CSS optimizado con Tailwind

## Captación de Leads

El formulario de contacto incluye:

- Validación de campos requeridos
- Tipos de propiedad (comprar/vender/alquilar)
- Checkbox de términos y condiciones
- Estados de envío (loading, success, error)
- Diseño responsive y accesible

### Integración Backend (Pendiente)

Para conectar el formulario con un backend real:

1. Crea un API route en `src/app/api/leads/route.ts`
2. Conecta con tu CRM o servicio de email
3. Actualiza el método `handleSubmit` en `LeadForm.tsx`

Ejemplo de API route:

```typescript
// src/app/api/leads/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Enviar a tu CRM, base de datos, email, etc.
  // await sendToMailchimp(data);
  // await saveToDatabase(data);

  return NextResponse.json({ success: true });
}
```

## Próximos Pasos

### SEO Avanzado
- [ ] Blog con artículos SEO-optimizados
- [ ] Páginas de ciudad/zona (SEO local)
- [ ] Calculadoras (hipotecas, comisiones)
- [ ] Testimonios de clientes

### Funcionalidad
- [ ] API para gestión de leads
- [ ] Panel de administración
- [ ] Integración con CRM
- [ ] Sistema de valoraciones
- [ ] Comparador interactivo (checkboxes)
- [ ] Filtros avanzados

### Marketing
- [ ] Pixel de Facebook/Google Ads
- [ ] Google Analytics 4
- [ ] Hotjar o similar (heatmaps)
- [ ] Email marketing (Mailchimp, SendGrid)

## Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Otros Proveedores

El proyecto es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Google Cloud
- Digital Ocean

## Soporte

Para preguntas o problemas, consulta la [documentación de Next.js](https://nextjs.org/docs).

## Licencia

MIT
