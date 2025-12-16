---
title: Dropbox
description: Configurer l'intégration Dropbox pour les sauvegardes.
---

Dropbox fournit du stockage cloud pour les sauvegardes.

## Fonctionnalités

- **Sauvegarde** : Stockage cloud pour les sauvegardes de sites

## Créer une application Dropbox

1. Accédez à la [Console développeur Dropbox](https://www.dropbox.com/developers/apps)
2. Cliquez sur **Create app**
3. Sélectionnez **Scoped access**
4. Choisissez le type d'accès **App folder**
5. Entrez un **nom de dossier** (ex. « Fadogen Backups »)
6. Cliquez sur **Create app**

### Configurer les permissions

1. Allez dans l'onglet **Permissions**
2. Activez ces permissions :
   - `files.content.read` — Voir le contenu de vos fichiers et dossiers Dropbox
   - `files.content.write` — Modifier le contenu de vos fichiers et dossiers Dropbox
3. Cliquez sur **Submit**

### Obtenir vos identifiants

1. Allez dans l'onglet **Settings**
2. Copiez l'**App key**
3. Copiez l'**App secret**

## Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **Dropbox**
4. Collez votre **App key** et **App secret**
5. Cliquez sur **Autoriser dans le navigateur**
6. Autorisez Fadogen dans Dropbox
7. Copiez le code d'autorisation
8. Collez le code dans Fadogen
9. Cliquez sur **Enregistrer**

## Utiliser Dropbox

### Configurer les sauvegardes

Lors de la liaison d'un site à un serveur, sélectionnez Dropbox comme destination de sauvegarde.
