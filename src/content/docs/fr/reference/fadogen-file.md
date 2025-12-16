---
title: Fichier .fadogen
description: Référence du fichier de configuration projet.
---

Le fichier `.fadogen` stocke les paramètres spécifiques au projet.

## Emplacement

Créez-le à la racine de votre projet :

```
mon-projet/
├── .fadogen
├── composer.json
└── ...
```

## Format

Format TOML avec des sections :

```toml
# Configuration Projet Fadogen

[php]
version = "8.4"

[node]
version = "22"

[javascript]
packageManager = "npm"
```

## Options

### [php]

Version PHP pour ce projet.

```toml
[php]
version = "8.3"
```

Valeurs disponibles : Toute version PHP installée (ex. `8.2`, `8.3`, `8.4`)

### [node]

Version Node.js pour ce projet.

```toml
[node]
version = "22"
```

Valeurs disponibles : Toute version Node.js installée (ex. `18`, `20`, `22`)

### [javascript]

Gestionnaire de paquets pour les dépendances JavaScript.

```toml
[javascript]
packageManager = "bun"
```

Valeurs disponibles : `npm`, `bun`

## Mises à jour automatiques

Fadogen met automatiquement à jour ce fichier lorsque vous modifiez les paramètres dans l'interface.

## Git

Vous pouvez commiter `.fadogen` pour partager les paramètres avec votre équipe.
