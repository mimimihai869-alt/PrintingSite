---
name: local-business-nap-schema
description: Handles business identity (NAP - Name, Address, Phone) and local SEO with structured data for the printing company. Use when working on contact info, footer, or SEO features.
---

# Local Business NAP & Schema

## Purpose

For local businesses (print shops, restaurants, clinics, salons, etc.), this skill ensures:

- **Consistent NAP** (Name, Address, Phone) across all pages
- **Clear visibility** in UI (Contact page + footer)
- **Proper structured data** (JSON-LD) for search engines
- **Single source of truth** for business information
- **Foundation for FAQ schema** integration

## 1. Single Source of Truth for Business Info

**Always create a central source** for business details instead of scattering them across components.

### Required Information:
- Business name
- Legal name (if different)
- Full postal address (street, number, city, region, postal code, country)
- Main phone number
- Main email address
- Website URL
- Opening hours (structured format)
- Optionally: latitude/longitude
- Optionally: Google Maps link

### Behavior:
- Any component/page needing business info reads from this central source
- Changing info here updates the entire site automatically
- Implementation location flexible (config file, constants module, CMS, composable)

## 2. Use NAP Visibly (Contact Page & Global Footer)

Make business info clear and consistent for users.

### Contact Page Must Show:
- Business name
- Full address
- Phone (as clickable `tel:` link)
- Email (as clickable `mailto:` link)
- Google Maps link or embed
- Opening hours

### Footer Must Show:
- At least: name + city + phone
- More info if appropriate for design

### Behavior:
- All data consumed from central NAP source (no hardcoded strings)
- Use semantic HTML (`<address>` for addresses)
- Follow project design system/tokens
- Clickable phone/email links

## 3. LocalBusiness JSON-LD Structured Data

Add LocalBusiness structured data for search engines to understand the business as a local entity.

### Required JSON-LD Fields:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "url": "https://website.com",
  "telephone": "+40 123 456 789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Str. Example Nr. 123",
    "addressLocality": "București",
    "addressRegion": "București",
    "postalCode": "010101",
    "addressCountry": "RO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.4268,
    "longitude": 26.1025
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
```

### Rules:
- Values must **match exactly** what users see on site
- **No HTML tags** inside JSON-LD values (plain strings only)
- Inject via head/meta system appropriate to tech stack
- Typically on Contact page or main business page

## 4. Foundation for FAQs (Structure for Future Schema)

Prepare clean FAQ rendering for future FAQ structured data.

### FAQ Data Structure:
```javascript
{
  question: "What are your printing services?",
  answer: "We offer business cards, flyers, brochures, posters, banners, and more."
}
```

### Behavior:
- Define FAQs as data structures (not inline text)
- Create reusable component/pattern to render FAQ list
- Use semantic markup (e.g., `<dl>`, `<details>`, or collapsible Q&A)
- Structure data for both:
  - Visual display
  - Future FAQ schema generation

### Do NOT:
- Generate FAQ JSON-LD yet (save for future skill)
- Just ensure data is clean and reusable

## 5. General Behavior & Constraints

### When Applying This Skill:
- ✅ Respect existing tech stack (Nuxt 3, Vue 3, Tailwind, etc.)
- ✅ Don't assume specific file names/directories unless they exist
- ✅ Avoid duplicating business info in components
- ✅ Route all data through central source
- ✅ Keep implementation maintainable
- ✅ Make updates easy when business data changes

## 6. Implementation for This Project (Nuxt 3)

### Recommended Structure:
1. **Create `/utils/businessInfo.js`** (or similar) as central source
2. **Use in Contact page** (`/pages/contact.vue`)
3. **Use in Footer component** (`/components/TheFooter.vue`)
4. **Add JSON-LD via `useHead()`** composable in Contact page
5. **FAQ component** with structured data ready for schema

### Example Central Source:
```javascript
// utils/businessInfo.js
export const businessInfo = {
  name: 'PrintCo',
  legalName: 'PrintCo SRL',
  address: {
    street: 'Str. Exemplu Nr. 123',
    city: 'București',
    region: 'București',
    postalCode: '010101',
    country: 'România',
    countryCode: 'RO'
  },
  phone: '+40 123 456 789',
  email: 'contact@printco.ro',
  website: 'https://printco.ro',
  geo: {
    latitude: 44.4268,
    longitude: 26.1025
  },
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { days: ['Saturday'], opens: '10:00', closes: '14:00' }
  ],
  googleMapsUrl: 'https://maps.google.com/?q=PrintCo+București'
}
```

## 7. SEO Benefits

This skill ensures:
- **Google My Business** integration readiness
- **Local search** ranking improvements
- **Rich snippets** in search results
- **Voice search** compatibility
- **Consistent citations** across web
- **Schema.org compliance** for crawlers

## Next Steps (After This Skill)

1. Add real business data (replace placeholders)
2. Verify JSON-LD with Google's Rich Results Test
3. Add FAQ schema when FAQ content is finalized
4. Consider adding `BreadcrumbList` schema for navigation
5. Add `Service` schema for individual printing services
