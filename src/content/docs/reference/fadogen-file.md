---
title: .fadogen File
description: Project configuration file reference.
---

The `.fadogen` file stores project-specific settings.

## Location

Create at the root of your project:

```
my-project/
├── .fadogen
├── composer.json
└── ...
```

## Format

TOML format with sections:

```toml
# Fadogen Project Configuration

[php]
version = "8.4"

[node]
version = "22"

[javascript]
packageManager = "npm"
```

## Options

### [php]

PHP version for this project.

```toml
[php]
version = "8.3"
```

Available values: Any installed PHP version (e.g., `8.2`, `8.3`, `8.4`)

### [node]

Node.js version for this project.

```toml
[node]
version = "22"
```

Available values: Any installed Node.js version (e.g., `18`, `20`, `22`)

### [javascript]

Package manager for JavaScript dependencies.

```toml
[javascript]
packageManager = "bun"
```

Available values: `npm`, `bun`

## Automatic Updates

Fadogen automatically updates this file when you change settings in the UI.

## Git

You can commit `.fadogen` to share settings with your team.
