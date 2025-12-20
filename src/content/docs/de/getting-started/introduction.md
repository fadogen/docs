---
title: Einführung
description: Entdecken Sie Fadogen, die kostenlose und quelloffene PHP-Entwicklungs- und Bereitstellungsumgebung für macOS.
---

## Überblick

**Fadogen** ist eine kostenlose und quelloffene PHP-Entwicklungs- und Bereitstellungsumgebung für macOS.

Sie bietet einen **einzigen, einheitlichen Workflow** zum Erstellen und Betreiben von Laravel- und Symfony-Anwendungen — von der lokalen Entwicklung bis zur Produktion — mit einer einzigen nativen App.

Keine manuelle Konfiguration.
Keine komplexe Toolchain.
Kein kostenpflichtiges SaaS erforderlich.

---

## Welches Problem löst Fadogen?

Moderne PHP-Entwicklung erfordert oft die Kombination mehrerer Tools:

- lokale Umgebungsmanager
- Runtime-Versionierung
- Docker-Konfigurationen
- CI/CD-Pipelines
- Server-Bereitstellung
- Backup-Strategien

Fadogen ersetzt dieses fragmentierte Setup durch eine **zusammenhängende, lokal ausgerichtete Erfahrung**, die den gesamten Lebenszyklus Ihrer Anwendung abdeckt.

---

## Lokale Entwicklung

Fadogen bietet alles, was Sie für die lokale Arbeit benötigen, direkt einsatzbereit:

- **Multi-Version PHP** mit projektbezogener Isolation
- **Node.js und Bun** mit Versionsverwaltung
- **Datenbanken**: MariaDB, MySQL, PostgreSQL
- **Caches**: Redis, Valkey
- **Webserver**: Caddy mit automatischem HTTPS
- **E-Mail-Tests**: Mailpit
- **Echtzeit**: Integrierte Laravel Reverb-Unterstützung

Alle Dienste sind in der App gebündelt und werden von ihr verwaltet.

---

## Projektgenerierung

Erstellen Sie neue Projekte in Minuten:

- Laravel oder Symfony
- Datenbank- und Cache-Auswahl
- Frontend- und Tooling-Optionen
- Produktionsreife Standardeinstellungen

Fadogen generiert:

- die Anwendungs-Codebasis
- ein mehrstufiges Dockerfile
- eine compose.yaml
- einen GitHub Actions CI/CD-Workflow

Sie besitzen alles.

---

## Produktionsbereitstellung

Deployen Sie Ihre Anwendungen direkt aus Fadogen:

- **VPS-Bereitstellung** auf Hetzner, DigitalOcean, Vultr, Linode
- **Ein-Klick-Deployments** ohne Ausfallzeit
- **GitHub Actions-Integration** für Push-to-Deploy
- **DNS-Verwaltung** über verschiedene Anbieter
- **Automatische SSL-Zertifikate**
- **Datenbank-Backups** zu S3-kompatiblem Speicher oder Dropbox
- **Automatische Wiederherstellung** bei neuen Deployments

Sie können auch auf Ihren eigenen Servern mit Cloudflare Tunnel deployen, ohne Ports zu öffnen.

---

## Datenschutz und Kontrolle

Fadogen wurde mit Datenschutz im Sinn entwickelt:

- Keine Konten
- Keine Telemetrie
- Keine Anmeldedaten auf externen Servern gespeichert

Alle sensiblen Daten bleiben auf Ihrem Gerät, verschlüsselt und über iCloud synchronisiert.

---

## Anforderungen

- macOS 15.0 (Sequoia) oder neuer
- Apple Silicon

---

## Nächste Schritte

Beginnen Sie mit der Installation von Fadogen und erstellen Sie Ihr erstes Projekt:

- [Installation](/de/getting-started/installation/)
- [Erstes Projekt](/de/getting-started/first-project/)

Für tiefere Einblicke erkunden Sie die Dokumentationsabschnitte zu Projekten, Bereitstellung und Infrastruktur.
