# Guía de Deploy - Inmobiliarias Fuenlabrada

## Paso 1: Subir a GitHub

### Configurar Git

```bash
cd comparador-inmobiliarias

# Inicializar repositorio (si no está inicializado)
git init

# Configurar usuario (si es necesario)
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Initial commit: Comparador de inmobiliarias Fuenlabrada con SEO optimizado"

# Conectar con el repositorio remoto
git remote add origin https://github.com/adrydg/inmobiliarias_fuenlabrada.git

# Verificar rama principal (main o master)
git branch -M main

# Subir al repositorio
git push -u origin main
```

Si el repositorio ya existe en GitHub, es posible que necesites hacer:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Paso 2: Deploy en Vercel

### Opción A: Desde la web de Vercel (Recomendado)

1. Ve a https://vercel.com
2. Inicia sesión con tu cuenta (puedes usar GitHub)
3. Click en "Add New Project"
4. Importa el repositorio: `adrydg/inmobiliarias_fuenlabrada`
5. Configura el proyecto:
   - **Project Name**: `inmobiliarias-fuenlabrada`
   - **Framework Preset**: Next.js (se detecta automáticamente)
   - **Root Directory**: `./` (por defecto)
   - **Build Command**: `npm run build` (por defecto)
   - **Output Directory**: `.next` (por defecto)

6. Variables de entorno (opcional por ahora):
   - No necesitas configurar nada inicialmente

7. Click en "Deploy"
8. Espera 2-3 minutos mientras Vercel construye y despliega

### Opción B: Desde la terminal con Vercel CLI

```bash
# Instalar Vercel CLI (solo la primera vez)
npm install -g vercel

# Navegar al proyecto
cd comparador-inmobiliarias

# Login en Vercel
vercel login

# Deploy
vercel

# Durante el proceso te preguntará:
# - Set up and deploy? → Yes
# - Which scope? → Tu cuenta
# - Link to existing project? → No
# - What's your project's name? → inmobiliarias-fuenlabrada
# - In which directory is your code located? → ./
# - Want to override settings? → No

# Deploy a producción
vercel --prod
```

## Paso 3: Configurar dominio personalizado (Opcional)

Si tienes un dominio propio:

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Agregar tu dominio (ej: `inmobiliarias-fuenlabrada.com`)
4. Seguir las instrucciones para configurar DNS

Si no tienes dominio, Vercel te da uno automáticamente:
- `inmobiliarias-fuenlabrada.vercel.app`

## Paso 4: Post-Deploy - Optimizaciones SEO

### 4.1 Google Search Console

1. Ve a https://search.google.com/search-console
2. Agrega tu propiedad (URL de Vercel)
3. Verifica la propiedad con el meta tag de verificación
4. Actualiza el código en `src/lib/metadata.ts`:
   ```typescript
   verification: {
     google: 'TU_CODIGO_VERIFICACION', // Reemplazar
   }
   ```
5. Haz commit y push de los cambios
6. En Search Console:
   - Envía el sitemap: `https://tu-dominio.vercel.app/sitemap.xml`
   - Solicita indexación de las páginas principales

### 4.2 Google Analytics (Opcional)

1. Crea una propiedad en https://analytics.google.com
2. Copia el código de medición (G-XXXXXXXXXX)
3. Agrega el script en `src/app/layout.tsx` en el `<head>`:

```typescript
<head>
  {/* ... otros scripts ... */}
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `,
    }}
  />
</head>
```

### 4.3 Variables de entorno en Vercel

Si necesitas agregar variables de entorno:

1. Ve a Project Settings → Environment Variables
2. Agrega las variables necesarias
3. Redeploy el proyecto

### 4.4 Actualizar Open Graph Image

Para generar una imagen OG personalizada:

1. Crea una imagen 1200x630px con el logo y texto
2. Súbela a `/public/og-image.jpg`
3. Commit y push

## Paso 5: Actualizaciones futuras

Cada vez que hagas cambios:

```bash
# Hacer cambios en el código
# Agregar archivos
git add .

# Commit
git commit -m "Descripción de los cambios"

# Push a GitHub
git push origin main
```

Vercel desplegará automáticamente los cambios en cuanto detecte el push a GitHub.

## Comandos útiles

### Git
```bash
git status                 # Ver estado del repositorio
git log --oneline         # Ver historial de commits
git branch                # Ver ramas
git pull origin main      # Traer cambios del remoto
```

### Vercel
```bash
vercel                    # Deploy preview
vercel --prod             # Deploy a producción
vercel logs               # Ver logs
vercel env ls             # Listar variables de entorno
```

## Checklist Post-Deploy

- [ ] Sitio accesible en Vercel
- [ ] Todas las páginas cargan correctamente (/, /comparador, /contacto)
- [ ] Formulario de contacto funcional
- [ ] Sitemap.xml accesible: `/sitemap.xml`
- [ ] Robots.txt accesible: `/robots.txt`
- [ ] Metadata correcta en todas las páginas (inspeccionar con F12)
- [ ] Open Graph funcionando (probar en https://www.opengraph.xyz/)
- [ ] Responsive en móvil (probar con DevTools)
- [ ] Google Search Console configurado
- [ ] Sitemap enviado a Search Console

## Troubleshooting

### Error: Build falló
- Revisar los logs en Vercel
- Asegúrate de que `npm run build` funciona localmente
- Verifica que todas las dependencias estén en `package.json`

### Error: Página 404
- Verifica que las rutas en Next.js estén correctas
- Asegúrate de que los archivos estén en `/src/app/`

### Error: Git push rejected
```bash
git pull origin main --rebase
git push origin main
```

### Cambiar URL después del deploy
Si necesitas cambiar la URL en los metadatos después del deploy:
1. Actualiza todos los archivos con la nueva URL
2. Haz commit y push
3. Vercel redesplegará automáticamente

## Soporte

- Documentación Next.js: https://nextjs.org/docs
- Documentación Vercel: https://vercel.com/docs
- GitHub: https://docs.github.com
