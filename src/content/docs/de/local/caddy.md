---
title: Caddy
description: Webserver mit automatischem HTTPS.
---

[Caddy](https://caddyserver.com) ist der von Fadogen verwendete Webserver. Er verwaltet automatisch HTTPS-Zertifikate für Ihre lokalen Projekte.

## Automatisches HTTPS

Alle Ihre Projekte sind über HTTPS mit gültigen Zertifikaten erreichbar.

URLs haben das Format `https://projektname.localhost`.

## Automatische Konfiguration

Fadogen generiert automatisch die Caddy-Konfiguration für jedes erkannte Projekt.

Die Konfiguration wird automatisch neu geladen, wenn:
- Ein Projekt hinzugefügt oder entfernt wird
- Die Einstellungen eines Projekts sich ändern

## Logs

Zeigen Sie Caddy-Logs unter **Caddy** > **Logs** an, um Probleme zu debuggen.

## PHP-FPM

Caddy verwendet PHP-FPM zur Ausführung von PHP-Skripten. Jedes Projekt verwendet seine konfigurierte PHP-Version.
