---
title: Garage
description: Lokaler S3-Speicher für Laravel mit Fadogen.
---

[Garage](https://garagehq.deuxfleurs.fr/) ist ein leichtgewichtiger, selbst gehosteter S3-kompatibler Objektspeicher.

Klicken Sie auf das **Aktualisieren**-Symbol in der Symbolleiste, um nach neuen Versionen zu suchen.

## Installation

1. Gehen Sie zu **Garage** in der Seitenleiste
2. Klicken Sie auf **Installieren**

## Konfiguration

### Port

Standard S3-API-Port: `3900`

Bei Bedarf änderbar.

### Umgebungsvariablen

```bash
AWS_ENDPOINT_URL="https://s3.localhost"
AWS_REGION=garage
AWS_ACCESS_KEY_ID=GK6661646f67656e3067617261
AWS_SECRET_ACCESS_KEY=6661646f67656e67617261676573656372657430303030303030303030303030
```

Klicken Sie auf das **Verbindung**-Symbol in der Symbolleiste, um die Anmeldedaten anzuzeigen.

### AWS CLI

Um die AWS CLI mit Garage zu verwenden, fügen Sie den CA-Bundle-Pfad hinzu:

```bash
AWS_CA_BUNDLE="/Users/USER/Library/Application Support/Fadogen/config/php/cacert.pem"
```

Ersetzen Sie `USER` durch Ihren macOS-Benutzernamen.

## Laravel

Beim Erstellen eines Projekts mit Fadogen und aktiviertem S3-Speicher wird automatisch ein Bucket mit Ihrem Projektnamen erstellt und diese Variablen werden zur `.env` hinzugefügt:

```bash
AWS_ACCESS_KEY_ID=GK6661646f67656e3067617261
AWS_SECRET_ACCESS_KEY=6661646f67656e67617261676573656372657430303030303030303030303030
AWS_DEFAULT_REGION=garage
AWS_BUCKET=myapp
AWS_USE_PATH_STYLE_ENDPOINT=true
AWS_ENDPOINT=https://s3.localhost
```

Das Paket `league/flysystem-aws-s3-v3` wird automatisch installiert.

## Autostart

Aktivieren Sie den Autostart, um Garage beim Start von Fadogen zu starten.

## Daten

Daten werden in `~/Library/Application Support/Fadogen/garage/data/` gespeichert.

Binärdateien werden in `/Users/Shared/Fadogen` installiert (geteilt zwischen Mac-Konten).
