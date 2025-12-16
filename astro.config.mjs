// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Fadogen',
      logo: {
        src: './src/assets/logo.png',
      },
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/VwnJSTppHd' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/fadogen/app' },
      ],
      editLink: {
        baseUrl: 'https://github.com/fadogen/app/edit/main/docs/',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        fr: {
          label: 'Français',
          lang: 'fr',
        },
        de: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: { fr: 'Premiers pas', de: 'Erste Schritte' },
          items: [
            { slug: 'getting-started/introduction' },
            { slug: 'getting-started/installation' },
            { slug: 'getting-started/first-project' },
          ],
        },
        { slug: 'projects' },
        {
          label: 'Local Environment',
          translations: { fr: 'Environnement local', de: 'Lokale Umgebung' },
          items: [
            { slug: 'local/php' },
            { slug: 'local/nodejs' },
            { slug: 'local/databases' },
            { slug: 'local/caches' },
            { slug: 'local/reverb' },
            { slug: 'local/mailpit' },
            { slug: 'local/caddy' },
          ],
        },
        {
          label: 'Deployment',
          translations: { fr: 'Déploiement', de: 'Bereitstellung' },
          items: [
            { slug: 'deployment/servers' },
            { slug: 'deployment/github-actions' },
          ],
        },
        {
          label: 'Integrations',
          translations: { fr: 'Intégrations', de: 'Integrationen' },
          items: [
            { slug: 'integrations' },
            {
              label: 'Configuration',
              translations: { fr: 'Configuration', de: 'Konfiguration' },
              items: [
                { slug: 'integrations/config/bunny' },
                { slug: 'integrations/config/cloudflare' },
                { slug: 'integrations/config/digitalocean' },
                { slug: 'integrations/config/dropbox' },
                { slug: 'integrations/config/github' },
                { slug: 'integrations/config/hetzner' },
                { slug: 'integrations/config/linode' },
                { slug: 'integrations/config/scaleway' },
                { slug: 'integrations/config/vultr' },
              ],
            },
          ],
        },
        {
          label: 'Architecture',
          translations: { fr: 'Architecture', de: 'Architektur' },
          items: [
            { slug: 'architecture/overview' },
            { slug: 'architecture/provisioning' },
          ],
        },
        {
          label: 'Reference',
          translations: { fr: 'Référence', de: 'Referenz' },
          items: [
            { slug: 'reference/docker' },
            { slug: 'reference/fadogen-file' },
            { slug: 'reference/shell' },
            { slug: 'reference/vite-plugin' },
          ],
        },
      ],
    }),
  ],

  adapter: cloudflare(),
});