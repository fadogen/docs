---
title: Vultr
description: Konfigurieren Sie die Vultr-Integration für VPS und DNS.
---

Vultr bietet VPS-Hosting und DNS-Verwaltung.

## Funktionen

- **VPS**: Erstellen und verwalten Sie Cloud-Instanzen
- **DNS**: Verwalten Sie DNS-Zonen und -Einträge

## API-Schlüssel abrufen

1. Gehen Sie zum [Vultr Control Panel](https://my.vultr.com/)
2. Gehen Sie zu **Account** > **API**
3. Klicken Sie auf **Enable API**
4. Kopieren Sie den API-Schlüssel

## Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **Vultr**
4. Fügen Sie Ihren API-Schlüssel ein
5. Klicken Sie auf **Speichern**

## Vultr verwenden

### Server erstellen

1. Gehen Sie zu **Server** > **Neuer Server**
2. Wählen Sie **Vultr** als Anbieter
3. Wählen Sie Region und Instanztyp
4. Klicken Sie auf **Erstellen**

### DNS-Verwaltung

Ihre Vultr DNS-Zonen sind automatisch verfügbar, wenn Sie eine Site mit einem Server verknüpfen.

:::caution[Aktive Instanz erforderlich]
Sie müssen mindestens eine aktive Vultr-Instanz haben, um eine Domain zu Ihrem Konto hinzuzufügen.
:::

:::note
Ihre Domains müssen Vultr-Nameserver verwenden. Aktualisieren Sie die Nameserver bei Ihrem Domain-Registrar, um auf Vultr zu verweisen.
:::
