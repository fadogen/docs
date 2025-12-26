---
title: Installation
description: Comment télécharger et installer Fadogen sur macOS.
---

## Téléchargement et installation

[Téléchargez Fadogen](https://github.com/fadogen/app/releases/latest/download/Fadogen.dmg), ouvrez le `.dmg` et glissez Fadogen dans Applications.

## Première configuration

Au premier lancement, Fadogen va :
1. Installer les certificats TLS pour le HTTPS local
2. Configurer l'intégration shell (bash/zsh/fish)

### Certificats TLS

Une invite système apparaîtra pour vous demander d'installer le certificat racine Caddy dans votre trousseau. C'est nécessaire pour que le HTTPS local fonctionne sans avertissements du navigateur.

- **Si vous acceptez** : Le HTTPS local fonctionnera parfaitement. **Redémarrez vos navigateurs** après avoir accepté pour que le certificat soit reconnu.
- **Si vous refusez** : Vos sites locaux fonctionneront quand même, mais les navigateurs afficheront des avertissements de sécurité pour les connexions HTTPS.

## Mises à jour

Pour mettre à jour Fadogen, cliquez sur **Fadogen** dans la barre de menus et sélectionnez **Rechercher des mises à jour**. Vous pouvez également activer les mises à jour automatiques depuis ce menu.
