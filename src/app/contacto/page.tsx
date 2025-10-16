import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contacto - Solicita Ofertas Gratis Móstoles | Valoración Inmueble',
  description: 'Solicita ofertas gratuitas de las mejores inmobiliarias de Móstoles. Valoración de tu vivienda sin compromiso. Recibe hasta 3 presupuestos en menos de 24 horas. ¡100% Gratis!',
  keywords: [
    'solicitar ofertas inmobiliarias mostoles',
    'contacto inmobiliarias mostoles',
    'valoración gratuita vivienda mostoles',
    'tasación gratis mostoles',
    'presupuesto inmobiliaria mostoles',
    'vender piso mostoles sin comisión',
  ],
  alternates: {
    canonical: 'https://inmobiliarias-mostoles.vercel.app/contacto',
  },
  openGraph: {
    title: 'Solicita Ofertas Gratis | Inmobiliarias Móstoles',
    description: 'Recibe hasta 3 ofertas de inmobiliarias en Móstoles sin compromiso.',
    url: 'https://inmobiliarias-mostoles.vercel.app/contacto',
    type: 'website',
  },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solicita Ofertas Personalizadas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Completa el formulario y recibe propuestas de hasta 3 agencias inmobiliarias
              especializadas en tu zona. Proceso rápido, gratuito y sin compromiso.
            </p>
          </div>

          {/* Beneficios */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Personalizado</h3>
              <p className="text-sm text-gray-600">
                Ofertas adaptadas a tus necesidades específicas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rápido y Gratis</h3>
              <p className="text-sm text-gray-600">
                Respuesta en menos de 24 horas sin coste alguno
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Datos Protegidos</h3>
              <p className="text-sm text-gray-600">
                Tu información segura según LOPD y RGPD
              </p>
            </div>
          </div>

          {/* Formulario */}
          <LeadForm />

          {/* Información adicional */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                ¿Cómo funciona?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Completa el formulario</h3>
                  <p className="text-sm text-gray-600">
                    Solo necesitamos unos datos básicos sobre lo que buscas
                  </p>
                </div>
                <div>
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recibe ofertas</h3>
                  <p className="text-sm text-gray-600">
                    Hasta 3 agencias te contactarán con propuestas personalizadas
                  </p>
                </div>
                <div>
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Elige y ahorra</h3>
                  <p className="text-sm text-gray-600">
                    Compara las ofertas y elige la que más te convenza
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ específico */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ¿Tengo que pagar por este servicio?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    No, nuestro servicio es completamente gratuito para ti. No hay costes ocultos ni comisiones por usar nuestra plataforma.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ¿Me comprometo a algo al solicitar ofertas?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    No, solicitar ofertas no te compromete a nada. Puedes revisar las propuestas y decidir libremente si quieres avanzar con alguna agencia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ¿Cuántas agencias me contactarán?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Recibirás propuestas de hasta 3 agencias inmobiliarias que operan en tu zona y se adaptan a tus necesidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
