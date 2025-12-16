---
title: DigitalOcean
description: Configurer l'intégration DigitalOcean pour VPS et DNS.
---

DigitalOcean fournit l'hébergement VPS (Droplets) et la gestion DNS.

## Fonctionnalités

- **VPS** : Créer et gérer des Droplets
- **DNS** : Gérer les zones et enregistrements DNS

## Obtenir votre token API

1. Accédez au [Panneau de contrôle DigitalOcean](https://cloud.digitalocean.com/)
2. Allez dans **API** > **Tokens**
3. Cliquez sur **Generate New Token**
4. Donnez-lui un nom et sélectionnez **Full Access**
5. Copiez le token

## Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **DigitalOcean**
4. Collez votre token API
5. Cliquez sur **Enregistrer**

## Utiliser DigitalOcean

### Créer un serveur

1. Allez dans **Serveurs** > **Nouveau serveur**
2. Sélectionnez **DigitalOcean** comme fournisseur
3. Choisissez la région et la taille du Droplet
4. Cliquez sur **Créer**

### Gestion DNS

Vos zones DNS DigitalOcean sont automatiquement disponibles lors de la liaison d'un site à un serveur.

:::note
Vos domaines doivent utiliser les serveurs de noms DigitalOcean. Mettez à jour les serveurs de noms chez votre registraire de domaine pour pointer vers DigitalOcean.
:::
