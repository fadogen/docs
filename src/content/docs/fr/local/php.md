---
title: PHP
description: Gérez les versions PHP avec Fadogen.
---

## Versions disponibles

Fadogen supporte plusieurs versions de PHP simultanément. Les binaires sont compilés depuis les sources officielles via [fadogen/binaries](https://github.com/fadogen/binaries).

Cliquez sur l'icône **Rafraîchir** dans la barre d'outils pour vérifier les nouvelles versions.

## Installer une version

1. Allez dans **PHP** dans la barre latérale
2. Cliquez sur **Installer** à côté de la version souhaitée
3. Attendez la fin du téléchargement

## Version par défaut

La version par défaut est utilisée pour les nouveaux projets et dans le terminal.

Pour changer la version par défaut :
1. Allez dans **PHP**
2. Cliquez sur **Définir par défaut** à côté de la version souhaitée

## Version par projet

Chaque projet peut utiliser une version PHP différente :
1. Sélectionnez le projet dans **Projets**
2. Changez la version PHP dans les paramètres du projet

Cette configuration est enregistrée dans le fichier `.fadogen`.

## Configuration php.ini

Les paramètres PHP courants peuvent être modifiés :
- `memory_limit`
- `upload_max_filesize`
- `post_max_size`
