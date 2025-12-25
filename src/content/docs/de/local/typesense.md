---
title: Typesense
description: Suchserver für Laravel und Symfony mit Fadogen.
---

[Typesense](https://typesense.org/) ist eine schnelle, tippfehlertolerante Suchmaschine.

Klicken Sie auf das **Aktualisieren**-Symbol in der Symbolleiste, um nach neuen Versionen zu suchen.

## Installation

1. Gehen Sie zu **Typesense** in der Seitenleiste
2. Klicken Sie auf **Installieren**

## Konfiguration

### Port

Standardport: `8108`

Bei Bedarf änderbar.

### Umgebungsvariablen

```bash
TYPESENSE_API_KEY=fadogen-typesense-key
TYPESENSE_HOST="typesense.localhost"
TYPESENSE_PORT=443
TYPESENSE_PROTOCOL=https
```

Klicken Sie auf das **Verbindung**-Symbol in der Symbolleiste, um die Anmeldedaten anzuzeigen.

## Laravel Scout

Beim Erstellen eines Projekts mit Fadogen werden diese Variablen automatisch hinzugefügt:

```bash
SCOUT_DRIVER=typesense
SCOUT_PREFIX=myapp_
SCOUT_QUEUE=true
```

`SCOUT_PREFIX` isoliert Daten zwischen Projekten, die dieselbe Typesense-Instanz nutzen.

## Symfony

Verwenden Sie den offiziellen [Typesense PHP-Client](https://github.com/typesense/typesense-php):

```php
use Typesense\Client;

$client = new Client([
    'api_key' => 'fadogen-typesense-key',
    'nodes' => [[
        'host' => 'typesense.localhost',
        'port' => 443,
        'protocol' => 'https',
    ]],
]);

// Collections prefixen, um Daten zwischen Projekten zu isolieren
$collectionName = 'myapp_products';
```

## Autostart

Aktivieren Sie den Autostart, um Typesense beim Start von Fadogen zu starten.

## Daten

Binärdateien werden in `/Users/Shared/Fadogen` installiert (geteilt zwischen Mac-Konten).
