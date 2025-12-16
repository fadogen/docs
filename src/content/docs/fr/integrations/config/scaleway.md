---
title: Scaleway
description: Configurer l'intégration Scaleway pour les sauvegardes.
---

Scaleway fournit du stockage objet compatible S3 pour les sauvegardes.

## Fonctionnalités

- **Sauvegarde** : Stockage objet pour les sauvegardes de sites

## Obtenir vos identifiants

1. Accédez à la [Console Scaleway](https://console.scaleway.com/)
2. Cliquez sur votre icône de profil > **IAM et clés API**
3. Allez dans l'onglet **Clés API**
4. Cliquez sur **Générer une clé API**
5. Sélectionnez **Moi-même**
6. Répondez **Oui** à « Cette clé API sera-t-elle utilisée pour Object Storage ? »
7. Sélectionnez le projet **default**
8. Cliquez sur **Générer**
9. Copiez l'Access Key et la Secret Key

## Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **Scaleway**
4. Entrez votre Access Key et Secret Key
5. Cliquez sur **Enregistrer**

## Utiliser Scaleway

### Configurer les sauvegardes

Lors de la liaison d'un site à un serveur, sélectionnez Scaleway comme destination de sauvegarde.
