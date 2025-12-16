---
title: Vite Plugin
description: Automatische HTTPS-Konfiguration für neue Laravel-Projekte.
---

Das `@fadogen/vite-plugin`-Paket konfiguriert automatisch HTTPS für den Vite-Entwicklungsserver, indem es die von Fadogen generierten TLS-Zertifikate lädt.

:::tip[Automatische Einrichtung]
Beim Erstellen eines neuen Laravel-Projekts aus der Fadogen-App wird dieses Plugin automatisch installiert und konfiguriert.
:::

Dieses Plugin vermeidet das manuelle Setzen der Umgebungsvariablen `VITE_DEV_SERVER_KEY` und `VITE_DEV_SERVER_CERT` in Ihrer `.env`-Datei.

## Installation

```bash
npm install -D @fadogen/vite-plugin
```

## Konfiguration

In Ihrer `vite.config.ts`-Datei:

```ts
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import fadogen from '@fadogen/vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    fadogen(),
  ],
})
```

:::caution[Laravel Herd-Benutzer]
Wenn Sie Laravel Herd installiert haben, müssen Sie dessen automatische TLS-Erkennung deaktivieren, indem Sie `detectTls: false` zum Laravel-Plugin hinzufügen:

```ts
laravel({
  input: ['resources/css/app.css', 'resources/js/app.js'],
  refresh: true,
  detectTls: false,
}),
```

Andernfalls schlägt Vite aufgrund widersprüchlicher TLS-Konfigurationen fehl.
:::

## Funktionsweise

Das Plugin erkennt automatisch die von Fadogen generierten TLS-Zertifikate:

1. Ermittelt den Projektordnernamen
2. Konvertiert ihn in einen gültigen Domainnamen (z.B. `my-project` → `my-project.localhost`)
3. Sucht nach Zertifikaten im Fadogen-Datenordner
4. Konfiguriert den Vite-Server für HTTPS mit diesen Zertifikaten

### Zertifikatspeicherort

Zertifikate werden gespeichert in:

```
~/Library/Application Support/Fadogen/data/caddy/certificates/local/{domain}/
```

### Projektnamen-Konvertierung

Der Ordnername wird in einen gültigen Hostnamen (RFC 1123) konvertiert:

| Ordnername | Generierte Domain |
|------------|-------------------|
| `my-project` | `my-project.localhost` |
| `My Project` | `my-project.localhost` |
| `my_project` | `my-project.localhost` |

:::note
Das Projekt muss zuerst zu Fadogen hinzugefügt werden, damit Zertifikate generiert werden.
:::

## Logs

Das Plugin zeigt Meldungen in der Konsole an:

```
[@fadogen/vite-plugin] Using certificates for: my-project.localhost
```

Falls Zertifikate nicht gefunden werden:

```
[@fadogen/vite-plugin] Certificates not found at: ~/Library/Application Support/...
```
