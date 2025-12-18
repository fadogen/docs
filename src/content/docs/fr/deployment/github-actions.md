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

## Secrets

Fadogen crée et gère automatiquement ces secrets dans votre dépôt GitHub.

### Secrets GitHub Actions

| Secret                  | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `SSH_HOST`              | Hostname du serveur ou hostname du tunnel Cloudflare |
| `SSH_PORT`              | Port SSH (par défaut : 22)                           |
| `SSH_USER`              | Nom d'utilisateur SSH                                |
| `SSH_PRIVATE_KEY`       | Clé privée SSH complète                              |
| `ENV_FILE_BASE64`       | Fichier `.env.production` complet encodé en base64   |
| `USE_CLOUDFLARE_TUNNEL` | `"true"` ou `"false"`                                |

### Variables GitHub Actions

| Variable      | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| `SYSTEM_ARCH` | Architecture du serveur (`x86_64`, `aarch64`)                         |
| `STACK_ID`    | Identifiant unique de stack pour Docker Swarm (ex: `my-app-a1b2c3d4`) |

:::note[Pourquoi STACK_ID ?]
La variable `STACK_ID` garantit que votre déploiement survit aux renommages de dépôt GitHub. Elle est générée une seule fois lors de la première configuration du déploiement (format : `{nom-repo}-{hash}`) et ne change jamais. Les volumes Docker utilisent cet ID comme préfixe, donc renommer votre dépôt n'orphelinera pas vos données.
:::

## Déclencher un déploiement

Les déploiements peuvent être déclenchés de trois façons :

- **Automatiquement** : à chaque pull request mergée sur `main` (par défaut)
- **Depuis l'app** : cliquez sur le bouton **Déployer** dans la barre d'outils
- **Depuis GitHub** : lancez le workflow manuellement via l'onglet Actions
