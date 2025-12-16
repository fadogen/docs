---
title: Scaleway
description: Konfigurieren Sie die Scaleway-Integration für Backups.
---

Scaleway bietet S3-kompatiblen Objektspeicher für Backups.

## Funktionen

- **Backup**: Objektspeicher für Site-Backups

## Anmeldedaten abrufen

1. Gehen Sie zur [Scaleway Console](https://console.scaleway.com/)
2. Klicken Sie auf Ihr Profilsymbol > **IAM and API Keys**
3. Gehen Sie zum Tab **API Keys**
4. Klicken Sie auf **Generate an API Key**
5. Wählen Sie **Myself**
6. Beantworten Sie **Yes** auf "Will this API key be used for Object Storage?"
7. Wählen Sie das **default**-Projekt
8. Klicken Sie auf **Generate**
9. Kopieren Sie den Access Key und Secret Key

## Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **Scaleway**
4. Geben Sie Ihren Access Key und Secret Key ein
5. Klicken Sie auf **Speichern**

## Scaleway verwenden

### Backups konfigurieren

Wenn Sie eine Site mit einem Server verknüpfen, wählen Sie Scaleway als Backup-Ziel.
