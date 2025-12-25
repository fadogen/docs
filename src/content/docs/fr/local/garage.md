---
title: Garage
description: Stockage S3 local pour Laravel avec Fadogen.
---

[Garage](https://garagehq.deuxfleurs.fr/) est un stockage objet léger et auto-hébergé, compatible S3.

Cliquez sur l'icône **Rafraîchir** dans la barre d'outils pour vérifier les nouvelles versions.

## Installation

1. Allez dans **Garage** dans la barre latérale
2. Cliquez sur **Installer**

## Configuration

### Port

Port S3 API par défaut : `3900`

Modifiable si nécessaire.

### Variables d'environnement

```bash
AWS_ENDPOINT_URL="https://s3.localhost"
AWS_REGION=garage
AWS_ACCESS_KEY_ID=GK6661646f67656e3067617261
AWS_SECRET_ACCESS_KEY=6661646f67656e67617261676573656372657430303030303030303030303030
```

Cliquez sur l'icône **Connexion** dans la barre d'outils pour afficher les identifiants.

### CLI AWS

Pour utiliser la CLI AWS avec Garage, ajoutez le chemin du bundle CA :

```bash
AWS_CA_BUNDLE="/Users/USER/Library/Application Support/Fadogen/config/php/cacert.pem"
```

Remplacez `USER` par votre nom d'utilisateur macOS.

## Laravel

Lors de la création d'un projet avec Fadogen et le stockage S3 activé, un bucket est créé automatiquement avec le nom de votre projet et ces variables sont ajoutées au `.env` :

```bash
AWS_ACCESS_KEY_ID=GK6661646f67656e3067617261
AWS_SECRET_ACCESS_KEY=6661646f67656e67617261676573656372657430303030303030303030303030
AWS_DEFAULT_REGION=garage
AWS_BUCKET=myapp
AWS_USE_PATH_STYLE_ENDPOINT=true
AWS_ENDPOINT=https://s3.localhost
```

Le package `league/flysystem-aws-s3-v3` est installé automatiquement.

## Démarrage automatique

Activez le démarrage automatique pour lancer Garage au démarrage de Fadogen.

## Données

Les données sont stockées dans `~/Library/Application Support/Fadogen/garage/data/`.

Les binaires sont installés dans `/Users/Shared/Fadogen` (partagés entre les comptes Mac).
