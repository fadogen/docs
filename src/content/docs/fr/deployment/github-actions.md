---
title: GitHub Actions
description: CI/CD avec push-to-deploy via GitHub Actions.
---

Fadogen génère automatiquement des workflows GitHub Actions lorsque vous créez un projet.

## Fonctionnalités

- **Déploiements sans interruption** grâce à Docker Swarm
- **Support multi-architecture** : AMD64 et ARM64 sans configuration
- **Support Cloudflare Tunnel** : fonctionne automatiquement si votre serveur utilise un tunnel
- **Restauration automatique des backups** : restaure les backups si aucun volume n'existe sur le serveur mais que des backups sont détectés dans votre intégration de backup

:::tip[Migrations de base de données]
Pour des déploiements sans interruption, utilisez des migrations progressives : déployez d'abord avec des champs nullable, puis ajoutez les contraintes dans un second déploiement. Cela garantit que l'ancienne version continue de fonctionner pendant que la nouvelle démarre. Voir [Parallel Change](https://martinfowler.com/bliki/ParallelChange.html) (en anglais) pour plus de détails.
:::

## Comment ça marche

1. Liez votre projet à un serveur
2. Pushez du code sur votre dépôt GitHub
3. GitHub Actions exécute le workflow généré
4. Votre application est déployée sans interruption

## Workflow généré

Fadogen crée un fichier workflow complet dans votre dépôt à `.github/workflows/deploy.yml`.

Le workflow gère :
- La construction de votre application
- La connexion au serveur via tunnel (si applicable)
- La restauration des backups (si applicable)
- Le déploiement sur Docker Swarm avec mises à jour progressives (zero downtime)

## Secrets requis

Fadogen crée automatiquement ces secrets dans votre dépôt GitHub :
- Identifiants de connexion au serveur (SSH)
- Variables d'environnement de l'application

## Déclencher un déploiement

Les déploiements peuvent être déclenchés de trois façons :

- **Automatiquement** : à chaque pull request mergée sur `main` (par défaut)
- **Depuis l'app** : cliquez sur le bouton **Déployer** dans la barre d'outils
- **Depuis GitHub** : lancez le workflow manuellement via l'onglet Actions
