'use client';

import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={onClose}
    >
      {/* Overlay oscuro */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" />

      {/* Contenedor del modal */}
      <div className="flex min-h-full items-center justify-center p-0 sm:p-4">
        <div
          className="relative w-full h-full sm:h-auto sm:max-w-2xl sm:rounded-xl bg-white shadow-2xl transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header con título y botón cerrar */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between rounded-t-xl">
            {title && (
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="ml-auto p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Cerrar"
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Contenido del modal - scrolleable */}
          <div className="overflow-y-auto max-h-[calc(100vh-60px)] sm:max-h-[calc(90vh-60px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
