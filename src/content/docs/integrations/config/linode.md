---
title: Linode
description: Configure Linode integration for VPS and DNS.
---

Linode (Akamai) provides VPS hosting and DNS management.

## Capabilities

- **VPS**: Create and manage Linode instances
- **DNS**: Manage DNS zones and records

## Get Your API Token

1. Go to [Linode Cloud Manager](https://cloud.linode.com/)
2. Go to **Profile** > **API Tokens**
3. Click **Create a Personal Access Token**
4. Give it a name and set an expiration (or "Never" for no expiration)

### Required Permissions

Set these scopes:

| Scope | Access | Purpose |
|-------|--------|---------|
| Linodes | Read/Write | Create and manage servers |
| Domains | Read/Write | List zones and manage DNS records |

All other scopes can be set to **None**.

5. Click **Create Token**
6. Copy the token immediately (it won't be shown again)

## Add to Fadogen

1. Go to **Integrations**
2. Click **Add Integration**
3. Select **Linode**
4. Paste your API token
5. Click **Save**

## Using Linode

### Create a Server

1. Go to **Servers** > **New Server**
2. Select **Linode** as provider
3. Choose region and Linode type
4. Click **Create**

### DNS Management

Your Linode DNS zones are automatically available when linking a site to a server.

:::caution[Active Linode required]
Your domains will not be served by Linode's nameservers unless you have at least one active Linode on your account.
:::

:::note
Your domains must use Linode nameservers. Update the nameservers at your domain registrar to point to Linode.
:::
