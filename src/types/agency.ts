export interface Agency {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewsCount: number;
  description: string;
  specialties: string[];
  coverage: string[];
  fees: {
    buying: string;
    selling: string;
  };
  contactEmail: string;
  contactPhone: string;
  website: string;
  features: string[];
}

export interface LeadForm {
  name: string;
  email: string;
  phone: string;
  propertyType: 'comprar' | 'vender' | 'alquilar';
  location: string;
  budget?: string;
  message?: string;
  acceptedTerms: boolean;
}
