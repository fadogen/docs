---
title: Typesense
description: Search server for Laravel and Symfony with Fadogen.
---

[Typesense](https://typesense.org/) is a fast, typo-tolerant search engine for building search experiences.

Click the **Refresh** icon in the toolbar to check for new versions.

## Installation

1. Go to **Typesense** in the sidebar
2. Click **Install**

## Configuration

### Port

Default port: `8108`

Modifiable if needed.

### Environment Variables

```bash
TYPESENSE_API_KEY=fadogen-typesense-key
TYPESENSE_HOST="typesense.localhost"
TYPESENSE_PORT=443
TYPESENSE_PROTOCOL=https
```

Click the **Connection** icon in the toolbar to view credentials.

## Laravel Scout

When creating a project with Fadogen, these variables are added automatically:

```bash
SCOUT_DRIVER=typesense
SCOUT_PREFIX=myapp_
SCOUT_QUEUE=true
```

`SCOUT_PREFIX` isolates data between projects sharing the same Typesense instance.

## Symfony

Use the official [Typesense PHP client](https://github.com/typesense/typesense-php):

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

// Prefix collections to isolate data between projects
$collectionName = 'myapp_products';
```

## Auto-Start

Enable auto-start to launch Typesense when Fadogen starts.

## Data

Binaries are installed in `/Users/Shared/Fadogen` (shared across Mac accounts).
