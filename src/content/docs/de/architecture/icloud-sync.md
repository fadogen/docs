---
title: iCloud-Synchronisierung
description: Wie Fadogen Ihre Daten sicher über iCloud speichert und synchronisiert.
---

Fadogen speichert Ihre Konfigurationsdaten lokal und synchronisiert sie sicher über iCloud.

## Was wird synchronisiert

Die folgenden Daten werden mit Ihrem privaten iCloud-Konto synchronisiert:

- Bereitgestellte Projekte
- Server
- Integrationen

Dies ermöglicht Ihnen, Ihre Einrichtung wiederherzustellen, wenn Sie Fadogen auf einem neuen Mac installieren.

## Sicherheit

API-Schlüssel, Tokens und Anmeldedaten werden lokal verschlüsselt. Daten werden mit Ihrem privaten iCloud-Konto synchronisiert — Fadogen hat keinen Backend-Server.

## Installation auf einem neuen Mac

Wenn Sie Fadogen auf einem neuen Mac installieren:

1. Melden Sie sich mit Ihrer Apple-ID an
2. Fadogen ruft automatisch Ihre verschlüsselten Daten von iCloud ab
3. Ihre Projekte, Server und Integrationen werden wiederhergestellt

Kein manueller Export oder Import erforderlich.

## Was wird NICHT synchronisiert

Die folgenden Daten verbleiben auf Ihrem lokalen Computer:

- Lokale Entwicklungsdatenbanken (MariaDB, MySQL, PostgreSQL)
- Cache-Daten (Redis, Valkey)
- PHP- und Node.js-Laufzeitdaten
- Lokale Projektdateien (in Ihrem Dateisystem gespeichert)

Dies sind reine Entwicklungsressourcen, die nicht zwischen Computern bestehen bleiben müssen.
