import { Agency } from '@/types/agency';
import Link from 'next/link';

interface AgencyCardProps {
  agency: Agency;
}

export default function AgencyCard({ agency }: AgencyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{agency.name}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="font-semibold ml-1">{agency.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">
              ({agency.reviewsCount} valoraciones)
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {agency.description}
      </p>

      {/* Especialidades */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Especialidades:</h4>
        <div className="flex flex-wrap gap-2">
          {agency.specialties.map((specialty) => (
            <span
              key={specialty}
              className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Cobertura */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Zonas de cobertura:</h4>
        <p className="text-sm text-gray-600">{agency.coverage.join(', ')}</p>
      </div>

      {/* Comisiones */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Comisión compra:</span>
          <span className="font-semibold text-gray-900">{agency.fees.buying}</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span className="text-gray-600">Comisión venta:</span>
          <span className="font-semibold text-gray-900">{agency.fees.selling}</span>
        </div>
      </div>

      {/* Características destacadas */}
      <div className="mb-4">
        <ul className="space-y-1">
          {agency.features.slice(0, 3).map((feature) => (
            <li key={feature} className="text-sm text-gray-600 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-2 mt-6">
        <Link
          href={`/comparador/${agency.id}`}
          className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
        >
          Ver Detalles
        </Link>
        <a
          href={`tel:${agency.contactPhone}`}
          className="flex-1 border border-blue-600 text-blue-600 text-center py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
        >
          Llamar
        </a>
      </div>
    </div>
  );
}
