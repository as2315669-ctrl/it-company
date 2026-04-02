import { site } from '../content/site'
import { absoluteUrl, pageDescription, siteUrl } from './config'

export function buildJsonLd() {
  const orgId = `${siteUrl}/#organization`
  const webId = `${siteUrl}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: site.name,
        legalName: site.legalName,
        url: siteUrl,
        description: site.tagline,
        email: site.footer.email,
        telephone: site.footer.phone,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/favicon.svg'),
        },
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United States' },
        ],
        serviceType: site.services.map((s) => s.title),
      },
      {
        '@type': 'WebSite',
        '@id': webId,
        url: siteUrl,
        name: site.name,
        description: pageDescription,
        inLanguage: 'en',
        publisher: { '@id': orgId },
      },
    ],
  }
}
