---
title: Integrations
description: Connect Fadogen to cloud providers and services.
---

Fadogen integrates with cloud providers and services to enable server provisioning, DNS management, secure tunnels, and backups.

:::note[Privacy]
Fadogen has no backend server — only Cloudflare R2 hosts the precompiled binaries. Your API tokens are stored encrypted in your private iCloud account.
:::

| Provider | VPS | DNS | Tunnel | Backup |
|----------|:---:|:---:|:------:|:------:|
| [Bunny](/integrations/config/bunny) | | ✓ | | |
| [Cloudflare](/integrations/config/cloudflare) | | ✓ | ✓ | ✓ |
| [DigitalOcean](/integrations/config/digitalocean) | ✓ | ✓ | | |
| [Dropbox](/integrations/config/dropbox) | | | | ✓ |
| [Hetzner](/integrations/config/hetzner) | ✓ | ✓ | | |
| [Linode](/integrations/config/linode) | ✓ | ✓ | | |
| [Scaleway](/integrations/config/scaleway) | | | | ✓ |
| [Vultr](/integrations/config/vultr) | ✓ | ✓ | | |

## VPS

Create and manage servers on supported cloud providers. Not required if you use [manual servers](/deployment/servers#manual-servers).

## DNS

Automate DNS record creation when linking projects. You can configure DNS manually at your provider, but you'll also need to update the server configuration manually.

## Tunnel

Expose your servers securely via Cloudflare Tunnel without opening firewall ports. Recommended for enhanced security.

## Backup

Store encrypted backups of your deployed applications. Backups are automatically restored when deploying to a new server.

## CI/CD

[GitHub](/integrations/config/github) is required for automated deployments. Link your project to a GitHub repository to enable push-to-deploy.

## Add an Integration

1. Go to **Integrations**
2. Click **Add Integration**
3. Select the provider
4. Enter your API credentials
5. Click **Save**

See the configuration guides in the sidebar for detailed instructions on each provider.
