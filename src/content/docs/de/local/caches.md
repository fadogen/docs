---
title: Caches
description: Redis und Valkey mit Fadogen.
---

Fadogen unterstützt zwei Cache-Systeme:
- **Redis**
- **Valkey**: Open-Source Redis-Fork

Klicken Sie auf das **Aktualisieren**-Symbol in der Symbolleiste, um nach neuen Versionen zu suchen.

## Einen Cache installieren

1. Gehen Sie zu **Caches** in der Seitenleiste
2. Klicken Sie auf **Installieren** neben dem gewünschten System

## Konfiguration

### Port

Standardport: `6379`

Bei Bedarf änderbar.

### Autostart

Aktivieren Sie den Autostart, um den Dienst beim Start von Fadogen zu starten.

### Daten

Binärdateien werden in `/Users/Shared/Fadogen` installiert (geteilt zwischen Mac-Konten). Daten werden in `~/Library/Application Support/Fadogen/data/` gespeichert und bleiben zwischen Neustarts erhalten.

## Verbindung

Klicken Sie auf das **Verbindung**-Symbol in der Symbolleiste, um die Anmeldedaten anzuzeigen.

- **Host**: `127.0.0.1`
- **Port**: `6379`
- **Passwort**: Standardmäßig leer
