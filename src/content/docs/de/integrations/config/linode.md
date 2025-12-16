---
title: Linode
description: Konfigurieren Sie die Linode-Integration für VPS und DNS.
---

Linode (Akamai) bietet VPS-Hosting und DNS-Verwaltung.

## Funktionen

- **VPS**: Erstellen und verwalten Sie Linode-Instanzen
- **DNS**: Verwalten Sie DNS-Zonen und -Einträge

## API-Token abrufen

1. Gehen Sie zum [Linode Cloud Manager](https://cloud.linode.com/)
2. Gehen Sie zu **Profile** > **API Tokens**
3. Klicken Sie auf **Create a Personal Access Token**
4. Geben Sie ihm einen Namen und legen Sie ein Ablaufdatum fest (oder "Never" für kein Ablaufdatum)

### Erforderliche Berechtigungen

Setzen Sie diese Scopes:

| Scope | Zugriff | Zweck |
|-------|---------|-------|
| Linodes | Read/Write | Server erstellen und verwalten |
| Domains | Read/Write | Zonen auflisten und DNS-Einträge verwalten |

Alle anderen Scopes können auf **None** gesetzt werden.

5. Klicken Sie auf **Create Token**
6. Kopieren Sie den Token sofort (er wird nicht erneut angezeigt)

## Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **Linode**
4. Fügen Sie Ihren API-Token ein
5. Klicken Sie auf **Speichern**

## Linode verwenden

### Server erstellen

1. Gehen Sie zu **Server** > **Neuer Server**
2. Wählen Sie **Linode** als Anbieter
3. Wählen Sie Region und Linode-Typ
4. Klicken Sie auf **Erstellen**

### DNS-Verwaltung

Ihre Linode DNS-Zonen sind automatisch verfügbar, wenn Sie eine Site mit einem Server verknüpfen.

:::caution[Aktive Linode erforderlich]
Ihre Domains werden nicht von Linodes Nameservern bedient, es sei denn, Sie haben mindestens eine aktive Linode in Ihrem Konto.
:::

:::note
Ihre Domains müssen Linode-Nameserver verwenden. Aktualisieren Sie die Nameserver bei Ihrem Domain-Registrar, um auf Linode zu verweisen.
:::
