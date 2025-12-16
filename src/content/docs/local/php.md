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
