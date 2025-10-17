'use client';

import { useState } from 'react';
import { LeadForm as LeadFormType } from '@/types/agency';

interface LeadFormCompactProps {
  onSuccess?: () => void;
}

export default function LeadFormCompact({ onSuccess }: LeadFormCompactProps) {
  const [formData, setFormData] = useState<LeadFormType>({
    name: '',
    email: '',
    phone: '',
    propertyType: undefined,
    street: '',
    city: '',
    budget: '',
    publishedInAgency: undefined,
    message: '',
    acceptedTerms: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitStatus('success');
      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (submitStatus === 'success') {
    return (
      <div className="p-4 sm:p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Solicitud Enviada!
        </h3>
        <p className="text-gray-600">
          Recibirás ofertas de hasta 3 agencias en las próximas 24 horas.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Beneficios compactos - solo mobile */}
      <div className="sm:hidden mb-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div>
          <div className="text-lg mb-1">⚡</div>
          <div className="text-gray-600">Rápido</div>
        </div>
        <div>
          <div className="text-lg mb-1">🎯</div>
          <div className="text-gray-600">Gratis</div>
        </div>
        <div>
          <div className="text-lg mb-1">🔒</div>
          <div className="text-gray-600">Seguro</div>
        </div>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-3 py-2 rounded-lg mb-4 text-sm">
          Error al enviar. Inténtalo de nuevo.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre y Email en una fila en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+34 600 000 000"
          />
        </div>

        {/* Tipo de operación */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Qué deseas? *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, propertyType: 'comprar' }))}
              className={`px-3 py-2 text-sm rounded-lg font-semibold transition-all ${
                formData.propertyType === 'comprar'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Comprar
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, propertyType: 'vender' }))}
              className={`px-3 py-2 text-sm rounded-lg font-semibold transition-all ${
                formData.propertyType === 'vender'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Vender
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, propertyType: 'alquilar' }))}
              className={`px-3 py-2 text-sm rounded-lg font-semibold transition-all ${
                formData.propertyType === 'alquilar'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Alquilar
            </button>
          </div>
        </div>

        {/* Calle y Ciudad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
              Calle
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Calle Mayor 15"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Ciudad
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Móstoles"
            />
          </div>
        </div>

        {/* Presupuesto */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Presupuesto
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="200.000€"
          />
        </div>

        {/* Publicado en agencia */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Ya publicado?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, publishedInAgency: true }))}
              className={`px-4 py-2 text-sm rounded-lg font-semibold transition-all ${
                formData.publishedInAgency === true
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Sí
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, publishedInAgency: false }))}
              className={`px-4 py-2 text-sm rounded-lg font-semibold transition-all ${
                formData.publishedInAgency === false
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Información extra (opcional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Cuéntanos más..."
          />
        </div>

        {/* Términos */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="acceptedTerms"
            name="acceptedTerms"
            required
            checked={formData.acceptedTerms}
            onChange={handleChange}
            className="mt-0.5"
          />
          <label htmlFor="acceptedTerms" className="text-xs sm:text-sm text-gray-600 leading-normal">
            Acepto la{' '}
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="text-blue-600 underline"
            >
              política de privacidad
            </button>
            {' '}y que mis datos sean cedidos a agencias colaboradoras. *
          </label>
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:bg-gray-400"
        >
          {isSubmitting ? 'Enviando...' : 'Recibir Ofertas Gratis'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Recibirás hasta 3 ofertas en 24h
        </p>
      </form>

      {/* Modal simplificado de privacidad */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4" onClick={() => setShowPrivacyModal(false)}>
          <div className="bg-white rounded-lg max-w-lg max-h-[80vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Política de Privacidad</h3>
              <button onClick={() => setShowPrivacyModal(false)} className="text-2xl">&times;</button>
            </div>
            <div className="text-sm text-gray-700 space-y-3">
              <p>Tus datos serán tratados por www.inmobiliariasmostoles.es para gestionar tu solicitud y serán cedidos a un máximo de 3 agencias inmobiliarias colaboradoras.</p>
              <p><strong>Derechos:</strong> Acceso, rectificación, supresión, oposición, limitación y portabilidad.</p>
              <p>Para más información consulta nuestra política completa de privacidad.</p>
            </div>
            <button onClick={() => setShowPrivacyModal(false)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
