import { Metadata } from 'next';
import Link from 'next/link';
import { getAllNeighborhoods } from '@/data/neighborhoods';
import { OpenLeadFormButton } from '@/components/LeadFormModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Barrios de Móstoles - Guía Completa de Inmobiliarias por Zona',
  description:
    'Descubre todos los barrios de Móstoles: precios, características, servicios e inmobiliarias de cada zona. Móstoles Centro, Loranca, La Serna, El Molino, Hospital, Vivero, La Avanzada y Parque de los Estados.',
  keywords: [
    'barrios mostoles',
    'zonas mostoles',
    'donde vivir mostoles',
    'mejores barrios mostoles',
    'inmobiliarias por barrio mostoles',
    'precios por barrio mostoles',
    'loranca mostoles',
    'mostoles centro',
    'la serna mostoles',
  ],
};

export default function BarriosPage() {
  const neighborhoods = getAllNeighborhoods();

  // Ordenar por población (más grande primero)
  const sortedNeighborhoods = [...neighborhoods].sort((a, b) => b.population - a.population);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Barrios de Móstoles
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Explora todos los barrios de Móstoles: características, precios, servicios e
            inmobiliarias especializadas en cada zona. Encuentra tu hogar ideal.
          </p>
        </div>
      </section>

      {/* Comparativa Rápida */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Comparativa de Barrios (2025)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Barrio
                  </th>
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Habitantes
                  </th>
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Precio Venta (€/m²)
                  </th>
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Precio Alquiler (€/m²)
                  </th>
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Características
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedNeighborhoods.map((neighborhood) => (
                  <tr key={neighborhood.id} className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4">
                      <Link
                        href={`/${neighborhood.slug}`}
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        {neighborhood.name}
                      </Link>
                    </td>
                    <td className="border-b border-gray-200 p-4 text-gray-700">
                      {neighborhood.population.toLocaleString()}
                    </td>
                    <td className="border-b border-gray-200 p-4 text-gray-700 font-semibold">
                      {neighborhood.averagePricePerM2.sale}
                    </td>
                    <td className="border-b border-gray-200 p-4 text-gray-700 font-semibold">
                      {neighborhood.averagePricePerM2.rent}
                    </td>
                    <td className="border-b border-gray-200 p-4 text-gray-600 text-sm">
                      {neighborhood.keyFeatures[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Grid de Barrios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Guía Detallada por Barrio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNeighborhoods.map((neighborhood) => (
              <article
                key={neighborhood.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{neighborhood.name}</h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span>👥 {neighborhood.population.toLocaleString()}</span>
                    <span>📍 {neighborhood.area}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{neighborhood.description}</p>

                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-blue-50 p-2 rounded">
                        <div className="text-xs text-gray-600">Venta</div>
                        <div className="font-bold text-blue-600">
                          {neighborhood.averagePricePerM2.sale}
                        </div>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <div className="text-xs text-gray-600">Alquiler</div>
                        <div className="font-bold text-green-600">
                          {neighborhood.averagePricePerM2.rent}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Ventajas:</h4>
                    <ul className="space-y-1">
                      {neighborhood.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Transporte:</h4>
                    <div className="flex flex-wrap gap-1">
                      {neighborhood.transportLinks.slice(0, 2).map((link, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {link.split(' - ')[0] || link.substring(0, 20)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/${neighborhood.slug}`}
                    className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ver Inmobiliarias en {neighborhood.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Información adicional SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2>Guía Completa de los Barrios de Móstoles (2025)</h2>

            <p className="text-xl text-gray-700">
              Móstoles es una ciudad con <strong>210.000 habitantes</strong>, la segunda más poblada de la Comunidad de Madrid. Cada barrio tiene su propia personalidad, precios y
              ventajas. Esta guía te ayudará a decidir dónde vivir en Móstoles.
            </p>

            <h3>¿Cuál es el Mejor Barrio de Móstoles?</h3>

            <p>
              La respuesta depende de tus necesidades y presupuesto:
            </p>

            <ul>
              <li>
                <strong>Mejor zona exclusiva:</strong> Parque Coimbra y El Soto (chalets y
                urbanizaciones premium)
              </li>
              <li>
                <strong>Mejor relación calidad-precio:</strong> Villafontana y Estoril (pisos amplios a
                buen precio, cerca de Xanadú)
              </li>
              <li>
                <strong>Mejor conectividad:</strong> Centro/Pradillo y Norte Universidad (Metro L12 y
                Renfe Cercanías)
              </li>
              <li>
                <strong>Mejor para familias:</strong> El Soto y Villafontana (colegios,
                parques y zonas verdes)
              </li>
              <li>
                <strong>Más económico:</strong> Estoril y Villafontana (1.800€-2.000€/m²)
              </li>
              <li>
                <strong>Más moderno:</strong> Móstoles Sur y Parque Guadarrama (construcción reciente)
              </li>
            </ul>

            <h3>Precios de Vivienda por Barrio en Móstoles (2025)</h3>

            <p>Estos son los precios medios actualizados por barrio:</p>

            <ol>
              <li>
                <strong>Parque Coimbra:</strong> 2.300€ - 2.500€/m² (chalets premium)
              </li>
              <li>
                <strong>Parque Guadarrama:</strong> 2.200€ - 2.400€/m²
              </li>
              <li>
                <strong>Norte Universidad:</strong> 2.150€ - 2.350€/m²
              </li>
              <li>
                <strong>El Soto:</strong> 2.100€ - 2.300€/m²
              </li>
              <li>
                <strong>Centro/Pradillo:</strong> 2.000€ - 2.200€/m²
              </li>
              <li>
                <strong>Móstoles Oeste:</strong> 2.050€ - 2.250€/m²
              </li>
              <li>
                <strong>Móstoles Sur:</strong> 1.950€ - 2.150€/m²
              </li>
              <li>
                <strong>Móstoles Este:</strong> 1.900€ - 2.100€/m²
              </li>
              <li>
                <strong>Villafontana:</strong> 1.800€ - 2.000€/m²
              </li>
              <li>
                <strong>Estoril:</strong> 1.850€ - 2.050€/m²
              </li>
            </ol>

            <h3>Conectividad: Metro y Transporte por Barrio</h3>

            <p>
              Móstoles está conectada con Madrid a través de la <strong>Línea 12 del Metro</strong>{' '}
              (Metro Ligero) y <strong>Cercanías Renfe</strong>:
            </p>

            <ul>
              <li>
                <strong>Metro L12:</strong> Pradillo, Hospital de Móstoles, Universidad Rey Juan Carlos
              </li>
              <li>
                <strong>Cercanías Renfe:</strong> Estación El Soto, Móstoles Central
              </li>
              <li>
                <strong>Autobuses interurbanos:</strong> Líneas 518, 519, 521, 523, 524, 525, 528, 534
                (conexión con Madrid, Getafe, Fuenlabrada, Alcorcón)
              </li>
            </ul>

            <h3>Servicios Educativos: Colegios por Barrio</h3>

            <p>
              Móstoles cuenta con más de <strong>40 colegios públicos</strong>, varios colegios
              concertados y el <strong>campus de la Universidad Rey Juan Carlos (URJC)</strong>.
            </p>

            <p>Algunos de los centros más destacados:</p>

            <ul>
              <li>
                <strong>Colegio Internacional SEK:</strong> Colegio bilingüe privado en Parque Coimbra
              </li>
              <li>
                <strong>Colegio Nuestra Señora de Schoenstatt:</strong> Colegio concertado de prestigio
              </li>
              <li>
                <strong>Universidad Rey Juan Carlos (URJC):</strong> Campus Móstoles con múltiples grados
              </li>
            </ul>

            <h3>Servicios Sanitarios</h3>

            <p>
              El <strong>Hospital Universitario de Móstoles</strong> es el principal centro
              sanitario, situado en la zona Norte Universidad. Es uno de los hospitales de referencia del sur de Madrid. Además, cada barrio cuenta con su propio
              centro de salud.
            </p>

            <h3>¿Cómo Encontrar Inmobiliaria en Tu Barrio?</h3>

            <p>
              Cada barrio de Móstoles tiene inmobiliarias especializadas que conocen el mercado
              local. En nuestra web encontrarás:
            </p>

            <ul>
              <li>Listado de inmobiliarias por barrio</li>
              <li>Opiniones verificadas de clientes</li>
              <li>Comparativa de comisiones</li>
              <li>Formulario para recibir ofertas sin compromiso</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                💡 Consejo: Solicita ofertas de 3-4 inmobiliarias
              </p>
              <p className="text-gray-700">
                Para obtener el mejor precio y servicio, contacta con varias agencias inmobiliarias
                del barrio que te interesa. Compara ofertas, comisiones y servicios incluidos.
              </p>
            </div>

            <h3>Conclusión: ¿Dónde Vivir en Móstoles?</h3>

            <p>
              Móstoles ofrece opciones para todos los perfiles:
            </p>

            <ul>
              <li>
                <strong>Jóvenes profesionales:</strong> Centro/Pradillo o Norte Universidad (Metro
                L12 y Renfe directo a Madrid)
              </li>
              <li>
                <strong>Familias con niños:</strong> El Soto, Villafontana o Parque Guadarrama
                (colegios, zonas verdes y parques)
              </li>
              <li>
                <strong>Buscan exclusividad:</strong> Parque Coimbra (chalets premium con jardín)
              </li>
              <li>
                <strong>Primera vivienda:</strong> Villafontana o Estoril (mejor relación calidad-precio, cerca de Xanadú)
              </li>
              <li>
                <strong>Inversores:</strong> Norte Universidad y Móstoles Sur (revalorización constante, campus URJC)
              </li>
            </ul>

            <p className="text-center mt-8">
              <OpenLeadFormButton
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Solicitar Ofertas Gratuitas de Inmobiliarias
              </OpenLeadFormButton>
            </p>
          </article>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}
