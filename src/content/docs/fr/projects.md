---
title: Projets
description: Gérez vos projets PHP du développement local au déploiement en production.
sidebar:
  order: 1
---

Fadogen gère vos projets PHP du développement local au déploiement en production.

## Gérer vos projets

### Dossiers surveillés

Fadogen surveille automatiquement les dossiers que vous configurez pour détecter vos projets PHP.

1. Allez dans **Projets**
2. Cliquez sur l'icône **Gérer les dossiers** dans la barre d'outils
3. Ajoutez le dossier contenant vos projets

## Développement local

### URLs locales

Chaque projet reçoit une URL locale au format `https://nom-du-projet.localhost`.

### Personnaliser l'URL

1. Sélectionnez le projet
2. Cliquez sur le nom de l'URL
3. Modifiez selon vos souhaits

### Configuration par projet

Chaque projet peut avoir sa propre configuration :
- Version PHP
- Version Node.js

Ces paramètres sont stockés dans le fichier `.fadogen` à la racine du projet.

## Partager votre travail

Partagez votre site de développement local avec d'autres personnes pour obtenir un retour, tester sur différents appareils ou faire une démo — le tout sans déployer sur un serveur.

Accédez aux options de tunnel depuis l'onglet **Développement** dans la vue détaillée du projet.

### Tunnel rapide

Créez un tunnel instantané avec une URL aléatoire `*.trycloudflare.com`. Aucune configuration requise.

:::note
Les tunnels rapides sont temporaires et s'arrêtent automatiquement après un certain temps sans avertissement. Utilisez-les uniquement pour des sessions de partage courtes.
:::

### Domaine personnalisé

Utilisez votre propre domaine pour le tunnel. Cela nécessite :
- Une [intégration Cloudflare](/fr/integrations/config/cloudflare/) configurée
- Un domaine actif chez Cloudflare

### Protection par mot de passe

Les deux types de tunnel supportent la protection par mot de passe :
- **Nom d'utilisateur** : `user`
- **Mot de passe** : généré aléatoirement

Les identifiants sont affichés au démarrage du tunnel.

### Projets Frontend

Pour les projets frontend (SPA), vous devez builder votre projet avant de créer un tunnel. Fadogen sert les fichiers buildés depuis les répertoires suivants :

| Framework | Répertoire de build |
|-----------|---------------------|
| Laravel, Symfony | — (servi directement) |
| Next.js | `out` |
| Nuxt | `.output/public` |
| SvelteKit | `build` |
| React, Vue, Svelte | `dist` |

:::caution[Sécurité]
Arrêtez le tunnel dès que vous n'avez plus besoin de partager votre site. Tant qu'il est actif, votre environnement de développement local est exposé sur Internet.
:::

## Déploiement en production

### Prérequis

- Un [serveur provisionné](/fr/deployment/servers/)
- Un dépôt GitHub lié à votre projet (cliquez sur l'icône **GitHub** d'un projet pour le lier rapidement)

### Lier un projet à un serveur

1. Sélectionnez un projet dans **Projets**
2. Allez dans l'onglet **Production**
3. Sélectionnez le serveur cible
4. Sélectionnez la zone de domaine depuis vos intégrations DNS (uniquement Cloudflare si derrière un tunnel)
5. Configurez optionnellement un sous-domaine (un avertissement apparaît s'il est déjà utilisé)
6. Sélectionnez un fournisseur de sauvegarde si configuré (S3, Dropbox)
7. Cliquez sur **Lier**

### Processus de liaison

Fadogen va :
1. Créer les enregistrements DNS pour votre domaine
2. Configurer Traefik pour les certificats SSL (si pas de Cloudflare Tunnel)
3. Configurer les secrets GitHub pour le CI/CD

### Déclencher un déploiement

Une fois lié, les déploiements peuvent être déclenchés :
- **Automatiquement** : à chaque pull request fusionnée sur `main`
- **Depuis l'app** : cliquez sur le bouton **Deploy** dans la barre d'outils
- **Depuis GitHub** : lancez le workflow manuellement via l'onglet Actions

### Variables d'environnement

Cliquez sur le bouton **Environment** dans la barre d'outils pour voir et modifier les variables de production.

Les modifications sont automatiquement synchronisées avec les secrets GitHub et stockées chiffrées dans l'app.
