/**
 * Central source of truth for business information (NAP - Name, Address, Phone)
 * All components should import and use this data instead of hardcoding values
 */

export const businessInfo = {
  // Business Identity
  name: 'PrintCo',
  legalName: 'PrintCo SRL',
  slogan: 'Printăm orice ai nevoie — rapid, calitativ, profesionist',

  // Contact Information
  phone: '+40 123 456 789',
  email: 'contact@printco.ro',
  website: 'https://printco.ro',

  // Physical Address
  address: {
    street: 'Str. Exemplu Nr. 123',
    city: 'București',
    sector: 'Sector 1',
    region: 'București',
    postalCode: '010101',
    country: 'România',
    countryCode: 'RO',
    full: 'Str. Exemplu Nr. 123, Sector 1, București 010101, România'
  },

  // Geographic Coordinates
  geo: {
    latitude: 44.4268,
    longitude: 26.1025
  },

  // Google Maps
  googleMapsUrl: 'https://maps.google.com/?q=PrintCo+București',

  // Opening Hours (structured for both display and schema)
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      daysRO: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri'],
      opens: '09:00',
      closes: '18:00',
      displayRO: 'Luni - Vineri: 09:00 - 18:00'
    },
    {
      days: ['Saturday'],
      daysRO: ['Sâmbătă'],
      opens: '10:00',
      closes: '14:00',
      displayRO: 'Sâmbătă: 10:00 - 14:00'
    },
    {
      days: ['Sunday'],
      daysRO: ['Duminică'],
      closed: true,
      displayRO: 'Duminică: Închis'
    }
  ],

  // Social Media (optional - add when available)
  social: {
    facebook: '',
    instagram: '',
    linkedin: ''
  },

  // Service Area
  serviceArea: {
    primary: 'București',
    secondary: ['Ilfov', 'Giurgiu', 'Ialomița', 'Călărași', 'Dâmbovița', 'Prahova']
  }
}

/**
 * Generate LocalBusiness JSON-LD structured data
 * Use with Nuxt's useHead() composable
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    url: businessInfo.website,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.countryCode
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude
    },
    openingHoursSpecification: businessInfo.openingHours
      .filter(schedule => !schedule.closed)
      .map(schedule => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: schedule.days,
        opens: schedule.opens,
        closes: schedule.closes
      })),
    areaServed: [
      {
        '@type': 'City',
        name: businessInfo.serviceArea.primary
      },
      ...businessInfo.serviceArea.secondary.map(area => ({
        '@type': 'City',
        name: area
      }))
    ]
  }
}
