---
title: Reverb
description: WebSocket-Server für Laravel mit Fadogen.
---

[Laravel Reverb](https://laravel.com/docs/reverb) ist ein WebSocket-Server für Echtzeit-Anwendungen.

Klicken Sie auf das **Aktualisieren**-Symbol in der Symbolleiste, um nach neuen Versionen zu suchen.

## Installation

1. Gehen Sie zu **Reverb** in der Seitenleiste
2. Klicken Sie auf **Installieren**

## Konfiguration

### Port

Standardport: `8080`

Bei Bedarf änderbar.

### Umgebungsvariablen

```bash
BROADCAST_DRIVER=reverb
REVERB_APP_ID=1001
REVERB_APP_KEY=laravel-fadogen
REVERB_APP_SECRET=secret
REVERB_HOST="reverb.localhost"
REVERB_PORT=443
REVERB_SCHEME=https
```

Klicken Sie auf das **Verbindung**-Symbol in der Symbolleiste, um die Anmeldedaten anzuzeigen.

## Autostart

Aktivieren Sie den Autostart, um Reverb beim Start von Fadogen zu starten.

## Daten

Binärdateien werden in `/Users/Shared/Fadogen` installiert (geteilt zwischen Mac-Konten).
