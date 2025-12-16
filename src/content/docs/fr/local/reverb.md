---
title: Reverb
description: Serveur WebSocket pour Laravel avec Fadogen.
---

[Laravel Reverb](https://laravel.com/docs/reverb) est un serveur WebSocket pour les applications temps réel.

Cliquez sur l'icône **Rafraîchir** dans la barre d'outils pour vérifier les nouvelles versions.

## Installation

1. Allez dans **Reverb** dans la barre latérale
2. Cliquez sur **Installer**

## Configuration

### Port

Port par défaut : `8080`

Modifiable si nécessaire.

### Variables d'environnement

```env
BROADCAST_DRIVER=reverb
REVERB_APP_ID=1001
REVERB_APP_KEY=laravel-fadogen
REVERB_APP_SECRET=secret
REVERB_HOST="reverb.localhost"
REVERB_PORT=443
REVERB_SCHEME=https
```

Cliquez sur l'icône **Connexion** dans la barre d'outils pour afficher les identifiants.

## Démarrage automatique

Activez le démarrage automatique pour lancer Reverb au démarrage de Fadogen.

## Données

Les binaires sont installés dans `/Users/Shared/Fadogen` (partagés entre les comptes Mac).
