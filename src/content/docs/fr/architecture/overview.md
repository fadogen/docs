---
title: Vue d'ensemble de l'architecture
description: Aperçu technique de l'architecture de Fadogen.
---

Fadogen est une application macOS native **100% autonome**.

## Tout inclus

Tous les outils sont intégrés directement dans l'application :

- **PHP** (version majeure précédente)
- **Node.js** (dernière LTS)
- **Caddy** (serveur web)
- **Ansible** (provisionnement)
- **Python** (pour Ansible)

Aucun outil externe requis. Pas besoin de Homebrew ou d'autres gestionnaires de paquets.

## Binaires indépendants

Les binaires sont compilés depuis le dépôt public [fadogen/binaries](https://github.com/fadogen/binaries) et distribués automatiquement via le stockage R2. Ils sont régulièrement mis à jour.

L'application télécharge et met à jour les binaires nécessaires de manière transparente.

## Confidentialité

- **Aucune communication serveur** : tout fonctionne localement
- **Données sécurisées** : stockées dans iCloud et chiffrées
- **Open source** : le code est auditable

## Distribution

Fadogen est distribué via **GitHub Releases** avec :
- Signature Developer ID
- Notarisation Apple

### Pourquoi pas le Mac App Store ?

Le sandbox du Mac App Store empêche :
1. L'installation de certificats SSL pour le HTTPS local
2. Le téléchargement de binaires après l'installation

## Licence

Fadogen est sous licence **AGPLv3**. Cette licence a été choisie pour garantir que tout fork potentiel reste open source et utile à tous.
