import { site } from '../content/site'

function trimTrailingSlash(url: string) {
  return url.replace(/\/+$/, '')
}

/** Set `VITE_SITE_URL` in `.env` (e.g. https://yoursite.com) before production deploy. */
export const siteUrl = trimTrailingSlash(
  typeof import.meta.env.VITE_SITE_URL === 'string' && import.meta.env.VITE_SITE_URL.trim() !== ''
    ? import.meta.env.VITE_SITE_URL.trim()
    : 'https://nexorasystems.example',
)

export const pageTitle = `${site.name} | IT Services & Engineering`

export const pageDescription =
  `${site.name} — managed IT, cloud, and custom software for teams that need reliability, clear SLAs, and accountable engineering partners.`

export const keywords =
  'managed IT services, cloud consulting, DevOps, AWS, Azure, GCP, custom software, infrastructure, SLAs, SOC 2, IT engineering partner'

export function absoluteUrl(path: string) {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${p}`
}

export const ogImageUrl = absoluteUrl('/favicon.svg')
