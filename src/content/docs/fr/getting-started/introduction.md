---
title: Introduction
description: Découvrez Fadogen, l'environnement de développement et déploiement PHP gratuit et open-source pour macOS.
---

## Présentation

**Fadogen** est un environnement de développement et déploiement PHP gratuit et open-source pour macOS.

Il offre un **workflow unique et unifié** pour créer et exploiter des applications Laravel et Symfony — du développement local à la production — depuis une seule application native.

Pas de configuration manuelle.
Pas de chaîne d'outils complexe.
Pas de SaaS payant requis.

---

## Quel problème Fadogen résout-il ?

Le développement PHP moderne nécessite souvent de combiner plusieurs outils :

- gestionnaires d'environnement local
- gestion des versions des runtimes
- configurations Docker
- pipelines CI/CD
- provisionnement de serveurs
- stratégies de sauvegarde

Fadogen remplace cette configuration fragmentée par une **expérience cohérente et locale** qui couvre le cycle de vie complet de votre application.

---

## Développement local

Fadogen fournit tout ce dont vous avez besoin pour travailler en local, prêt à l'emploi :

- **PHP multi-versions** avec isolation par projet
- **Node.js et Bun** avec gestion des versions
- **Bases de données** : MariaDB, MySQL, PostgreSQL
- **Caches** : Redis, Valkey
- **Serveur web** : Caddy avec HTTPS automatique
- **Test d'emails** : Mailpit
- **Temps réel** : Support natif de Laravel Reverb

Tous les services sont intégrés et gérés par l'application.

---

## Génération de projets

Créez de nouveaux projets en quelques minutes :

- Laravel ou Symfony
- Choix de la base de données et du cache
- Options frontend et outillage
- Configuration prête pour la production

Fadogen génère :

- le code source de l'application
- un Dockerfile multi-stage
- un fichier compose.yaml
- un workflow CI/CD GitHub Actions

Vous possédez tout.

---

## Déploiement en production

Déployez vos applications directement depuis Fadogen :

- **Provisionnement VPS** sur Hetzner, DigitalOcean, Vultr, Linode
- **Déploiements en un clic** sans interruption de service
- **Intégration GitHub Actions** pour le push-to-deploy
- **Gestion DNS** sur plusieurs fournisseurs
- **Certificats SSL automatiques**
- **Sauvegardes de base de données** vers un stockage compatible S3 ou Dropbox
- **Restauration automatique** lors des nouveaux déploiements

Vous pouvez également déployer sur vos propres serveurs via Cloudflare Tunnel, sans ouvrir de ports.

---

## Confidentialité et contrôle

Fadogen est conçu avec la confidentialité à l'esprit :

- Pas de compte
- Pas de télémétrie
- Pas d'identifiants stockés sur des serveurs externes

Toutes les données sensibles restent sur votre machine, chiffrées et synchronisées via iCloud.

---

## Prérequis

- macOS 26.0 ou ultérieur
- Apple Silicon

---

## Prochaines étapes

Commencez par installer Fadogen et créer votre premier projet :

- [Installation](/fr/getting-started/installation/)
- [Premier projet](/fr/getting-started/first-project/)

Pour approfondir, explorez les sections de documentation sur les projets, le déploiement et l'infrastructure.
