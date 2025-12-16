---
title: Erstes Projekt
description: Erstellen Sie Ihr erstes Projekt mit Fadogen.
---

## Überwachten Ordner hinzufügen

1. Öffnen Sie Fadogen
2. Gehen Sie zu **Projekte**
3. Klicken Sie auf das **Ordner verwalten**-Symbol in der Symbolleiste
4. Fügen Sie den Ordner hinzu, der Ihre Projekte enthält (z.B. `~/Developer`)

Fadogen erkennt automatisch alle PHP-Projekte in diesem Ordner.

## Neues Projekt erstellen

1. Klicken Sie auf das **Neues Projekt**-Symbol in der Symbolleiste
2. Wählen Sie **Laravel** oder **Symfony**
3. Wählen Sie den Speicherort und Projektnamen
4. Passen Sie Ihren Stack an (PHP-Version, Datenbank, etc.)
5. Klicken Sie auf **Erstellen** in der Symbolleiste

Fadogen wird:
- Das Projekt lokal mit Composer erstellen
- Die im Formular ausgewählten Abhängigkeiten installieren
- [Docker-Dateien](/de/reference/docker/) und [GitHub Actions Workflow](/de/deployment/github-actions/) generieren

Ihr Projekt ist jetzt unter `https://projektname.localhost` verfügbar.
