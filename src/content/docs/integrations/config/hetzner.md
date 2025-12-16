---
title: Hetzner
description: Configure Hetzner integrations for VPS and DNS.
---

:::caution[Two separate integrations]
Hetzner uses two independent systems with separate consoles and API tokens. In Fadogen, these are **two distinct integrations**: Hetzner Cloud (VPS) and Hetzner DNS.
:::

## Hetzner Cloud (VPS)

Create and manage cloud servers.

### Get Your Cloud API Token

1. Go to [Hetzner Cloud Console](https://console.hetzner.cloud/)
2. Select your project
3. Go to **Security** > **API Tokens**
4. Click **Generate API Token**
5. Give it a name and select **Read & Write**
6. Copy the token

### Add to Fadogen

1. Go to **Integrations**
2. Click **Add Integration**
3. Select **Hetzner Cloud**
4. Paste your API token
5. Click **Save**

## Hetzner DNS

Manage DNS zones and records.

### Get Your DNS API Token

1. Go to [Hetzner DNS Console](https://dns.hetzner.com/)
2. Click **Manage API tokens**
3. Click **Create access token**
4. Give it a name
5. Copy the token immediately (it won't be shown again)

### Add to Fadogen

1. Go to **Integrations**
2. Click **Add Integration**
3. Select **Hetzner DNS**
4. Paste your API token
5. Click **Save**

## Using Hetzner Cloud

### Create a Server

1. Go to **Servers** > **New Server**
2. Select **Hetzner Cloud** as provider
3. Choose region and server type
4. Click **Create**

## Using Hetzner DNS

Your Hetzner DNS zones are automatically available when linking a site to a server.

:::note
Your domains must use Hetzner nameservers. Update the nameservers at your domain registrar to point to Hetzner.
:::
