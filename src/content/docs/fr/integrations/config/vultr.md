---
title: Vultr
description: Configurer l'intégration Vultr pour VPS et DNS.
---

Vultr fournit l'hébergement VPS et la gestion DNS.

## Fonctionnalités

- **VPS** : Créer et gérer des instances cloud
- **DNS** : Gérer les zones et enregistrements DNS

## Obtenir votre clé API

1. Accédez au [Panneau de contrôle Vultr](https://my.vultr.com/)
2. Allez dans **Account** > **API**
3. Cliquez sur **Enable API**
4. Copiez la clé API

## Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **Vultr**
4. Collez votre clé API
5. Cliquez sur **Enregistrer**

## Utiliser Vultr

### Créer un serveur

1. Allez dans **Serveurs** > **Nouveau serveur**
2. Sélectionnez **Vultr** comme fournisseur
3. Choisissez la région et le type d'instance
4. Cliquez sur **Créer**

### Gestion DNS

Vos zones DNS Vultr sont automatiquement disponibles lors de la liaison d'un site à un serveur.

:::caution[Instance active requise]
Vous devez avoir au moins une instance Vultr active pour ajouter un domaine à votre compte.
:::

:::note
Vos domaines doivent utiliser les serveurs de noms Vultr. Mettez à jour les serveurs de noms chez votre registraire de domaine pour pointer vers Vultr.
:::
