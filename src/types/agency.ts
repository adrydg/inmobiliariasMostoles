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
  savings: number;
}

export interface LeadForm {
  name: string;
  email: string;
  phone: string;
  propertyType?: 'comprar' | 'vender' | 'alquilar';
  street?: string;
  city?: string;
  budget?: string;
  publishedInAgency?: boolean;
  message?: string;
  acceptedTerms: boolean;
}
