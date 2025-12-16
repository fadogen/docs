---
title: Serveurs
description: Créez et gérez des serveurs VPS avec Fadogen.
---

Fadogen peut provisionner et gérer des serveurs VPS sur différents fournisseurs cloud.

## Fournisseurs supportés

- DigitalOcean
- Hetzner
- Vultr
- Linode

## Créer un serveur

### Depuis un fournisseur cloud

1. Allez dans **Serveurs**
2. Cliquez sur **Nouveau serveur**
3. Sélectionnez un fournisseur cloud
4. Configurez le serveur (région, taille, etc.)
5. Optionnellement, activez **Cloudflare Tunnel** (nécessite l'[intégration Cloudflare](/fr/integrations/config/cloudflare))
6. Cliquez sur **Créer**

Fadogen va créer le serveur via l'API du fournisseur, attendre qu'il soit prêt, et le provisionner.

### Serveur custom

Pour les serveurs créés manuellement dans le dashboard d'un fournisseur ou les serveurs auto-hébergés (home lab, serveur dédié, etc.) :

1. Allez dans **Serveurs**
2. Cliquez sur **Nouveau serveur**
3. Sélectionnez **Custom**
4. Fournissez les identifiants SSH :
   - Hôte et utilisateur
   - Authentification : mot de passe ou clé SSH (détection automatique depuis `~/.ssh` ou coller le contenu de la clé privée)
5. Optionnellement, activez **Cloudflare Tunnel** (nécessite l'[intégration Cloudflare](/fr/integrations/config/cloudflare))
6. Cliquez sur **Créer**

:::note
Le serveur doit être une installation fraîche sans configuration préalable.
:::

## Provisionnement

Un playbook Ansible intégré à l'app configure automatiquement le serveur.

:::caution
Ne fermez pas l'app pendant le provisionnement. Ce processus prend 5 à 10 minutes.
:::

:::note
Le provisionnement peut échouer pour diverses raisons (problèmes du fournisseur, coupure internet, etc.). La solution la plus simple est de supprimer le serveur et de recommencer. Fadogen supprime également le serveur chez le fournisseur, mais vérifiez dans le dashboard du fournisseur que la suppression a bien fonctionné pour éviter des coûts inattendus. Si le problème persiste, veuillez [créer une issue sur GitHub](https://github.com/fadogen/app/issues).
:::

Le provisionnement configure :
- Pare-feu (uniquement les ports nécessaires, ou aucun si Cloudflare Tunnel est utilisé)
- fail2ban (prévention des intrusions)
- Docker Swarm
- Traefik (reverse proxy avec SSL automatique)

## Clés SSH

Fadogen scanne automatiquement votre répertoire `~/.ssh` pour les clés disponibles. Si aucune clé n'existe, une sera créée automatiquement.
