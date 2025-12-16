---
title: DigitalOcean
description: Konfigurieren Sie die DigitalOcean-Integration für VPS und DNS.
---

DigitalOcean bietet VPS-Hosting (Droplets) und DNS-Verwaltung.

## Funktionen

- **VPS**: Erstellen und verwalten Sie Droplets
- **DNS**: Verwalten Sie DNS-Zonen und -Einträge

## API-Token abrufen

1. Gehen Sie zum [DigitalOcean Control Panel](https://cloud.digitalocean.com/)
2. Gehen Sie zu **API** > **Tokens**
3. Klicken Sie auf **Generate New Token**
4. Geben Sie ihm einen Namen und wählen Sie **Full Access**
5. Kopieren Sie den Token

## Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **DigitalOcean**
4. Fügen Sie Ihren API-Token ein
5. Klicken Sie auf **Speichern**

## DigitalOcean verwenden

### Server erstellen

1. Gehen Sie zu **Server** > **Neuer Server**
2. Wählen Sie **DigitalOcean** als Anbieter
3. Wählen Sie Region und Droplet-Größe
4. Klicken Sie auf **Erstellen**

### DNS-Verwaltung

Ihre DigitalOcean DNS-Zonen sind automatisch verfügbar, wenn Sie eine Site mit einem Server verknüpfen.

:::note
Ihre Domains müssen DigitalOcean-Nameserver verwenden. Aktualisieren Sie die Nameserver bei Ihrem Domain-Registrar, um auf DigitalOcean zu verweisen.
:::
