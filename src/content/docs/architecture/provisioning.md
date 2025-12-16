---
title: Provisioning
description: How Fadogen provisions servers with Ansible.
---

Fadogen uses Ansible to provision VPS servers automatically.

## Self-Contained Ansible

Ansible and Python are bundled with Fadogen:
- No system Python required
- No pip installations
- Fully isolated environment

## Provisioning Workflow

### Phase 1: Server Connection
1. Create VPS via cloud provider API, or connect to a custom server
2. Wait for IP address assignment (if cloud provider)
3. Wait for SSH availability

### Phase 2: SSH Setup (as root)
1. Create target user with sudo permissions
2. Deploy SSH public key
3. Configure passwordless sudo

### Phase 3: Server Provisioning (as target user)
1. Install Python packages (docker, jsondiff)
2. Harden SSH (disable password auth, disable root login)
3. Configure fail2ban for brute-force protection
4. Enable automatic security updates
5. Configure NTP time synchronization
6. Set up iptables firewall
7. Install Docker CE
8. Initialize Docker Swarm
9. Deploy Traefik reverse proxy

### Phase 4: Cloudflare Tunnel (Optional)
1. Install cloudflared daemon
2. Configure tunnel with token
3. Test tunnel connectivity
4. Close SSH port 22 (tunnel-only access)

## What Gets Installed

### Security
- SSH hardening (key-based auth only)
- fail2ban protection
- Automatic security updates
- iptables firewall

### Container Platform
- Docker CE
- Docker Swarm (single-node)

### Reverse Proxy
- Traefik 3.x
- Docker Swarm service discovery

### Optional
- Cloudflare Tunnel for private server access

SSL certificates are configured per-site via Let's Encrypt DNS-01 challenge when deploying projects.

## Logs

Provisioning logs are streamed in real-time to the UI.

## Troubleshooting

Provisioning can fail for various reasons (provider issues, internet outage, etc.). The simplest solution is to delete the server and start again.

If the problem persists, please [create an issue on GitHub](https://github.com/fadogen/app/issues).
