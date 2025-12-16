---
title: Linode
description: Configurer l'intégration Linode pour VPS et DNS.
---

Linode (Akamai) fournit l'hébergement VPS et la gestion DNS.

## Fonctionnalités

- **VPS** : Créer et gérer des instances Linode
- **DNS** : Gérer les zones et enregistrements DNS

## Obtenir votre token API

1. Accédez au [Linode Cloud Manager](https://cloud.linode.com/)
2. Allez dans **Profile** > **API Tokens**
3. Cliquez sur **Create a Personal Access Token**
4. Donnez-lui un nom et définissez une expiration (ou « Never » pour aucune expiration)

### Permissions requises

Définissez ces scopes :

| Scope | Accès | Usage |
|-------|-------|-------|
| Linodes | Read/Write | Créer et gérer des serveurs |
| Domains | Read/Write | Lister les zones et gérer les enregistrements DNS |

Tous les autres scopes peuvent être définis sur **None**.

5. Cliquez sur **Create Token**
6. Copiez le token immédiatement (il ne sera plus affiché)

## Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **Linode**
4. Collez votre token API
5. Cliquez sur **Enregistrer**

## Utiliser Linode

### Créer un serveur

1. Allez dans **Serveurs** > **Nouveau serveur**
2. Sélectionnez **Linode** comme fournisseur
3. Choisissez la région et le type de Linode
4. Cliquez sur **Créer**

### Gestion DNS

Vos zones DNS Linode sont automatiquement disponibles lors de la liaison d'un site à un serveur.

:::caution[Linode actif requis]
Vos domaines ne seront pas servis par les serveurs de noms Linode sauf si vous avez au moins un Linode actif sur votre compte.
:::

:::note
Vos domaines doivent utiliser les serveurs de noms Linode. Mettez à jour les serveurs de noms chez votre registraire de domaine pour pointer vers Linode.
:::
