'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navbar() {
  const [isBarriosOpen, setIsBarriosOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsBarriosOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsBarriosOpen(false);
    }, 300); // 300ms delay antes de cerrar
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-light text-slate-900">
              Inmobiliarias <span className="font-bold">Móstoles</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-slate-700 hover:text-amber-600 transition-colors">
              Inicio
            </Link>
            <Link
              href="/comparador"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Comparar Agencias
            </Link>

            {/* Dropdown Barrios */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-slate-700 hover:text-amber-600 transition-colors flex items-center">
                Barrios
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isBarriosOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-sm shadow-2xl border border-slate-200 py-2">
                  <Link
                    href="/barrios"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-semibold border-b border-slate-100"
                  >
                    📍 Ver Todos los Barrios
                  </Link>
                  <Link
                    href="/centro-pradillo"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Centro / Pradillo
                  </Link>
                  <Link
                    href="/el-soto"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    El Soto
                  </Link>
                  <Link
                    href="/villafontana"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Villafontana
                  </Link>
                  <Link
                    href="/parque-coimbra"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Parque Coimbra
                  </Link>
                  <Link
                    href="/mostoles-sur"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Móstoles Sur
                  </Link>
                  <Link
                    href="/norte-universidad"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Norte Universidad
                  </Link>
                  <Link
                    href="/estoril"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Estoril
                  </Link>
                  <Link
                    href="/mostoles-este"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Móstoles Este
                  </Link>
                  <Link
                    href="/mostoles-oeste"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Móstoles Oeste
                  </Link>
                  <Link
                    href="/parque-guadarrama"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Parque Guadarrama
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contacto" className="text-slate-700 hover:text-amber-600 transition-colors">
              Contacto
            </Link>
          </div>

          <div>
            <Link
              href="/contacto"
              className="bg-amber-500 text-slate-900 px-6 py-2 rounded-sm hover:bg-amber-400 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              Solicitar Ofertas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
