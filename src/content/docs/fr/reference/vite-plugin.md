---
title: Plugin Vite
description: Configurer automatiquement HTTPS pour les nouveaux projets Laravel.
---

Le package `@fadogen/vite-plugin` configure automatiquement HTTPS pour le serveur de développement Vite en chargeant les certificats TLS générés par Fadogen.

:::tip[Configuration automatique]
Lors de la création d'un nouveau projet Laravel depuis l'app Fadogen, ce plugin est automatiquement installé et configuré.
:::

Ce plugin évite de devoir définir manuellement les variables d'environnement `VITE_DEV_SERVER_KEY` et `VITE_DEV_SERVER_CERT` dans votre fichier `.env`.

## Installation

```bash
npm install -D @fadogen/vite-plugin
```

## Configuration

Dans votre fichier `vite.config.ts` :

```ts
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import fadogen from '@fadogen/vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    fadogen(),
  ],
})
```

:::caution[Utilisateurs Laravel Herd]
Si vous avez Laravel Herd installé, vous devez désactiver sa détection TLS automatique en ajoutant `detectTls: false` au plugin Laravel :

```ts
laravel({
  input: ['resources/css/app.css', 'resources/js/app.js'],
  refresh: true,
  detectTls: false,
}),
```

Sinon, Vite ne pourra pas démarrer à cause de configurations TLS conflictuelles.
:::

## Fonctionnement

Le plugin détecte automatiquement les certificats TLS générés par Fadogen :

1. Récupère le nom du dossier du projet
2. Le convertit en nom de domaine valide (ex. `mon-projet` → `mon-projet.localhost`)
3. Cherche les certificats dans le dossier de données Fadogen
4. Configure le serveur Vite pour utiliser HTTPS avec ces certificats

### Emplacement des certificats

Les certificats sont stockés dans :

```
~/Library/Application Support/Fadogen/data/caddy/certificates/local/{domain}/
```

### Conversion du nom de projet

Le nom du dossier est converti en hostname valide (RFC 1123) :

| Nom du dossier | Domaine généré |
|----------------|----------------|
| `mon-projet` | `mon-projet.localhost` |
| `Mon Projet` | `mon-projet.localhost` |
| `mon_projet` | `mon-projet.localhost` |

:::note
Le projet doit d'abord être ajouté à Fadogen pour que les certificats soient générés.
:::

## Logs

Le plugin affiche des messages dans la console :

```
[@fadogen/vite-plugin] Using certificates for: mon-projet.localhost
```

Si les certificats ne sont pas trouvés :

```
[@fadogen/vite-plugin] Certificates not found at: ~/Library/Application Support/...
```
