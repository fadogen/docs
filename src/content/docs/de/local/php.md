---
title: PHP
description: Verwalten Sie PHP-Versionen mit Fadogen.
---

## Verfügbare Versionen

Fadogen unterstützt mehrere PHP-Versionen gleichzeitig. Binärdateien werden aus offiziellen Quellen über [fadogen/binaries](https://github.com/fadogen/binaries) kompiliert.

Klicken Sie auf das **Aktualisieren**-Symbol in der Symbolleiste, um nach neuen Versionen zu suchen.

## Eine Version installieren

1. Gehen Sie zu **PHP** in der Seitenleiste
2. Klicken Sie auf **Installieren** neben der gewünschten Version
3. Warten Sie auf den Download

## Standardversion

Die Standardversion wird für neue Projekte und im Terminal verwendet.

Um die Standardversion zu ändern:
1. Gehen Sie zu **PHP**
2. Klicken Sie auf **Als Standard festlegen** neben der gewünschten Version

## Version pro Projekt

Jedes Projekt kann eine andere PHP-Version verwenden:
1. Wählen Sie das Projekt unter **Projekte**
2. Ändern Sie die PHP-Version in den Projekteinstellungen

Diese Konfiguration wird in der `.fadogen`-Datei gespeichert.

## php.ini-Konfiguration

Gängige PHP-Einstellungen können geändert werden:
- `memory_limit`
- `upload_max_filesize`
- `post_max_size`
