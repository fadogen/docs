---
title: Servers
description: Create and manage VPS servers with Fadogen.
---

Fadogen can provision and manage VPS servers on various cloud providers.

## Supported Providers

- DigitalOcean
- Hetzner
- Vultr
- Linode

## Create a Server

### From a Cloud Provider

1. Go to **Servers**
2. Click **New Server**
3. Select a cloud provider
4. Configure the server (region, size, etc.)
5. Optionally enable **Cloudflare Tunnel** (requires [Cloudflare integration](/integrations/config/cloudflare))
6. Click **Create**

Fadogen will create the server via the provider API, wait for it to be ready, and provision it.

### Custom Server

For servers created manually in a provider's dashboard or self-hosted servers (home lab, dedicated server, etc.):

1. Go to **Servers**
2. Click **New Server**
3. Select **Custom**
4. Provide SSH credentials:
   - Host and user
   - Authentication: password or SSH key (automatic detection from `~/.ssh` or paste private key content)
5. Optionally enable **Cloudflare Tunnel** (requires [Cloudflare integration](/integrations/config/cloudflare))
6. Click **Create**

:::note
The server should be a fresh installation with no prior configuration.
:::

:::tip
Use an IP address or a standard DNS hostname rather than an mDNS hostname (e.g., `myserver.local`). mDNS would require opening UDP port 5353, which adds complexity to the firewall configuration.
:::

## Provisioning

An Ansible playbook embedded in the app configures the server automatically.

:::caution
Do not close the app while provisioning is in progress. This process takes 5-10 minutes.
:::

:::note
Provisioning can fail for various reasons (provider issues, internet outage, etc.). The simplest solution is to delete the server and start again. Fadogen will also delete the server at the provider, but verify in the provider's dashboard that the deletion succeeded to avoid unexpected costs. If the problem persists, please [create an issue on GitHub](https://github.com/fadogen/app/issues).
:::

Provisioning configures:
- Firewall (only necessary ports, or none if using Cloudflare Tunnel)
- fail2ban (intrusion prevention)
- Docker Swarm
- Traefik (reverse proxy with automatic SSL)

## SSH Keys

Fadogen automatically scans your `~/.ssh` directory for available keys. If no key exists, one will be created automatically.
