import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Sobre nosotros */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Inmobiliarias Móstoles
            </h3>
            <p className="text-sm text-gray-400">
              Comparador de inmobiliarias en Móstoles. Encuentra las mejores
              agencias para comprar, vender o alquilar tu vivienda con las mejores
              condiciones del mercado.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/comparador" className="text-sm hover:text-white transition-colors">
                  Comparador
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-sm">Comprar vivienda</li>
              <li className="text-sm">Vender vivienda</li>
              <li className="text-sm">Alquilar inmueble</li>
              <li className="text-sm">Valoración gratuita</li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidad" className="text-sm hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-sm hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Inmobiliarias Móstoles. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
