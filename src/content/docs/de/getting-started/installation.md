---
title: Installation
description: Wie Sie Fadogen auf macOS herunterladen und installieren.
---

## Herunterladen und installieren

Laden Sie die neueste Version von [GitHub Releases](https://github.com/fadogen/app/releases) herunter, öffnen Sie die `.dmg` und ziehen Sie Fadogen in den Programme-Ordner.

## Ersteinrichtung

Beim ersten Start wird Fadogen:
1. TLS-Zertifikate für lokales HTTPS installieren
2. Shell-Integration konfigurieren (bash/zsh/fish)

### TLS-Zertifikate

Eine Systemaufforderung erscheint, die Sie bittet, das Caddy-Stammzertifikat in Ihren Schlüsselbund zu installieren. Dies ist erforderlich, damit lokales HTTPS ohne Browser-Warnungen funktioniert.

- **Wenn Sie akzeptieren**: Lokales HTTPS funktioniert nahtlos. **Starten Sie Ihre Browser neu**, nachdem Sie akzeptiert haben, damit das Zertifikat erkannt wird.
- **Wenn Sie ablehnen**: Ihre lokalen Seiten funktionieren weiterhin, aber Browser zeigen Sicherheitswarnungen für HTTPS-Verbindungen an.

## Updates

Um Fadogen zu aktualisieren, klicken Sie auf **Fadogen** in der Menüleiste und wählen Sie **Nach Updates suchen**. Sie können auch automatische Updates in diesem Menü aktivieren.
