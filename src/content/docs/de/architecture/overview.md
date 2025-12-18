---
title: Architekturübersicht
description: Technischer Überblick über die Architektur von Fadogen.
---

Fadogen ist eine **100% eigenständige** native macOS-Anwendung.

## Alles inklusive

Alle Tools sind direkt in der Anwendung gebündelt:

- **PHP** (vorherige Hauptversion)
- **Node.js** (aktuelles LTS)
- **Caddy** (Webserver)
- **Ansible** (Provisionierung)
- **Python** (für Ansible)

Keine externen Tools erforderlich. Kein Homebrew oder andere Paketmanager nötig.

## Unabhängige Binärdateien

Binärdateien werden aus dem öffentlichen Repository [fadogen/binaries](https://github.com/fadogen/binaries) kompiliert und automatisch über R2-Speicher verteilt. Sie werden regelmäßig aktualisiert.

Die Anwendung lädt die erforderlichen Binärdateien transparent herunter und aktualisiert sie.

## Datenschutz

- **Keine Server-Kommunikation**: alles läuft lokal
- **Sichere Daten**: in iCloud gespeichert und verschlüsselt — siehe [iCloud-Synchronisierung](/de/architecture/icloud-sync/)
- **Open Source**: der Code ist überprüfbar

## Verteilung

Fadogen wird über **GitHub Releases** verteilt mit:
- Developer ID-Signierung
- Apple-Notarisierung

### Warum nicht der Mac App Store?

Die Mac App Store-Sandbox verhindert:
1. Installation von SSL-Zertifikaten für lokales HTTPS
2. Herunterladen von Binärdateien nach der Installation

## Lizenz

Fadogen ist unter **AGPLv3** lizenziert. Diese Lizenz wurde gewählt, um sicherzustellen, dass potenzielle Forks Open Source bleiben und für alle nützlich sind.
