# Configuración de Resend para Envío de Leads

## ¿Qué es Resend?

Resend es un servicio moderno de envío de emails para desarrolladores. Permite enviar emails transaccionales de forma fácil y confiable.

---

## Paso 1: Crear Cuenta en Resend

1. Ve a **https://resend.com**
2. Click en "Sign Up" o "Get Started"
3. Crea tu cuenta (puedes usar GitHub para login rápido)
4. Verifica tu email

---

## Paso 2: Obtener API Key

1. Una vez dentro del dashboard de Resend
2. Ve a **"API Keys"** en el menú lateral
3. Click en **"Create API Key"**
4. Nombre: `Inmobiliarias Fuenlabrada`
5. Permission: `Sending access` (suficiente)
6. Click **"Add"**
7. **Copia la API Key** (se muestra solo una vez)
   - Ejemplo: `re_123abc456def789ghi...`

---

## Paso 3: Configurar Variables de Entorno

### En Desarrollo Local

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores:

```env
RESEND_API_KEY=re_TU_API_KEY_AQUI
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=tu@email.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Importante:**
- `RESEND_API_KEY`: La que copiaste en el paso anterior
- `RESEND_FROM_EMAIL`:
  - Para testing usa: `onboarding@resend.dev` (funciona sin verificar dominio)
  - Para producción: `contacto@tudominio.com` (requiere verificar dominio)
- `RESEND_TO_EMAIL`: Email donde recibirás los leads
- `NEXT_PUBLIC_SITE_URL`: URL de tu sitio

### En Producción (Vercel)

1. Ve al dashboard de Vercel
2. Selecciona tu proyecto `inmobiliarias-fuenlabrada`
3. Ve a **Settings → Environment Variables**
4. Agrega las 4 variables:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | `re_tu_api_key...` | Production |
| `RESEND_FROM_EMAIL` | `onboarding@resend.dev` | Production |
| `RESEND_TO_EMAIL` | `tu@email.com` | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://inmobiliarias-fuenlabrada.vercel.app` | Production |

5. Click en **"Save"**
6. Redeploy el proyecto para que tome las nuevas variables

---

## Paso 4: Verificar que Funciona

### Test Local

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a **http://localhost:3000/contacto**

3. Completa el formulario con datos de prueba

4. Click en **"Solicitar Ofertas Gratis"**

5. Si todo está bien:
   - Verás mensaje de éxito en la web
   - Recibirás un email en `RESEND_TO_EMAIL`
   - El usuario recibirá email de confirmación

### Ver Logs en Resend

1. Ve al dashboard de Resend
2. Click en **"Logs"** en el menú lateral
3. Verás todos los emails enviados
4. Status: `delivered` = ✅ todo bien

---

## Paso 5: Configurar Dominio Personalizado (Opcional pero Recomendado)

Para enviar emails desde tu propio dominio (`contacto@tudominio.com` en vez de `onboarding@resend.dev`):

### 5.1 Agregar Dominio en Resend

1. En el dashboard de Resend, ve a **"Domains"**
2. Click **"Add Domain"**
3. Introduce tu dominio: `tudominio.com` (sin www)
4. Click **"Add"**

### 5.2 Configurar DNS

Resend te dará 3 registros DNS que debes agregar en tu proveedor de dominio (GoDaddy, Namecheap, etc.):

1. **SPF Record (TXT)**
   ```
   Nombre: @
   Tipo: TXT
   Valor: v=spf1 include:_spf.resend.com ~all
   ```

2. **DKIM Record (TXT)**
   ```
   Nombre: resend._domainkey
   Tipo: TXT
   Valor: (valor largo que te da Resend)
   ```

3. **DMARC Record (TXT)**
   ```
   Nombre: _dmarc
   Tipo: TXT
   Valor: v=DMARC1; p=none
   ```

### 5.3 Verificar Dominio

1. Una vez agregados los registros DNS (pueden tardar hasta 48h)
2. En Resend, click en **"Verify"**
3. Cuando esté verificado, aparecerá ✅ Status: Verified

4. Actualiza tus variables de entorno:
   ```env
   RESEND_FROM_EMAIL=contacto@tudominio.com
   ```

---

## Estructura de Emails que se Envían

### Email al Administrador (tú)

Cuando alguien envía el formulario, recibes:

```
Asunto: Nuevo Lead: [Nombre] - [comprar/vender] en [Ubicación]

Contenido:
- Nombre del cliente
- Email
- Teléfono
- Tipo de operación
- Ubicación
- Presupuesto
- Mensaje adicional
- Fecha y hora
```

### Email de Confirmación al Usuario

El usuario recibe automáticamente:

```
Asunto: Hemos recibido tu solicitud - Inmobiliarias Fuenlabrada

Contenido:
- Agradecimiento personalizado
- Resumen de su solicitud
- Tiempo estimado de respuesta (24h)
- Información de contacto
```

---

## Límites y Pricing de Resend

### Plan Gratuito

- **100 emails/día** = 3.000 emails/mes
- Perfecto para comenzar
- No requiere tarjeta de crédito

### Plan Pro ($20/mes)

- **50.000 emails/mes**
- Si recibes muchos leads
- Soporte prioritario

Para una web nueva, el plan gratuito es más que suficiente.

---

## Troubleshooting

### Error: "The specified token is not valid"

**Solución:**
- Verifica que copiaste bien la API Key
- Asegúrate de que está en `.env.local` o en Vercel
- Reinicia el servidor de desarrollo

### No recibo emails

**Solución:**
1. Verifica en Resend → Logs si se envió
2. Revisa carpeta de SPAM
3. Verifica que `RESEND_TO_EMAIL` sea correcto
4. Intenta con otro email

### Email va a SPAM

**Solución:**
- Verifica tu dominio en Resend
- Configura SPF, DKIM y DMARC correctamente
- Usa un dominio personalizado, no `@gmail.com` como remitente

### Error 500 en el formulario

**Solución:**
1. Abre la consola del navegador (F12)
2. Ve a la pestaña Network
3. Mira el error específico del endpoint `/api/leads`
4. Verifica las variables de entorno

---

## Códigos de Ejemplo

### Probar API de Resend Manualmente

```bash
curl -X POST https://api.resend.com/emails \
  -H 'Authorization: Bearer tu_api_key' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "tu@email.com",
    "subject": "Test Email",
    "html": "<p>Este es un email de prueba</p>"
  }'
```

### Ver Logs en Código

Si quieres debug, puedes agregar logs en `/src/app/api/leads/route.ts`:

```typescript
console.log('Enviando email con data:', data);
console.log('Email enviado, ID:', emailData?.id);
```

---

## Próximos Pasos

Una vez que Resend funcione:

1. **Integrar con CRM**:
   - Zapier para enviar leads a tu CRM
   - Integración directa con Pipedrive, HubSpot, etc.

2. **Analytics**:
   - Track tasa de apertura de emails
   - A/B testing de mensajes

3. **Automatización**:
   - Email drip campaigns
   - Follow-ups automáticos

4. **Notificaciones**:
   - Notificación por SMS cuando llega lead
   - Webhook a Slack/Telegram

---

## Links Útiles

- Dashboard Resend: https://resend.com/dashboard
- Documentación: https://resend.com/docs
- API Reference: https://resend.com/docs/api-reference/emails/send-email
- Status: https://status.resend.com/

---

## Soporte

Si tienes problemas:

1. Revisa los logs en Resend
2. Verifica variables de entorno
3. Consulta la documentación oficial
4. Contacta soporte: support@resend.com
