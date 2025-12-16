---
title: Caddy
description: Serveur web avec HTTPS automatique.
---

[Caddy](https://caddyserver.com) est le serveur web utilisé par Fadogen. Il gère automatiquement les certificats HTTPS pour vos projets locaux.

## HTTPS automatique

Tous vos projets sont accessibles via HTTPS avec des certificats valides.

Les URLs sont au format `https://nom-du-projet.localhost`.

## Configuration automatique

Fadogen génère automatiquement la configuration Caddy pour chaque projet détecté.

La configuration est automatiquement rechargée quand :
- Un projet est ajouté ou supprimé
- Les paramètres d'un projet changent

## Logs

Consultez les logs Caddy dans **Caddy** > **Logs** pour débugger les problèmes.

## PHP-FPM

Caddy utilise PHP-FPM pour exécuter les scripts PHP. Chaque projet utilise sa version PHP configurée.
