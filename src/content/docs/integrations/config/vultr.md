---
title: Vultr
description: Configure Vultr integration for VPS and DNS.
---

Vultr provides VPS hosting and DNS management.

## Capabilities

- **VPS**: Create and manage cloud instances
- **DNS**: Manage DNS zones and records

## Get Your API Key

1. Go to [Vultr Control Panel](https://my.vultr.com/)
2. Go to **Account** > **API**
3. Click **Enable API**
4. Copy the API key

## Add to Fadogen

1. Go to **Integrations**
2. Click **Add Integration**
3. Select **Vultr**
4. Paste your API key
5. Click **Save**

## Using Vultr

### Create a Server

1. Go to **Servers** > **New Server**
2. Select **Vultr** as provider
3. Choose region and instance type
4. Click **Create**

### DNS Management

Your Vultr DNS zones are automatically available when linking a site to a server.

:::caution[Active instance required]
You must have at least one active Vultr instance to add a domain to your account.
:::

:::note
Your domains must use Vultr nameservers. Update the nameservers at your domain registrar to point to Vultr.
:::
