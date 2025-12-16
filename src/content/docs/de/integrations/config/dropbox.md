---
title: Dropbox
description: Konfigurieren Sie die Dropbox-Integration für Backups.
---

Dropbox bietet Cloud-Speicher für Backups.

## Funktionen

- **Backup**: Cloud-Speicher für Site-Backups

## Dropbox-App erstellen

1. Gehen Sie zur [Dropbox App Console](https://www.dropbox.com/developers/apps)
2. Klicken Sie auf **Create app**
3. Wählen Sie **Scoped access**
4. Wählen Sie **App folder** als Zugriffstyp
5. Geben Sie einen **App folder name** ein (z.B. "Fadogen Backups")
6. Klicken Sie auf **Create app**

### Berechtigungen konfigurieren

1. Gehen Sie zum Tab **Permissions**
2. Aktivieren Sie diese Berechtigungen:
   - `files.content.read` — Inhalt Ihrer Dropbox-Dateien und -Ordner anzeigen
   - `files.content.write` — Inhalt Ihrer Dropbox-Dateien und -Ordner bearbeiten
3. Klicken Sie auf **Submit**

### Anmeldedaten abrufen

1. Gehen Sie zum Tab **Settings**
2. Kopieren Sie den **App key**
3. Kopieren Sie das **App secret**

## Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **Dropbox**
4. Fügen Sie Ihren **App key** und **App secret** ein
5. Klicken Sie auf **Im Browser autorisieren**
6. Autorisieren Sie Fadogen in Dropbox
7. Kopieren Sie den Autorisierungscode
8. Fügen Sie den Code in Fadogen ein
9. Klicken Sie auf **Speichern**

## Dropbox verwenden

### Backups konfigurieren

Wenn Sie eine Site mit einem Server verknüpfen, wählen Sie Dropbox als Backup-Ziel.
