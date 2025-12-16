---
title: Cloudflare
description: Konfigurieren Sie die Cloudflare-Integration für DNS, Tunnel und R2.
---

Cloudflare bietet DNS-Verwaltung, sichere Tunnel und Objektspeicher.

## Funktionen

- **DNS**: Verwalten Sie DNS-Zonen und -Einträge
- **Tunnel**: Sicherer SSH-Zugang ohne Ports freizugeben
- **R2**: Objektspeicher für Backups

## Globalen API-Schlüssel abrufen

:::caution[Globaler API-Schlüssel erforderlich]
Fadogen erfordert den globalen API-Schlüssel, nicht ein API-Token. API-Tokens geben einen 403-Fehler beim Auflisten von Zonen zurück — eine [bekannte Einschränkung](https://community.cloudflare.com/t/register-and-manage-domains-with-cloudflare-registrar-api/453793) in Cloudflares Architektur.
:::

1. Gehen Sie zum [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Gehen Sie zu **Profil** > **API-Tokens**
3. Scrollen Sie nach unten zu **Globaler API-Schlüssel**
4. Klicken Sie auf **Anzeigen** und kopieren Sie den Schlüssel

## Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **Cloudflare**
4. Geben Sie Ihre Cloudflare-E-Mail und den globalen API-Schlüssel ein
5. Klicken Sie auf **Speichern**

## Cloudflare verwenden

### DNS-Verwaltung

Ihre Cloudflare DNS-Zonen sind automatisch verfügbar, wenn Sie eine Site mit einem Server verknüpfen.

:::note
Ihre Domains müssen Cloudflare-Nameserver verwenden. Aktualisieren Sie die Nameserver bei Ihrem Domain-Registrar, um auf Cloudflare zu verweisen.
:::

### Cloudflare Tunnel

Erstellen Sie sichere Tunnel, um über SSH auf Ihre Server zuzugreifen, ohne Port 22 freizugeben.

1. Deployen Sie eine Site auf einen Server
2. Aktivieren Sie Cloudflare Tunnel
3. Greifen Sie über den Tunnel-Hostname auf Ihren Server zu

#### SSH über Tunnel (extern)

Fadogen verbindet sich automatisch mit Tunneln. Um von einem externen Terminal aus zu verbinden, installieren Sie `cloudflared`:

```bash
brew install cloudflared
```

Verbinden Sie sich mit Ihrem Server:

```bash
ssh -o ProxyCommand='/opt/homebrew/bin/cloudflared access ssh --hostname %h' user@tunnel.example.com
```

### R2 Storage (Backups)

Fadogen konfiguriert R2 automatisch für Backups:
- **R2-Anmeldedaten**: Werden automatisch erstellt, wenn Sie die Cloudflare-Integration hinzufügen
- **R2-Bucket**: Wird automatisch erstellt (`fadogen-backups`), wenn Sie Backups für eine Site aktivieren

Wenn Sie eine Site mit einem Server verknüpfen, wählen Sie Cloudflare R2 als Backup-Ziel.
