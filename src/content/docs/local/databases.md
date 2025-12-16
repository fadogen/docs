---
title: Databases
description: MariaDB, MySQL and PostgreSQL with Fadogen.
---

Fadogen supports three database systems:
- **MariaDB**
- **MySQL**
- **PostgreSQL**

Click the **Refresh** icon in the toolbar to check for new versions.

## Install a Database

1. Go to **Databases** in the sidebar
2. Click **Install** next to the desired system
3. Choose the version

## Start/Stop

Each service can be started or stopped individually.

### Auto-Start

Enable auto-start to launch the service when Fadogen starts.

## Configuration

### Port

Each service uses a default port:
- MariaDB/MySQL: 3306
- PostgreSQL: 5432

You can modify the port if needed.

### Data

Binaries are installed in `/Users/Shared/Fadogen` (shared across Mac accounts). Data is stored in `~/Library/Application Support/Fadogen/data/` and preserved between restarts.

## Connection

Click the **Connection** icon in the toolbar to view credentials.

- **Host**: `127.0.0.1`
- **Port**: According to the service
- **User**: `root` (default)
- **Password**: Empty by default
