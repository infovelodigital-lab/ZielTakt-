import { useEffect } from 'react';

const SITE_URL = 'https://zieltakt.de';

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

// Setzt pro Route einen eindeutigen <title>, meta description und canonical/og:url.
export default function usePageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setTag('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    }, 'content', description);
    setTag('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }, 'href', url);
    setTag('meta[property="og:url"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:url');
      return m;
    }, 'content', url);
  }, [title, description, path]);
}
