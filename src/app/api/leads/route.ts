import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { LeadForm } from '@/types/agency';

export async function POST(request: Request) {
  // Lazy instantiation para evitar errores en build time
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data: LeadForm = await request.json();

    // Validación básica
    if (!data.name || !data.email || !data.phone || !data.propertyType || !data.location) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    if (!data.acceptedTerms) {
      return NextResponse.json(
        { error: 'Debes aceptar los términos y condiciones' },
        { status: 400 }
      );
    }

    // Preparar contenido del email
    const emailContent = `
      <h2>Nuevo Lead - Inmobiliarias Móstoles</h2>

      <h3>Datos del Cliente</h3>
      <ul>
        <li><strong>Nombre:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Teléfono:</strong> ${data.phone}</li>
        <li><strong>Tipo de operación:</strong> ${data.propertyType}</li>
        <li><strong>Ubicación:</strong> ${data.location}</li>
        ${data.budget ? `<li><strong>Presupuesto:</strong> ${data.budget}</li>` : ''}
      </ul>

      ${data.message ? `
      <h3>Mensaje adicional</h3>
      <p>${data.message}</p>
      ` : ''}

      <hr />
      <p style="color: #666; font-size: 12px;">
        Lead recibido desde: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inmobiliariasmostoles.es'}<br />
        Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
      </p>
    `;

    // Enviar email con Resend
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'info@inmobiliarias-mostoles.com',
      subject: `Nuevo Lead: ${data.name} - ${data.propertyType} en ${data.location}`,
      html: emailContent,
      replyTo: data.email,
    });

    if (error) {
      console.error('Error al enviar email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el formulario' },
        { status: 500 }
      );
    }

    // Email de confirmación al usuario
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: data.email,
        subject: 'Hemos recibido tu solicitud - Inmobiliarias Móstoles',
        html: `
          <h2>¡Gracias por tu solicitud, ${data.name}!</h2>

          <p>Hemos recibido tu solicitud de información para <strong>${data.propertyType}</strong> en <strong>${data.location}</strong>.</p>

          <p>Las mejores inmobiliarias de Móstoles revisarán tu solicitud y te contactarán en menos de 24 horas para ofrecerte las mejores opciones del mercado.</p>

          <h3>Resumen de tu solicitud:</h3>
          <ul>
            <li><strong>Operación:</strong> ${data.propertyType}</li>
            <li><strong>Ubicación:</strong> ${data.location}</li>
            ${data.budget ? `<li><strong>Presupuesto:</strong> ${data.budget}</li>` : ''}
          </ul>

          <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>

          <p>Saludos,<br />
          <strong>Equipo Inmobiliarias Móstoles</strong></p>

          <hr />
          <p style="color: #666; font-size: 12px;">
            Este email ha sido enviado desde <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inmobiliariasmostoles.es'}">Inmobiliarias Móstoles</a>
          </p>
        `,
      });
    } catch (confirmError) {
      // Si falla el email de confirmación, no devolvemos error al usuario
      console.error('Error al enviar email de confirmación:', confirmError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Solicitud enviada correctamente',
        id: emailData?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en el endpoint /api/leads:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
