---
title: Hetzner
description: Konfigurieren Sie Hetzner-Integrationen für VPS und DNS.
---

:::caution[Zwei separate Integrationen]
Hetzner verwendet zwei unabhängige Systeme mit separaten Konsolen und API-Tokens. In Fadogen sind dies **zwei unterschiedliche Integrationen**: Hetzner Cloud (VPS) und Hetzner DNS.
:::

## Hetzner Cloud (VPS)

Erstellen und verwalten Sie Cloud-Server.

### Cloud API-Token abrufen

1. Gehen Sie zur [Hetzner Cloud Console](https://console.hetzner.cloud/)
2. Wählen Sie Ihr Projekt
3. Gehen Sie zu **Security** > **API Tokens**
4. Klicken Sie auf **Generate API Token**
5. Geben Sie ihm einen Namen und wählen Sie **Read & Write**
6. Kopieren Sie den Token

### Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **Hetzner Cloud**
4. Fügen Sie Ihren API-Token ein
5. Klicken Sie auf **Speichern**

## Hetzner DNS

Verwalten Sie DNS-Zonen und -Einträge.

### DNS API-Token abrufen

1. Gehen Sie zur [Hetzner DNS Console](https://dns.hetzner.com/)
2. Klicken Sie auf **Manage API tokens**
3. Klicken Sie auf **Create access token**
4. Geben Sie ihm einen Namen
5. Kopieren Sie den Token sofort (er wird nicht erneut angezeigt)

### Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **Hetzner DNS**
4. Fügen Sie Ihren API-Token ein
5. Klicken Sie auf **Speichern**

## Hetzner Cloud verwenden

### Server erstellen

1. Gehen Sie zu **Server** > **Neuer Server**
2. Wählen Sie **Hetzner Cloud** als Anbieter
3. Wählen Sie Region und Servertyp
4. Klicken Sie auf **Erstellen**

## Hetzner DNS verwenden

Ihre Hetzner DNS-Zonen sind automatisch verfügbar, wenn Sie eine Site mit einem Server verknüpfen.

:::note
Ihre Domains müssen Hetzner-Nameserver verwenden. Aktualisieren Sie die Nameserver bei Ihrem Domain-Registrar, um auf Hetzner zu verweisen.
:::
