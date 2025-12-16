---
title: Cloudflare
description: Configure Cloudflare integration for DNS, Tunnel and R2.
---

Cloudflare provides DNS management, secure tunnels, and object storage.

## Capabilities

- **DNS**: Manage DNS zones and records
- **Tunnel**: Secure SSH access without exposing ports
- **R2**: Object storage for backups

## Get Your Global API Key

:::caution[Global API Key required]
Fadogen requires the Global API Key, not an API Token. API Tokens return a 403 error when listing zones — a [known limitation](https://community.cloudflare.com/t/register-and-manage-domains-with-cloudflare-registrar-api/453793) in Cloudflare's architecture.
:::

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Profile** > **API Tokens**
3. Scroll down to **Global API Key**
4. Click **View** and copy the key

## Add to Fadogen

1. Go to **Integrations**
2. Click **Add Integration**
3. Select **Cloudflare**
4. Enter your Cloudflare email and Global API Key
5. Click **Save**

## Using Cloudflare

### DNS Management

Your Cloudflare DNS zones are automatically available when linking a site to a server.

:::note
Your domains must use Cloudflare nameservers. Update the nameservers at your domain registrar to point to Cloudflare.
:::

### Cloudflare Tunnel

Create secure tunnels to access your servers via SSH without exposing port 22.

1. Deploy a site to a server
2. Enable Cloudflare Tunnel
3. Access your server via the tunnel hostname

#### SSH via Tunnel (external)

Fadogen connects to tunnels automatically. To connect from an external terminal, install `cloudflared`:

```bash
brew install cloudflared
```

Connect to your server:

```bash
ssh -o ProxyCommand='/opt/homebrew/bin/cloudflared access ssh --hostname %h' user@tunnel.example.com
```

### R2 Storage (Backups)

Fadogen automatically configures R2 for backups:
- **R2 credentials**: Created automatically when you add the Cloudflare integration
- **R2 bucket**: Created automatically (`fadogen-backups`) when you enable backups for a site

When linking a site to a server, select Cloudflare R2 as the backup destination.
