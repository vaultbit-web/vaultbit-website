import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vaultbit.es',
  trailingSlash: 'never',
  // NOTA: NO usar `redirects` para /diagnostico — colisiona con el funnel HTML
  // estático en public/diagnostico/index.html y lo sobreescribe en build.
  // En producción, serve.json hace el rewrite /diagnostico → /diagnostico/index.html.
  redirects: {
    // La historia del founder vive en su propia página.
    '/sobre-nosotros': '/historia',
    // Renombrado del servicio: ahora es Diagnóstico 360º (escalón intermedio del funnel
    // entre Test de Autocustodia gratuito y Heritage Protocol). 301 permanente para
    // preservar SEO de la URL antigua.
    '/servicios/consultoria-360': {
      status: 301,
      destination: '/servicios/diagnostico-360',
    },
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('/inversores') || page.includes('/404')) return false;
        return true;
      },
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES' },
      },
    }),
    mdx(),
  ],
});
