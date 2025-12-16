---
title: Caches
description: Redis and Valkey with Fadogen.
---

Fadogen supports two cache systems:
- **Redis**
- **Valkey**: Open-source Redis fork

Click the **Refresh** icon in the toolbar to check for new versions.

## Install a Cache

1. Go to **Caches** in the sidebar
2. Click **Install** next to the desired system

## Configuration

### Port

Default port: `6379`

Modifiable if needed.

### Auto-Start

Enable auto-start to launch the service when Fadogen starts.

### Data

Binaries are installed in `/Users/Shared/Fadogen` (shared across Mac accounts). Data is stored in `~/Library/Application Support/Fadogen/data/` and preserved between restarts.

## Connection

Click the **Connection** icon in the toolbar to view credentials.

- **Host**: `127.0.0.1`
- **Port**: `6379`
- **Password**: Empty by default
