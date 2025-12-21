---
title: PHP
description: Verwalten Sie PHP-Versionen mit Fadogen.
---

## Verfügbare Versionen

Fadogen unterstützt mehrere PHP-Versionen gleichzeitig. Binärdateien werden aus offiziellen Quellen über [fadogen/binaries](https://github.com/fadogen/binaries) kompiliert.

Klicken Sie auf das **Aktualisieren**-Symbol in der Symbolleiste, um nach neuen Versionen zu suchen.

## Eine Version installieren

1. Gehen Sie zu **PHP** in der Seitenleiste
2. Klicken Sie auf **Installieren** neben der gewünschten Version
3. Warten Sie auf den Download

## Standardversion

Die Standardversion wird für neue Projekte und im Terminal verwendet.

Um die Standardversion zu ändern:
1. Gehen Sie zu **PHP**
2. Klicken Sie auf **Als Standard festlegen** neben der gewünschten Version

## Version pro Projekt

Jedes Projekt kann eine andere PHP-Version verwenden:
1. Wählen Sie das Projekt unter **Projekte**
2. Ändern Sie die PHP-Version in den Projekteinstellungen

Diese Konfiguration wird in der `.fadogen`-Datei gespeichert.

## php.ini-Konfiguration

Gängige PHP-Einstellungen können geändert werden:
- `memory_limit`
- `upload_max_filesize`
- `post_max_size`

## Vorinstallierte Erweiterungen

Jede PHP-Version wird mit einem umfassenden Satz vorkompilierter Erweiterungen geliefert:

`bcmath`, `bz2`, `calendar`, `ctype`, `curl`, `dba`, `dom`, `exif`, `ffi`, `fileinfo`, `filter`, `ftp`, `gd`, `gmp`, `iconv`, `igbinary`, `imagick`, `imap`, `intl`, `ldap`, `lz4`, `mbregex`, `mbstring`, `mongodb`, `mysqli`, `mysqlnd`, `opcache`, `openssl`, `pcntl`, `pdo`, `pdo_mysql`, `pdo_pgsql`, `pdo_sqlite`, `pdo_sqlsrv`, `pgsql`, `phar`, `posix`, `readline`, `redis`, `session`, `shmop`, `simplexml`, `soap`, `sockets`, `sodium`, `sqlite3`, `sqlsrv`, `sysvmsg`, `sysvsem`, `sysvshm`, `tokenizer`, `xml`, `xmlreader`, `xmlwriter`, `xsl`, `zip`, `zlib`

:::note
PHP 8.5 enthält die Erweiterungen `pdo_sqlsrv` und `sqlsrv` aufgrund von Kompatibilitätsproblemen nicht.
:::

## Zusätzliche Erweiterungen

Verwenden Sie den Befehl `fadogen php:ext`, um Erweiterungen zu installieren oder zu entfernen, die nicht standardmäßig enthalten sind:

```bash
# Eine Erweiterung installieren
fadogen php:ext install <extension> [--php=<version>]

# Installierte Erweiterungen auflisten
fadogen php:ext list [--php=<version>]

# Eine Erweiterung entfernen
fadogen php:ext remove <extension> [--php=<version>]
```

Die Option `--php` gibt die Ziel-PHP-Version an (z.B. `8.3`, `8.4`). Wenn weggelassen, wird die in Fadogen konfigurierte Standardversion verwendet.

:::caution
[Homebrew](https://brew.sh) muss auf Ihrem System installiert sein, um zusätzliche Erweiterungen zu kompilieren.
:::
