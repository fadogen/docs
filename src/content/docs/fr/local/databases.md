---
title: Bases de données
description: MariaDB, MySQL et PostgreSQL avec Fadogen.
---

Fadogen supporte trois systèmes de bases de données :
- **MariaDB**
- **MySQL**
- **PostgreSQL**

Cliquez sur l'icône **Rafraîchir** dans la barre d'outils pour vérifier les nouvelles versions.

## Installer une base de données

1. Allez dans **Bases de données** dans la barre latérale
2. Cliquez sur **Installer** à côté du système souhaité
3. Choisissez la version

## Démarrer/Arrêter

Chaque service peut être démarré ou arrêté individuellement.

### Démarrage automatique

Activez le démarrage automatique pour lancer le service au démarrage de Fadogen.

## Configuration

### Port

Chaque service utilise un port par défaut :
- MariaDB/MySQL : 3306
- PostgreSQL : 5432

Vous pouvez modifier le port si nécessaire.

### Données

Les binaires sont installés dans `/Users/Shared/Fadogen` (partagés entre les comptes Mac). Les données sont stockées dans `~/Library/Application Support/Fadogen/data/` et préservées entre les redémarrages.

## Connexion

Cliquez sur l'icône **Connexion** dans la barre d'outils pour afficher les identifiants.

- **Hôte** : `127.0.0.1`
- **Port** : Selon le service
- **Utilisateur** : `root` (par défaut)
- **Mot de passe** : Vide par défaut
