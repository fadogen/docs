---
title: Typesense
description: Serveur de recherche pour Laravel et Symfony avec Fadogen.
---

[Typesense](https://typesense.org/) est un moteur de recherche rapide et tolérant aux fautes de frappe.

Cliquez sur l'icône **Rafraîchir** dans la barre d'outils pour vérifier les nouvelles versions.

## Installation

1. Allez dans **Typesense** dans la barre latérale
2. Cliquez sur **Installer**

## Configuration

### Port

Port par défaut : `8108`

Modifiable si nécessaire.

### Variables d'environnement

```bash
TYPESENSE_API_KEY=fadogen-typesense-key
TYPESENSE_HOST="typesense.localhost"
TYPESENSE_PORT=443
TYPESENSE_PROTOCOL=https
```

Cliquez sur l'icône **Connexion** dans la barre d'outils pour afficher les identifiants.

## Laravel Scout

Lors de la création d'un projet avec Fadogen, ces variables sont ajoutées automatiquement :

```bash
SCOUT_DRIVER=typesense
SCOUT_PREFIX=myapp_
SCOUT_QUEUE=true
```

`SCOUT_PREFIX` isole les données entre les projets partageant la même instance Typesense.

## Symfony

Utilisez le [client PHP Typesense](https://github.com/typesense/typesense-php) officiel :

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

// Préfixer les collections pour isoler les données entre projets
$collectionName = 'myapp_products';
```

## Démarrage automatique

Activez le démarrage automatique pour lancer Typesense au démarrage de Fadogen.

## Données

Les binaires sont installés dans `/Users/Shared/Fadogen` (partagés entre les comptes Mac).
