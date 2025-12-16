---
title: DigitalOcean
description: Configure DigitalOcean integration for VPS and DNS.
---

DigitalOcean provides VPS hosting (Droplets) and DNS management.

## Capabilities

- **VPS**: Create and manage Droplets
- **DNS**: Manage DNS zones and records

## Get Your API Token

1. Go to [DigitalOcean Control Panel](https://cloud.digitalocean.com/)
2. Go to **API** > **Tokens**
3. Click **Generate New Token**
4. Give it a name and select **Full Access**
5. Copy the token

## Add to Fadogen

1. Go to **Integrations**
2. Click **Add Integration**
3. Select **DigitalOcean**
4. Paste your API token
5. Click **Save**

## Using DigitalOcean

### Create a Server

1. Go to **Servers** > **New Server**
2. Select **DigitalOcean** as provider
3. Choose region and Droplet size
4. Click **Create**

### DNS Management

Your DigitalOcean DNS zones are automatically available when linking a site to a server.

:::note
Your domains must use DigitalOcean nameservers. Update the nameservers at your domain registrar to point to DigitalOcean.
:::
