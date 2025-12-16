---
title: Dropbox
description: Configure Dropbox integration for backups.
---

Dropbox provides cloud storage for backups.

## Capabilities

- **Backup**: Cloud storage for site backups

## Create a Dropbox App

1. Go to [Dropbox App Console](https://www.dropbox.com/developers/apps)
2. Click **Create app**
3. Select **Scoped access**
4. Choose **App folder** access type
5. Enter an **App folder name** (e.g., "Fadogen Backups")
6. Click **Create app**

### Configure Permissions

1. Go to the **Permissions** tab
2. Enable these permissions:
   - `files.content.read` — View content of your Dropbox files and folders
   - `files.content.write` — Edit content of your Dropbox files and folders
3. Click **Submit**

### Get Your Credentials

1. Go to the **Settings** tab
2. Copy the **App key**
3. Copy the **App secret**

## Add to Fadogen

1. Go to **Integrations**
2. Click **Add Integration**
3. Select **Dropbox**
4. Paste your **App key** and **App secret**
5. Click **Authorize in the browser**
6. Authorize Fadogen in Dropbox
7. Copy the authorization code
8. Paste the code in Fadogen
9. Click **Save**

## Using Dropbox

### Configure Backups

When linking a site to a server, select Dropbox as the backup destination.
