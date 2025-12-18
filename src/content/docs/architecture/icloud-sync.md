---
title: iCloud Sync
description: How Fadogen stores and syncs your data securely via iCloud.
---

Fadogen stores your configuration data locally and syncs it securely via iCloud.

## What is synced

The following data is synced to your private iCloud account:

- Deployed projects
- Servers
- Integrations

This allows you to recover your setup when installing Fadogen on a new Mac.

## Security

API keys, tokens, and credentials are encrypted locally. Data is synced to your private iCloud account — Fadogen has no backend server.

## New Mac installation

When you install Fadogen on a new Mac:

1. Sign in with your Apple ID
2. Fadogen automatically retrieves your encrypted data from iCloud
3. Your projects, servers, and integrations are restored

No manual export or import required.

## What is NOT synced

The following data stays on your local machine:

- Local development databases (MariaDB, MySQL, PostgreSQL)
- Cache data (Redis, Valkey)
- PHP and Node.js runtime data
- Local project files (stored in your filesystem)

These are development-only resources that don't need to persist across machines.
