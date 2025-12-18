---
title: Synchronisation iCloud
description: Comment Fadogen stocke et synchronise vos données de manière sécurisée via iCloud.
---

Fadogen stocke vos données de configuration localement et les synchronise de manière sécurisée via iCloud.

## Ce qui est synchronisé

Les données suivantes sont synchronisées vers votre compte iCloud privé :

- Projets déployés
- Serveurs
- Intégrations

Cela vous permet de récupérer votre configuration lors de l'installation de Fadogen sur un nouveau Mac.

## Sécurité

Les clés API, tokens et identifiants sont chiffrés localement. Les données sont synchronisées vers votre compte iCloud privé — Fadogen n'a aucun serveur backend.

## Installation sur un nouveau Mac

Lorsque vous installez Fadogen sur un nouveau Mac :

1. Connectez-vous avec votre identifiant Apple
2. Fadogen récupère automatiquement vos données chiffrées depuis iCloud
3. Vos projets, serveurs et intégrations sont restaurés

Aucun export ou import manuel requis.

## Ce qui n'est PAS synchronisé

Les données suivantes restent sur votre machine locale :

- Bases de données de développement local (MariaDB, MySQL, PostgreSQL)
- Données de cache (Redis, Valkey)
- Données des runtimes PHP et Node.js
- Fichiers de projet locaux (stockés dans votre système de fichiers)

Ce sont des ressources de développement uniquement qui n'ont pas besoin de persister entre les machines.
