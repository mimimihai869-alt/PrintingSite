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

  // Social Media & Online Presence (for Google ranking)
  social: {
    facebook: 'https://facebook.com/printco',
    instagram: 'https://instagram.com/printco',
    linkedin: 'https://linkedin.com/company/printco',
    whatsapp: '+40 123 456 789' // WhatsApp for direct messaging
  },

  // Service Area
  serviceArea: {
    primary: 'București',
    secondary: ['Ilfov', 'Giurgiu', 'Ialomița', 'Călărași', 'Dâmbovița', 'Prahova']
  }
}

/**
 * Generate LocalBusiness JSON-LD structured data
 * Enhanced for 2025 Google ranking with social profiles
 * Use with Nuxt's useHead() composable
 */
export function getLocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    url: businessInfo.website,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    image: `${businessInfo.website}/og-image.jpg`, // Add when available
    priceRange: '$$', // Moderate pricing
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

  // Add social media profiles (Google uses these for ranking)
  const socialProfiles = []
  if (businessInfo.social.facebook) socialProfiles.push(businessInfo.social.facebook)
  if (businessInfo.social.instagram) socialProfiles.push(businessInfo.social.instagram)
  if (businessInfo.social.linkedin) socialProfiles.push(businessInfo.social.linkedin)

  if (socialProfiles.length > 0) {
    schema.sameAs = socialProfiles
  }

  return schema
}

/**
 * Get contact methods for display
 * Returns array of contact options with icons and labels
 */
export function getContactMethods() {
  return [
    {
      type: 'phone',
      label: 'Telefon',
      value: businessInfo.phone,
      href: `tel:${businessInfo.phone}`,
      icon: '📞',
      primary: true
    },
    {
      type: 'email',
      label: 'Email',
      value: businessInfo.email,
      href: `mailto:${businessInfo.email}`,
      icon: '✉️',
      primary: true
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: businessInfo.social.whatsapp,
      href: `https://wa.me/${businessInfo.social.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: '💬',
      primary: false
    },
    {
      type: 'facebook',
      label: 'Facebook',
      value: '@printco',
      href: businessInfo.social.facebook,
      icon: '👤',
      primary: false
    },
    {
      type: 'instagram',
      label: 'Instagram',
      value: '@printco',
      href: businessInfo.social.instagram,
      icon: '📷',
      primary: false
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'PrintCo',
      href: businessInfo.social.linkedin,
      icon: '💼',
      primary: false
    }
  ]
}
