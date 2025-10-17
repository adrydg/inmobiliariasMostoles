import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgencyCard from '@/components/AgencyCard';
import { agencies } from '@/data/agencies';
import { OpenLeadFormButton } from '@/components/LeadFormModal';

export const metadata: Metadata = {
  title: 'Comparador Inmobiliarias Móstoles | Mejores Agencias 2025',
  description: 'Compara las mejores agencias inmobiliarias de Móstoles. Servicios, comisiones, opiniones reales y cobertura. Encuentra la inmobiliaria perfecta para comprar, vender o alquilar tu vivienda en Móstoles.',
  keywords: [
    'comparador inmobiliarias mostoles',
    'mejores inmobiliarias mostoles',
    'comparar comisiones inmobiliarias mostoles',
    'opiniones inmobiliarias mostoles',
    'agencias inmobiliarias mostoles centro',
    'inmobiliarias zona sur madrid',
  ],
  alternates: {
    canonical: 'https://inmobiliarias-mostoles.vercel.app/comparador',
  },
  openGraph: {
    title: 'Comparador de Inmobiliarias en Móstoles',
    description: 'Compara agencias inmobiliarias en Móstoles: servicios, comisiones, opiniones y más.',
    url: 'https://inmobiliarias-mostoles.vercel.app/comparador',
    type: 'website',
  },
};

export default function ComparadorPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Comparador de Agencias Inmobiliarias
            </h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Encuentra y compara las mejores agencias inmobiliarias según tus necesidades.
              Servicios, comisiones, cobertura y valoraciones de clientes reales.
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="bg-white border-b shadow-sm sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Todas las zonas</option>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
                <option value="sevilla">Sevilla</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Ordenar por</option>
                <option value="rating">Mejor valoradas</option>
                <option value="reviews">Más opiniones</option>
                <option value="fees">Menores comisiones</option>
              </select>
            </div>
          </div>
        </section>

        {/* Agencias */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-gray-600">
                Mostrando <span className="font-semibold">{agencies.length}</span> agencias inmobiliarias
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agencies.map((agency) => (
                <AgencyCard key={agency.id} agency={agency} />
              ))}
            </div>

            {/* CTA después de las agencias */}
            <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿No sabes cuál elegir?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Déjanos ayudarte. Recibe ofertas personalizadas de hasta 3 agencias y compara sin compromiso.
              </p>
              <OpenLeadFormButton
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Solicitar Ofertas Gratis
              </OpenLeadFormButton>
            </div>
          </div>
        </section>

        {/* Consejos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Consejos para elegir tu agencia inmobiliaria
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Compara comisiones
                </h3>
                <p className="text-gray-600">
                  Las comisiones pueden variar significativamente entre agencias. Asegúrate de entender
                  qué servicios están incluidos en cada comisión antes de decidir.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Lee las valoraciones
                </h3>
                <p className="text-gray-600">
                  Las opiniones de otros clientes son muy valiosas. Presta atención tanto a las
                  valoraciones positivas como a cómo la agencia responde a las críticas.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Verifica la cobertura
                </h3>
                <p className="text-gray-600">
                  Asegúrate de que la agencia opera en la zona donde buscas o donde está tu propiedad.
                  El conocimiento local es fundamental.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Servicios adicionales
                </h3>
                <p className="text-gray-600">
                  Valora servicios como fotografía profesional, home staging, asesoramiento legal
                  o financiero. Pueden marcar la diferencia en tu experiencia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
