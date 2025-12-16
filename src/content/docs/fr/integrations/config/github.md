---
title: GitHub
description: Configurer l'intégration GitHub pour le CI/CD.
---

L'intégration GitHub permet les déploiements automatisés via GitHub Actions.

## Fonctionnalités

- **CI/CD** : Workflows automatiques de déploiement à chaque push
- **Secrets** : Gérer les secrets du dépôt pour les déploiements

## Créer un Fine-grained Personal Access Token

1. Accédez aux [Fine-grained tokens GitHub](https://github.com/settings/personal-access-tokens)
2. Cliquez sur **Generate new token**
3. Donnez-lui un nom et définissez une date d'expiration

### Accès aux dépôts

Sélectionnez **All repositories** pour permettre à Fadogen de gérer tous vos dépôts.

### Permissions

Allez dans **Repository permissions** et définissez :

| Permission | Accès | Usage |
|------------|-------|-------|
| Actions | Read and write | Lancer les workflows GitHub Actions |
| Administration | Read and write | Créer des dépôts depuis Fadogen |
| Contents | Read-only | Synchroniser les dépôts locaux si renommés sur GitHub |
| Metadata | Read-only | Requis (activé par défaut) |
| Secrets | Read and write | Stocker les secrets de déploiement |

4. Cliquez sur **Generate token**
5. Copiez le token

## Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **GitHub**
4. Collez votre Personal Access Token
5. Cliquez sur **Enregistrer**

## Utiliser GitHub

### Gestion automatique des secrets

Lors de la liaison d'un site à un serveur, Fadogen crée automatiquement les secrets nécessaires dans votre dépôt.

### Déclencher un déploiement

Les déploiements peuvent être déclenchés de trois façons :
- **Automatiquement** : à chaque pull request fusionnée sur `main` (par défaut)
- **Depuis l'app** : cliquez sur le bouton **Deploy** dans la barre d'outils
- **Depuis GitHub** : lancez le workflow manuellement via l'onglet Actions
