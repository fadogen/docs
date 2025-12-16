---
title: Caches
description: Redis et Valkey avec Fadogen.
---

Fadogen supporte deux systèmes de cache :
- **Redis**
- **Valkey** : Fork open-source de Redis

Cliquez sur l'icône **Rafraîchir** dans la barre d'outils pour vérifier les nouvelles versions.

## Installer un cache

1. Allez dans **Caches** dans la barre latérale
2. Cliquez sur **Installer** à côté du système souhaité

## Configuration

### Port

Port par défaut : `6379`

Modifiable si nécessaire.

### Démarrage automatique

Activez le démarrage automatique pour lancer le service au démarrage de Fadogen.

### Données

Les binaires sont installés dans `/Users/Shared/Fadogen` (partagés entre les comptes Mac). Les données sont stockées dans `~/Library/Application Support/Fadogen/data/` et préservées entre les redémarrages.

## Connexion

Cliquez sur l'icône **Connexion** dans la barre d'outils pour afficher les identifiants.

- **Hôte** : `127.0.0.1`
- **Port** : `6379`
- **Mot de passe** : Vide par défaut
