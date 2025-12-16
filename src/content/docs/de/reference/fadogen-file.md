---
title: .fadogen-Datei
description: Referenz zur Projektkonfigurationsdatei.
---

Die `.fadogen`-Datei speichert projektspezifische Einstellungen.

## Speicherort

Erstellen Sie sie im Stammverzeichnis Ihres Projekts:

```
my-project/
├── .fadogen
├── composer.json
└── ...
```

## Format

TOML-Format mit Abschnitten:

```toml
# Fadogen Projektkonfiguration

[php]
version = "8.4"

[node]
version = "22"

[javascript]
packageManager = "npm"
```

## Optionen

### [php]

PHP-Version für dieses Projekt.

```toml
[php]
version = "8.3"
```

Verfügbare Werte: Jede installierte PHP-Version (z.B. `8.2`, `8.3`, `8.4`)

### [node]

Node.js-Version für dieses Projekt.

```toml
[node]
version = "22"
```

Verfügbare Werte: Jede installierte Node.js-Version (z.B. `18`, `20`, `22`)

### [javascript]

Paketmanager für JavaScript-Abhängigkeiten.

```toml
[javascript]
packageManager = "bun"
```

Verfügbare Werte: `npm`, `bun`

## Automatische Aktualisierungen

Fadogen aktualisiert diese Datei automatisch, wenn Sie Einstellungen in der Benutzeroberfläche ändern.

## Git

Sie können `.fadogen` committen, um Einstellungen mit Ihrem Team zu teilen.
