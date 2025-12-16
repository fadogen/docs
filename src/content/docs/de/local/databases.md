---
title: Datenbanken
description: MariaDB, MySQL und PostgreSQL mit Fadogen.
---

Fadogen unterstützt drei Datenbanksysteme:
- **MariaDB**
- **MySQL**
- **PostgreSQL**

Klicken Sie auf das **Aktualisieren**-Symbol in der Symbolleiste, um nach neuen Versionen zu suchen.

## Eine Datenbank installieren

1. Gehen Sie zu **Datenbanken** in der Seitenleiste
2. Klicken Sie auf **Installieren** neben dem gewünschten System
3. Wählen Sie die Version

## Starten/Stoppen

Jeder Dienst kann einzeln gestartet oder gestoppt werden.

### Autostart

Aktivieren Sie den Autostart, um den Dienst beim Start von Fadogen zu starten.

## Konfiguration

### Port

Jeder Dienst verwendet einen Standardport:
- MariaDB/MySQL: 3306
- PostgreSQL: 5432

Sie können den Port bei Bedarf ändern.

### Daten

Binärdateien werden in `/Users/Shared/Fadogen` installiert (geteilt zwischen Mac-Konten). Daten werden in `~/Library/Application Support/Fadogen/data/` gespeichert und bleiben zwischen Neustarts erhalten.

## Verbindung

Klicken Sie auf das **Verbindung**-Symbol in der Symbolleiste, um die Anmeldedaten anzuzeigen.

- **Host**: `127.0.0.1`
- **Port**: Entsprechend dem Dienst
- **Benutzer**: `root` (Standard)
- **Passwort**: Standardmäßig leer
