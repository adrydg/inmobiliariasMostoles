'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import Modal from './Modal';
import LeadFormCompact from './LeadFormCompact';

// Context para manejar el modal globalmente
interface LeadFormModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const LeadFormModalContext = createContext<LeadFormModalContextType | undefined>(undefined);

export function LeadFormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <LeadFormModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Solicita Ofertas Personalizadas"
      >
        <LeadFormCompact onSuccess={closeModal} />
      </Modal>
    </LeadFormModalContext.Provider>
  );
}

// Hook para usar el modal
export function useLeadFormModal() {
  const context = useContext(LeadFormModalContext);
  if (!context) {
    throw new Error('useLeadFormModal must be used within LeadFormModalProvider');
  }
  return context;
}

// Componente de botón para abrir el modal
export function OpenLeadFormButton({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openModal } = useLeadFormModal();

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
