export interface Neighborhood {
  id: string;
  name: string;
  slug: string;
  description: string;
  population: number;
  averageAge: number;
  area: string; // km²
  keyFeatures: string[];
  benefits: string[];
  propertyTypes: string[];
  averagePricePerM2: {
    sale: string;
    rent: string;
  };
  transportLinks: string[];
  amenities: string[];
  schools: string[];
  healthCenters: string[];
  parks: string[];
  agencyIds: string[]; // IDs de inmobiliarias que operan en este barrio
  metaDescription: string;
  images?: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    id: 'centro-pradillo',
    name: 'Centro / Pradillo',
    slug: 'centro-pradillo',
    description: 'El corazón histórico de Móstoles, donde se concentra la mayor actividad comercial y administrativa de la ciudad. Centro y Pradillo cuentan con excelente conectividad con Metro L12 y todos los servicios a pie.',
    population: 32000,
    averageAge: 43,
    area: '3.2 km²',
    keyFeatures: [
      'Zona comercial más importante de Móstoles',
      'Ayuntamiento y oficinas administrativas',
      'Metro Pradillo (L12) con conexión directa a Madrid',
      'Gran variedad de comercio local y grandes superficies',
      'Edificios históricos y plazas emblemáticas',
      'Centro de salud y Hospital Universitario cercano',
    ],
    benefits: [
      'Todo a pie: comercios, servicios y transporte',
      'Metro Línea 12 y Renfe Cercanías en la zona',
      'Vida urbana con ambiente tradicional',
      'Amplia oferta cultural, teatros y cines',
      'Colegios e institutos de prestigio',
      'Mercado municipal y comercio de proximidad',
    ],
    propertyTypes: ['Pisos de 2-3 dormitorios', 'Áticos', 'Locales comerciales', 'Oficinas'],
    averagePricePerM2: {
      sale: '2.000€ - 2.200€',
      rent: '11€ - 13€',
    },
    transportLinks: [
      'Metro Pradillo (L12)',
      'Metro Hospital de Móstoles (L12)',
      'Renfe Cercanías: Móstoles Central',
      'Líneas de autobús: 518, 519, 521, 523, 524, 525',
      'Autobuses urbanos: L1, L2, L3, L4, L5',
    ],
    amenities: [
      'Centro Cultural Villa de Móstoles',
      'Teatro del Bosque',
      'Biblioteca Municipal Central',
      'Polideportivo Municipal',
      'Centro Comercial El Bosque',
      'Mercado de Abastos',
    ],
    schools: [
      'CEIP Francisco de Quevedo',
      'CEIP Miguel de Cervantes',
      'IES Velázquez',
      'Colegio San José',
      'Centro de Formación Profesional',
    ],
    healthCenters: [
      'Centro de Salud Móstoles Centro',
      'Hospital Universitario de Móstoles',
      'Múltiples clínicas privadas',
    ],
    parks: [
      'Parque de la Cubierta',
      'Plaza de España',
      'Jardines del Ayuntamiento',
    ],
    agencyIds: ['tecnocasa-mostoles', 'redpiso-mostoles-centro', 'mb-gestion', 'la-casa-agency'],
    metaDescription: 'Inmobiliarias en Centro/Pradillo, Móstoles. Encuentra pisos en venta y alquiler en el corazón de Móstoles. Mejor zona comercial, Metro L12 y todos los servicios. Precio medio: 2.100€/m².',
  },
  {
    id: 'el-soto',
    name: 'El Soto',
    slug: 'el-soto',
    description: 'El barrio residencial más exclusivo de Móstoles. El Soto destaca por su parque de 200 hectáreas, urbanismo moderno, amplias zonas verdes y la estación de Renfe que conecta directamente con Madrid.',
    population: 28500,
    averageAge: 39,
    area: '4.1 km²',
    keyFeatures: [
      'Parque Regional del Soto de Móstoles (200 hectáreas)',
      'Urbanismo moderno con edificios de diseño contemporáneo',
      'Renfe Cercanías: Estación El Soto',
      'Zona residencial de nivel medio-alto',
      'Amplias avenidas y zonas peatonales',
      'Equipamientos deportivos de primer nivel',
    ],
    benefits: [
      'Parque natural más grande del sur de Madrid en el barrio',
      'Viviendas modernas con garaje y trastero incluidos',
      'Excelente conexión con Renfe a Madrid (25 min)',
      'Zona tranquila ideal para familias con niños',
      'Carril bici y rutas de senderismo',
      'Colegios públicos y concertados de calidad',
    ],
    propertyTypes: ['Pisos de 2-4 dormitorios', 'Chalets adosados', 'Áticos con terraza', 'Dúplex'],
    averagePricePerM2: {
      sale: '2.100€ - 2.300€',
      rent: '12€ - 14€',
    },
    transportLinks: [
      'Renfe Cercanías: Estación El Soto',
      'Líneas de autobús: 528, 529, 534',
      'Autobús urbano línea L6',
      'Fácil acceso a A-5 y M-50',
    ],
    amenities: [
      'Parque Regional del Soto',
      'Complejo deportivo El Soto',
      'Biblioteca José Hierro',
      'Centro comercial cercano',
      'Piscina municipal',
    ],
    schools: [
      'CEIP El Soto',
      'Colegio Sagrado Corazón',
      'IES Rayuela',
      'Guardería municipal El Soto',
    ],
    healthCenters: [
      'Centro de Salud El Soto',
      'Hospital Universitario (cercano)',
    ],
    parks: [
      'Parque Regional del Soto (200 ha)',
      'Zonas verdes con carril bici',
      'Áreas recreativas infantiles',
    ],
    agencyIds: ['tecnocasa-mostoles', 'hogares-mostoles', 'mb-gestion', 'grupo-darek'],
    metaDescription: 'Inmobiliarias en El Soto, Móstoles. Pisos y chalets junto al parque más grande del sur de Madrid. Renfe Cercanías, zona residencial exclusiva. Precio medio: 2.200€/m².',
  },
  {
    id: 'villafontana',
    name: 'Villafontana',
    slug: 'villafontana',
    description: 'Barrio familiar consolidado con excelente relación calidad-precio. Villafontana ofrece centros comerciales de primer nivel, buena conectividad y un ambiente residencial tranquilo.',
    population: 24300,
    averageAge: 41,
    area: '3.0 km²',
    keyFeatures: [
      'Barrio residencial consolidado desde los años 90',
      'Centro Comercial Xanadú a 5 minutos',
      'Comercio de proximidad muy desarrollado',
      'Buena conexión con transporte público',
      'Colegios públicos y concertados de prestigio',
      'Precio más asequible que otras zonas premium',
    ],
    benefits: [
      'Mejor relación calidad-precio de Móstoles',
      'Pisos amplios con 3-4 dormitorios',
      'Centro Comercial Xanadú: cines, pista de esquí, tiendas',
      'Supermercados, farmacia y bancos en el barrio',
      'Zona muy tranquila, ideal para familias',
      'Gastos de comunidad más económicos',
    ],
    propertyTypes: ['Pisos de 3-4 dormitorios', 'Bajos con patio', 'Pisos reformados', 'Locales'],
    averagePricePerM2: {
      sale: '1.800€ - 2.000€',
      rent: '9€ - 11€',
    },
    transportLinks: [
      'Autobuses interurbanos: 528, 534, 535',
      'Autobús urbano líneas L3, L5',
      'Cercanía a A-5 y M-50',
    ],
    amenities: [
      'Centro Comercial Xanadú (cercano)',
      'Polideportivo Villafontana',
      'Centro Cultural de barrio',
      'Supermercados y comercio local',
    ],
    schools: [
      'CEIP Villafontana',
      'CEIP Andrés Segovia',
      'IES Europa',
      'Colegio Liceo Europeo',
    ],
    healthCenters: [
      'Centro de Salud Villafontana',
    ],
    parks: [
      'Parque de Villafontana',
      'Zonas verdes barriales',
      'Áreas deportivas al aire libre',
    ],
    agencyIds: ['redpiso-mostoles-centro', 'tecnocasa-mostoles', 'primer-paso', 'mb-gestion'],
    metaDescription: 'Inmobiliarias en Villafontana, Móstoles. Pisos amplios y económicos en barrio familiar consolidado. Cerca de Xanadú, colegios y comercios. Precio medio: 1.900€/m². Mejor relación calidad-precio.',
  },
  {
    id: 'parque-coimbra',
    name: 'Parque Coimbra',
    slug: 'parque-coimbra',
    description: 'Zona residencial premium de chalets y viviendas unifamiliares. Parque Coimbra es ideal para quien busca tranquilidad, espacio verde y calidad de vida en un entorno privilegiado.',
    population: 9500,
    averageAge: 44,
    area: '4.5 km²',
    keyFeatures: [
      'Zona de chalets adosados, pareados e independientes',
      'Urbanizaciones con piscina comunitaria',
      'Parque Coimbra con 70 hectáreas de zona verde',
      'Entorno tranquilo y residencial premium',
      'Parcelas con jardín privado',
      'Ideal para familias con niños y mascotas',
    ],
    benefits: [
      'Viviendas unifamiliares con jardín privado',
      'Urbanizaciones cerradas con seguridad',
      'Parque Coimbra: 70 hectáreas de naturaleza',
      'Piscina comunitaria y zonas deportivas',
      'Garaje privado (2-3 plazas)',
      'Colegios internacionales cercanos',
    ],
    propertyTypes: ['Chalets adosados', 'Chalets pareados', 'Chalets independientes', 'Villas de lujo'],
    averagePricePerM2: {
      sale: '2.300€ - 2.500€',
      rent: '13€ - 16€',
    },
    transportLinks: [
      'Autobús urbano línea L7',
      'Líneas de autobús: 528, 534',
      'Acceso directo a M-50',
      'Renfe El Soto (10 min en coche)',
    ],
    amenities: [
      'Parque Coimbra (70 hectáreas)',
      'Piscinas comunitarias',
      'Zonas deportivas privadas',
      'Club social de la urbanización',
    ],
    schools: [
      'Colegio Nuestra Señora de Schoenstatt',
      'Colegio Internacional SEK',
      'CEIP cercanos',
      'Colegios bilingües',
    ],
    healthCenters: [
      'Centro de Salud cercano',
      'Hospital Universitario (accesible)',
    ],
    parks: [
      'Parque Coimbra (70 hectáreas)',
      'Zonas verdes comunitarias',
      'Jardines privados',
    ],
    agencyIds: ['hogares-mostoles', 'tecnocasa-mostoles', 'la-casa-agency', 'grupo-darek'],
    metaDescription: 'Inmobiliarias en Parque Coimbra, Móstoles. Chalets adosados, pareados e independientes con jardín. Zona residencial premium con parque de 70 hectáreas. Precio: 2.400€/m².',
  },
  {
    id: 'mostoles-sur',
    name: 'Móstoles Sur',
    slug: 'mostoles-sur',
    description: 'Barrio dinámico con viviendas modernas y servicios en desarrollo. Móstoles Sur ofrece buena conectividad, precios competitivos y potencial de revalorización.',
    population: 21500,
    averageAge: 37,
    area: '2.8 km²',
    keyFeatures: [
      'Desarrollo urbanístico de los últimos 15 años',
      'Viviendas modernas con certificación energética',
      'Buena conexión con carreteras principales',
      'Zona en expansión con nuevos servicios',
      'Urbanizaciones con zonas comunes',
      'Precios competitivos para vivienda moderna',
    ],
    benefits: [
      'Pisos nuevos con todas las comodidades modernas',
      'Garaje y trastero incluidos',
      'Certificación energética alta (A-B)',
      'Zonas verdes y parques nuevos',
      'Comunidades modernas bien equipadas',
      'Potencial de revalorización alto',
    ],
    propertyTypes: ['Pisos de 2-3 dormitorios', 'Áticos', 'Bajos con jardín', 'Obra nueva'],
    averagePricePerM2: {
      sale: '1.950€ - 2.150€',
      rent: '10€ - 12€',
    },
    transportLinks: [
      'Autobús urbano líneas L4, L8',
      'Líneas de autobús interurbano: 518, 521',
      'Acceso directo a A-5',
    ],
    amenities: [
      'Centro comercial cercano',
      'Zonas deportivas comunitarias',
      'Supermercados modernos',
      'Servicios en desarrollo',
    ],
    schools: [
      'CEIP de nueva construcción',
      'Guardería municipal',
      'IES próximos',
    ],
    healthCenters: [
      'Centro de Salud Móstoles Sur',
    ],
    parks: [
      'Parques de nueva creación',
      'Zonas verdes comunitarias',
      'Áreas infantiles modernas',
    ],
    agencyIds: ['tecnocasa-mostoles', 'hogares-mostoles', 'mb-gestion', 'primer-paso'],
    metaDescription: 'Inmobiliarias en Móstoles Sur. Pisos modernos con garaje en zona en expansión. Viviendas con certificación energética. Precio medio: 2.050€/m². Ideal primera vivienda.',
  },
  {
    id: 'norte-universidad',
    name: 'Norte Universidad',
    slug: 'norte-universidad',
    description: 'Barrio joven y dinámico situado junto al campus de la Universidad Rey Juan Carlos. Zona moderna con ambiente universitario, ideal para estudiantes, profesionales jóvenes y familias.',
    population: 18200,
    averageAge: 31,
    area: '3.3 km²',
    keyFeatures: [
      'Campus de la Universidad Rey Juan Carlos (URJC)',
      'Construcciones modernas de última generación',
      'Ambiente joven y universitario',
      'Excelente conexión con Metro L12',
      'Zona en plena expansión con futuro',
      'Hospital Universitario al lado',
    ],
    benefits: [
      'Ambiente joven y dinámico',
      'Campus URJC a pie (carreras de grado y posgrado)',
      'Viviendas modernas con eficiencia energética',
      'Hospital Universitario de Móstoles adyacente',
      'Metro L12 con acceso directo a Madrid',
      'Zona con futuro y alta revalorización',
    ],
    propertyTypes: ['Pisos de 1-2 dormitorios', 'Estudios', 'Áticos', 'Pisos compartidos'],
    averagePricePerM2: {
      sale: '2.150€ - 2.350€',
      rent: '11€ - 14€',
    },
    transportLinks: [
      'Metro Hospital de Móstoles (L12)',
      'Metro Universidad Rey Juan Carlos (L12)',
      'Líneas de autobús: 518, 519, 521',
      'Autobuses urbanos líneas L2, L3',
    ],
    amenities: [
      'Universidad Rey Juan Carlos (URJC)',
      'Hospital Universitario de Móstoles',
      'Centro deportivo universitario',
      'Bibliotecas y salas de estudio',
      'Cafeterías y zonas de ocio',
    ],
    schools: [
      'Universidad Rey Juan Carlos',
      'CEIP cercanos',
      'IES próximos',
      'Centros de formación profesional',
    ],
    healthCenters: [
      'Hospital Universitario de Móstoles',
      'Centro de Salud Universidad',
    ],
    parks: [
      'Zonas verdes del campus URJC',
      'Parques urbanos',
      'Áreas deportivas universitarias',
    ],
    agencyIds: ['tecnocasa-mostoles', 'redpiso-mostoles-centro', 'mb-gestion', 'grupo-darek'],
    metaDescription: 'Inmobiliarias en Norte Universidad, Móstoles. Pisos cerca URJC y Hospital Universitario. Zona joven con Metro L12. Ideal estudiantes y profesionales. Precio: 2.250€/m².',
  },
  {
    id: 'estoril',
    name: 'Estoril',
    slug: 'estoril',
    description: 'Barrio residencial consolidado con buena relación calidad-precio. Estoril ofrece comercio de proximidad, servicios completos y un ambiente familiar tranquilo.',
    population: 19800,
    averageAge: 42,
    area: '2.4 km²',
    keyFeatures: [
      'Barrio residencial consolidado desde los años 80',
      'Comercio de proximidad muy desarrollado',
      'Buena conexión con transporte público',
      'Colegios públicos de calidad',
      'Precio más asequible que zonas premium',
      'Comunidad vecinal muy activa',
    ],
    benefits: [
      'Excelente relación calidad-precio',
      'Pisos amplios con 3-4 dormitorios',
      'Transporte público bien conectado',
      'Supermercados, farmacia y bancos en el barrio',
      'Zona muy tranquila, ideal para familias',
      'Gastos de comunidad económicos',
    ],
    propertyTypes: ['Pisos de 2-3 dormitorios', 'Bajos con patio', 'Pisos reformados', 'Locales'],
    averagePricePerM2: {
      sale: '1.850€ - 2.050€',
      rent: '9€ - 11€',
    },
    transportLinks: [
      'Autobuses interurbanos: 518, 523, 525',
      'Autobús urbano líneas L1, L5',
      'Cercanía a M-50',
    ],
    amenities: [
      'Polideportivo Estoril',
      'Centro Cultural de barrio',
      'Supermercados y comercio local',
      'Mercadillo semanal',
    ],
    schools: [
      'CEIP Estoril',
      'CEIP Antonio Machado',
      'IES cercano',
      'Colegio concertado',
    ],
    healthCenters: [
      'Centro de Salud Estoril',
    ],
    parks: [
      'Parque de Estoril',
      'Zonas verdes barriales',
      'Áreas deportivas al aire libre',
    ],
    agencyIds: ['primer-paso', 'mb-gestion', 'alfa-inmobiliaria', 'dagosa'],
    metaDescription: 'Inmobiliarias en Estoril, Móstoles. Pisos económicos en barrio familiar consolidado. Comercio local, buena conexión. Precio medio: 1.950€/m². Primera vivienda e inversión.',
  },
  {
    id: 'mostoles-este',
    name: 'Móstoles Este',
    slug: 'mostoles-este',
    description: 'Zona residencial tranquila con viviendas modernas. Móstoles Este destaca por sus amplias zonas verdes, ambiente familiar y precio competitivo.',
    population: 16200,
    averageAge: 38,
    area: '2.7 km²',
    keyFeatures: [
      'Construcciones modernas de los últimos 20 años',
      'Amplias zonas verdes y parques infantiles',
      'Urbanizaciones con piscina comunitaria',
      'Ambiente tranquilo y seguro',
      'Cercanía a colegios y servicios',
      'Buena comunicación con A-5',
    ],
    benefits: [
      'Viviendas modernas con garaje incluido',
      'Zonas comunes con piscina y jardines',
      'Ambiente ideal para familias con niños',
      'Colegios y guarderías en el barrio',
      'Zona en revalorización constante',
      'Tranquilidad sin renunciar a servicios',
    ],
    propertyTypes: ['Pisos de 2-3 dormitorios', 'Bajos con jardín', 'Áticos', 'Dúplex'],
    averagePricePerM2: {
      sale: '1.900€ - 2.100€',
      rent: '10€ - 12€',
    },
    transportLinks: [
      'Autobús urbano líneas L6, L7',
      'Líneas de autobús: 523, 528',
      'Fácil acceso a A-5 y M-50',
    ],
    amenities: [
      'Piscinas comunitarias',
      'Zonas deportivas',
      'Supermercado Mercadona',
      'Centro de salud cercano',
    ],
    schools: [
      'CEIP Móstoles Este',
      'Colegio Concertado',
      'Guardería municipal',
      'IES cercano',
    ],
    healthCenters: [
      'Centro de Salud',
      'Hospital Universitario (accesible)',
    ],
    parks: [
      'Parque de Móstoles Este',
      'Zonas verdes comunitarias',
      'Parques infantiles',
    ],
    agencyIds: ['tecnocasa-mostoles', 'hogares-mostoles', 'mb-gestion', 'la-casa-agency'],
    metaDescription: 'Inmobiliarias en Móstoles Este. Pisos modernos con piscina y zonas verdes. Barrio familiar tranquilo. Precio: 2.000€/m².',
  },
  {
    id: 'mostoles-oeste',
    name: 'Móstoles Oeste',
    slug: 'mostoles-oeste',
    description: 'Barrio consolidado con gran vida vecinal y servicios completos. Móstoles Oeste combina tradición con modernidad, ofreciendo buena ubicación y precios competitivos.',
    population: 17600,
    averageAge: 40,
    area: '2.5 km²',
    keyFeatures: [
      'Barrio con identidad propia y fuerte comunidad',
      'Buena conexión con el centro de Móstoles',
      'Comercio local variado y servicios completos',
      'Colegios públicos y concertados cercanos',
      'Zona deportiva con instalaciones municipales',
      'Precios accesibles',
    ],
    benefits: [
      'Ambiente familiar y acogedor',
      'Excelente relación calidad-precio',
      'Transporte público bien conectado',
      'Servicios básicos a pie',
      'Comunidad vecinal activa',
      'Zona consolidada y estable',
    ],
    propertyTypes: ['Pisos de 2-3 dormitorios', 'Pisos reformados', 'Bajos', 'Estudios'],
    averagePricePerM2: {
      sale: '2.050€ - 2.250€',
      rent: '10€ - 12€',
    },
    transportLinks: [
      'Autobús urbano líneas L2, L4',
      'Líneas de autobús interurbano: 519, 521, 523',
      'Metro Pradillo (15 min en bus)',
      'Acceso a A-5',
    ],
    amenities: [
      'Polideportivo Móstoles Oeste',
      'Centro cultural de barrio',
      'Supermercados y comercio local',
      'Biblioteca municipal',
    ],
    schools: [
      'CEIP Juan XXIII',
      'CEIP Pablo Neruda',
      'IES cercano',
      'Escuela Infantil',
    ],
    healthCenters: [
      'Centro de Salud Móstoles Oeste',
    ],
    parks: [
      'Parque de barrio',
      'Zonas verdes vecinales',
      'Áreas deportivas al aire libre',
    ],
    agencyIds: ['mb-gestion', 'primer-paso', 'alfa-inmobiliaria', 'dagosa'],
    metaDescription: 'Inmobiliarias en Móstoles Oeste. Pisos en barrio consolidado con comercio local y buena conexión. Precio medio: 2.150€/m². Ideal familias.',
  },
  {
    id: 'parque-guadarrama',
    name: 'Parque Guadarrama',
    slug: 'parque-guadarrama',
    description: 'Barrio joven y moderno construido alrededor de amplias zonas verdes. Parque Guadarrama es perfecto para familias que buscan espacios abiertos y vida al aire libre.',
    population: 14800,
    averageAge: 35,
    area: '3.1 km²',
    keyFeatures: [
      'Desarrollo urbanístico moderno',
      'Amplias zonas verdes y parques',
      'Edificios modernos con certificación energética',
      'Carril bici conectado',
      'Población joven y familias con niños',
      'Servicios modernos y en desarrollo',
    ],
    benefits: [
      'Parques y zonas verdes en todo el barrio',
      'Viviendas modernas con eficiencia energética',
      'Carril bici y rutas para actividades al aire libre',
      'Ambiente joven y dinámico',
      'Instalaciones deportivas modernas',
      'Potencial de revalorización',
    ],
    propertyTypes: ['Pisos de 2-3 dormitorios', 'Áticos con terraza', 'Dúplex', 'Bajos con jardín'],
    averagePricePerM2: {
      sale: '2.200€ - 2.400€',
      rent: '11€ - 13€',
    },
    transportLinks: [
      'Autobús urbano líneas L3, L7',
      'Líneas de autobús: 528, 534',
      'Carril bici conectado con Xanadú',
      'Acceso a M-50',
    ],
    amenities: [
      'Parque Guadarrama',
      'Pistas deportivas al aire libre',
      'Centro Comercial Xanadú (cercano)',
      'Supermercados modernos',
    ],
    schools: [
      'CEIP Parque Guadarrama',
      'Colegio Bilingüe cercano',
      'IES próximo',
      'Escuela Infantil',
    ],
    healthCenters: [
      'Centro de Salud cercano',
    ],
    parks: [
      'Parque Guadarrama',
      'Zonas verdes con carril bici',
      'Áreas de juegos infantiles',
      'Circuito deportivo',
    ],
    agencyIds: ['tecnocasa-mostoles', 'redpiso-mostoles-centro', 'hogares-mostoles', 'la-casa-agency'],
    metaDescription: 'Inmobiliarias en Parque Guadarrama, Móstoles. Pisos modernos en barrio joven con zonas verdes, carril bici. Cerca de Xanadú. Precio: 2.300€/m².',
  },
];

export function getAllNeighborhoods(): Neighborhood[] {
  return neighborhoods;
}

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getAgenciesByNeighborhood(neighborhoodId: string): string[] {
  const neighborhood = neighborhoods.find((n) => n.id === neighborhoodId);
  return neighborhood?.agencyIds || [];
}
