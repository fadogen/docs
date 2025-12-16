---
title: Docker
description: Référence des fichiers Docker générés.
---

Fadogen génère des fichiers Docker optimisés et prêts pour la production pour vos projets PHP.

## Dockerfile

### Image de base

Le Dockerfile généré utilise les images Docker [serversideup/php](https://serversideup.net/open-source/docker-php/) avec [FrankenPHP](https://frankenphp.dev/).

:::tip[Merci à Server Side Up]
Nous remercions l'équipe [Server Side Up](https://serversideup.net/) pour leurs excellentes images Docker PHP open-source. Leur travail permet de fournir des conteneurs optimisés, sécurisés et prêts pour la production.
:::

### Pourquoi FrankenPHP ?

- **Performance** : Construit sur Caddy avec support PHP natif
- **Simplicité** : Binaire unique, pas de configuration PHP-FPM ou Nginx
- **Moderne** : Support HTTP/3, early hints et mode worker
- **Production-ready** : Optimisé pour les déploiements conteneurisés

### Extensions PHP

Les extensions suivantes sont installées par défaut :

| Extension | Usage |
|-----------|-------|
| `bcmath` | Mathématiques de précision arbitraire |
| `intl` | Fonctions d'internationalisation |

Les extensions supplémentaires de l'image de base sont documentées dans la [documentation serversideup/php](https://serversideup.net/open-source/docker-php/docs).

### Personnalisation

Le Dockerfile généré vous appartient et peut être modifié. Personnalisations courantes :

#### Ajouter des extensions PHP

```dockerfile
RUN install-php-extensions redis imagick gd
```

#### Ajouter des packages système

```dockerfile
RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*
```

## Fichiers Compose

### compose.prod.yaml

Ce fichier définit votre stack Docker Swarm de production. Il inclut :

- Votre service applicatif
- Service de base de données (si configuré)
- Service de cache (si configuré)
- Configurations réseau et volumes

### compose.prod.certresolver.yaml

Ce fichier configure la génération automatique de certificats SSL via Let's Encrypt.

:::note
Ce fichier est uniquement nécessaire si votre serveur n'est **pas** derrière un Cloudflare Tunnel. Si vous utilisez un Cloudflare Tunnel, SSL est géré par Cloudflare et vous pouvez supprimer ce fichier.
:::

## Ressources associées

- [Documentation Server Side Up Docker PHP](https://serversideup.net/open-source/docker-php/docs)
- [Documentation FrankenPHP](https://frankenphp.dev/docs/)
- [Workflow GitHub Actions](/fr/deployment/github-actions/)
