---
title: PHP
description: Manage PHP versions with Fadogen.
---

## Available Versions

Fadogen supports multiple PHP versions simultaneously. Binaries are compiled from official sources via [fadogen/binaries](https://github.com/fadogen/binaries).

Click the **Refresh** icon in the toolbar to check for new versions.

## Install a Version

1. Go to **PHP** in the sidebar
2. Click **Install** next to the desired version
3. Wait for the download

## Default Version

The default version is used for new projects and in the terminal.

To change the default version:
1. Go to **PHP**
2. Click **Set as Default** next to the desired version

## Per-Project Version

Each project can use a different PHP version:
1. Select the project in **Projects**
2. Change the PHP version in the project settings

This configuration is saved in the `.fadogen` file.

## php.ini Configuration

Common PHP settings can be modified:
- `memory_limit`
- `upload_max_filesize`
- `post_max_size`

## Pre-installed Extensions

Each PHP version comes with a comprehensive set of pre-compiled extensions:

`bcmath`, `bz2`, `calendar`, `ctype`, `curl`, `dba`, `dom`, `exif`, `ffi`, `fileinfo`, `filter`, `ftp`, `gd`, `gmp`, `iconv`, `igbinary`, `imagick`, `imap`, `intl`, `ldap`, `lz4`, `mbregex`, `mbstring`, `mongodb`, `mysqli`, `mysqlnd`, `opcache`, `openssl`, `pcntl`, `pdo`, `pdo_mysql`, `pdo_pgsql`, `pdo_sqlite`, `pdo_sqlsrv`, `pgsql`, `phar`, `posix`, `readline`, `redis`, `session`, `shmop`, `simplexml`, `soap`, `sockets`, `sodium`, `sqlite3`, `sqlsrv`, `sysvmsg`, `sysvsem`, `sysvshm`, `tokenizer`, `xml`, `xmlreader`, `xmlwriter`, `xsl`, `zip`, `zlib`

:::note
PHP 8.5 does not include `pdo_sqlsrv` and `sqlsrv` extensions due to compatibility issues.
:::

## Additional Extensions

Use the `fadogen php:ext` command to install or remove extensions not included by default:

```bash
# Install an extension
fadogen php:ext install <extension> [--php=<version>]

# List installed extensions
fadogen php:ext list [--php=<version>]

# Remove an extension
fadogen php:ext remove <extension> [--php=<version>]
```

The `--php` option specifies the target PHP version (e.g., `8.3`, `8.4`). If omitted, the default version configured in Fadogen is used.

:::caution
[Homebrew](https://brew.sh) must be installed on your system to compile additional extensions.
:::
