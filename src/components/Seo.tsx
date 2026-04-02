import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  keywords,
  ogImageUrl,
  pageDescription,
  pageTitle,
  siteUrl,
} from '../seo/config'
import { buildJsonLd } from '../seo/jsonLd'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function Seo() {
  const { pathname } = useLocation()
  const canonicalPath = pathname === '/' ? '' : pathname
  const canonical = `${siteUrl}${canonicalPath || '/'}`

  useLayoutEffect(() => {
    document.title = pageTitle

    upsertMeta('name', 'description', pageDescription)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', pageTitle)
    upsertMeta('name', 'twitter:description', pageDescription)
    upsertMeta('name', 'twitter:image', ogImageUrl)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:title', pageTitle)
    upsertMeta('property', 'og:description', pageDescription)
    upsertMeta('property', 'og:image', ogImageUrl)
    upsertMeta('property', 'og:locale', 'en_US')
    upsertMeta('property', 'og:site_name', 'Nexora Systems')

    upsertLink('canonical', canonical)
  }, [canonical])

  const json = JSON.stringify(buildJsonLd())

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  )
}
