---
title: Hetzner
description: Configurer les intégrations Hetzner pour VPS et DNS.
---

:::caution[Deux intégrations distinctes]
Hetzner utilise deux systèmes indépendants avec des consoles et tokens API séparés. Dans Fadogen, ce sont **deux intégrations distinctes** : Hetzner Cloud (VPS) et Hetzner DNS.
:::

## Hetzner Cloud (VPS)

Créer et gérer des serveurs cloud.

### Obtenir votre token API Cloud

1. Accédez à la [Console Hetzner Cloud](https://console.hetzner.cloud/)
2. Sélectionnez votre projet
3. Allez dans **Security** > **API Tokens**
4. Cliquez sur **Generate API Token**
5. Donnez-lui un nom et sélectionnez **Read & Write**
6. Copiez le token

### Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **Hetzner Cloud**
4. Collez votre token API
5. Cliquez sur **Enregistrer**

## Hetzner DNS

Gérer les zones et enregistrements DNS.

### Obtenir votre token API DNS

1. Accédez à la [Console Hetzner DNS](https://dns.hetzner.com/)
2. Cliquez sur **Manage API tokens**
3. Cliquez sur **Create access token**
4. Donnez-lui un nom
5. Copiez le token immédiatement (il ne sera plus affiché)

### Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **Hetzner DNS**
4. Collez votre token API
5. Cliquez sur **Enregistrer**

## Utiliser Hetzner Cloud

### Créer un serveur

1. Allez dans **Serveurs** > **Nouveau serveur**
2. Sélectionnez **Hetzner Cloud** comme fournisseur
3. Choisissez la région et le type de serveur
4. Cliquez sur **Créer**

## Utiliser Hetzner DNS

Vos zones DNS Hetzner sont automatiquement disponibles lors de la liaison d'un site à un serveur.

:::note
Vos domaines doivent utiliser les serveurs de noms Hetzner. Mettez à jour les serveurs de noms chez votre registraire de domaine pour pointer vers Hetzner.
:::
