---
title: PHP
description: Gérez les versions PHP avec Fadogen.
---

## Versions disponibles

Fadogen supporte plusieurs versions de PHP simultanément. Les binaires sont compilés depuis les sources officielles via [fadogen/binaries](https://github.com/fadogen/binaries).

Cliquez sur l'icône **Rafraîchir** dans la barre d'outils pour vérifier les nouvelles versions.

## Installer une version

1. Allez dans **PHP** dans la barre latérale
2. Cliquez sur **Installer** à côté de la version souhaitée
3. Attendez la fin du téléchargement

## Version par défaut

La version par défaut est utilisée pour les nouveaux projets et dans le terminal.

Pour changer la version par défaut :
1. Allez dans **PHP**
2. Cliquez sur **Définir par défaut** à côté de la version souhaitée

## Version par projet

Chaque projet peut utiliser une version PHP différente :
1. Sélectionnez le projet dans **Projets**
2. Changez la version PHP dans les paramètres du projet

Cette configuration est enregistrée dans le fichier `.fadogen`.

## Configuration php.ini

Les paramètres PHP courants peuvent être modifiés :
- `memory_limit`
- `upload_max_filesize`
- `post_max_size`

## Extensions pré-installées

Chaque version de PHP est livrée avec un ensemble complet d'extensions pré-compilées :

`bcmath`, `bz2`, `calendar`, `ctype`, `curl`, `dba`, `dom`, `exif`, `ffi`, `fileinfo`, `filter`, `ftp`, `gd`, `gmp`, `iconv`, `igbinary`, `imagick`, `imap`, `intl`, `ldap`, `lz4`, `mbregex`, `mbstring`, `mongodb`, `mysqli`, `mysqlnd`, `opcache`, `openssl`, `pcntl`, `pdo`, `pdo_mysql`, `pdo_pgsql`, `pdo_sqlite`, `pdo_sqlsrv`, `pgsql`, `phar`, `posix`, `readline`, `redis`, `session`, `shmop`, `simplexml`, `soap`, `sockets`, `sodium`, `sqlite3`, `sqlsrv`, `sysvmsg`, `sysvsem`, `sysvshm`, `tokenizer`, `xml`, `xmlreader`, `xmlwriter`, `xsl`, `zip`, `zlib`

:::note
PHP 8.5 n'inclut pas les extensions `pdo_sqlsrv` et `sqlsrv` en raison de problèmes de compatibilité.
:::

## Extensions supplémentaires

Utilisez la commande `fadogen php:ext` pour installer ou supprimer des extensions non incluses par défaut :

```bash
# Installer une extension
fadogen php:ext install <extension> [--php=<version>]

# Lister les extensions installées
fadogen php:ext list [--php=<version>]

# Supprimer une extension
fadogen php:ext remove <extension> [--php=<version>]
```

L'option `--php` spécifie la version PHP cible (ex: `8.3`, `8.4`). Si omise, la version par défaut configurée dans Fadogen est utilisée.

:::caution
[Homebrew](https://brew.sh) doit être installé sur votre système pour compiler des extensions supplémentaires.
:::
